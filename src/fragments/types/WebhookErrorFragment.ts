/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WebhookErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: WebhookErrorFragment
// ====================================================

export interface WebhookErrorFragment {
  __typename: "WebhookError";
  code: WebhookErrorCode;
  field: string | null;
  message: string | null;
}
