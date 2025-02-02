/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UploadErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: FileUpload
// ====================================================

export interface FileUpload_fileUpload_uploadedFile {
  __typename: "File";
  url: string;
  contentType: string | null;
}

export interface FileUpload_fileUpload_errors {
  __typename: "UploadError";
  code: UploadErrorCode;
  field: string | null;
  message: string | null;
}

export interface FileUpload_fileUpload {
  __typename: "FileUpload";
  uploadedFile: FileUpload_fileUpload_uploadedFile | null;
  errors: FileUpload_fileUpload_errors[];
}

export interface FileUpload {
  fileUpload: FileUpload_fileUpload | null;
}

export interface FileUploadVariables {
  file: any;
}
