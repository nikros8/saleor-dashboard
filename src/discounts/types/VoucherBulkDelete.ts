/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DiscountErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: VoucherBulkDelete
// ====================================================

export interface VoucherBulkDelete_voucherBulkDelete_errors {
  __typename: "DiscountError";
  code: DiscountErrorCode;
  field: string | null;
  message: string | null;
}

export interface VoucherBulkDelete_voucherBulkDelete {
  __typename: "VoucherBulkDelete";
  errors: VoucherBulkDelete_voucherBulkDelete_errors[];
}

export interface VoucherBulkDelete {
  voucherBulkDelete: VoucherBulkDelete_voucherBulkDelete | null;
}

export interface VoucherBulkDeleteVariables {
  ids: (string | null)[];
}
