/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UploadErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: UploadErrorFragment
// ====================================================

export interface UploadErrorFragment {
  __typename: "UploadError";
  code: UploadErrorCode;
  field: string | null;
  message: string | null;
}
