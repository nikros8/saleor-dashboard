import {
  ApolloError,
  MutationFunction,
  MutationResult,
  useMutation as useBaseMutation
} from "@apollo/client";
import {
  handleNestedMutationErrors,
  showAllErrors,
  useUser
} from "@saleor/auth";
import { isJwtError } from "@saleor/auth/errors";
import { commonMessages } from "@saleor/intl";
import { getMutationStatus } from "@saleor/misc";
import { MutationResultAdditionalProps } from "@saleor/types";
import { GqlErrors, hasError } from "@saleor/utils/api";
import { DocumentNode } from "graphql";
import { useIntl } from "react-intl";

import useNotifier from "./useNotifier";

export type MutationResultWithOpts<TData> = MutationResult<TData> &
  MutationResultAdditionalProps;

export type UseMutation<TData, TVariables> = [
  MutationFunction<TData, TVariables>,
  MutationResultWithOpts<TData>
];
export type UseMutationCbs<TData> = Partial<{
  onCompleted: (data: TData) => void;
  onError: (error: ApolloError) => void;
  refetchQueries?: string[];
}>;
export type UseMutationHook<TData, TVariables> = (
  cbs: UseMutationCbs<TData>
) => UseMutation<TData, TVariables>;

function makeMutation<TData, TVariables>(
  mutation: DocumentNode
): UseMutationHook<TData, TVariables> {
  function useMutation<TData, TVariables>({
    onCompleted,
    onError,
    refetchQueries = []
  }: UseMutationCbs<TData>): UseMutation<TData, TVariables> {
    const notify = useNotifier();
    const intl = useIntl();
    const user = useUser();

    const [mutateFn, result] = useBaseMutation(mutation, {
      onCompleted: data => {
        handleNestedMutationErrors({
          data,
          intl,
          notify
        });

        onCompleted(data);
      },
      refetchQueries,
      onError: (err: ApolloError) => {
        if (err.graphQLErrors) {
          if (hasError(err, GqlErrors.ReadOnlyException)) {
            notify({
              status: "error",
              text: intl.formatMessage(commonMessages.readOnly)
            });
          } else if (err.graphQLErrors.some(isJwtError)) {
            user.logout();
            notify({
              status: "error",
              text: intl.formatMessage(commonMessages.sessionExpired)
            });
          } else if (!hasError(err, GqlErrors.LimitReachedException)) {
            err.graphQLErrors.map(graphQLError => {
              notify({
                status: "error",
                apiMessage: graphQLError.message
              });
            });
          }
        } else {
          showAllErrors({ notify, error: err });
        }

        if (onError) {
          onError(err);
        }
      }
    });

    return [
      mutateFn,
      {
        ...result,
        status: getMutationStatus(result)
      }
    ];
  }

  return useMutation;
}

export default makeMutation;
