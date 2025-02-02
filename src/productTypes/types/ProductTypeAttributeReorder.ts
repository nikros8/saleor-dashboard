/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReorderInput, ProductAttributeType, ProductErrorCode, ProductTypeKindEnum, AttributeTypeEnum, MeasurementUnitsEnum, AttributeInputTypeEnum, WeightUnitsEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: ProductTypeAttributeReorder
// ====================================================

export interface ProductTypeAttributeReorder_productTypeReorderAttributes_errors {
  __typename: "ProductError";
  code: ProductErrorCode;
  field: string | null;
  message: string | null;
}

export interface ProductTypeAttributeReorder_productTypeReorderAttributes_productType_taxType {
  __typename: "TaxType";
  description: string | null;
  taxCode: string | null;
}

export interface ProductTypeAttributeReorder_productTypeReorderAttributes_productType_metadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface ProductTypeAttributeReorder_productTypeReorderAttributes_productType_privateMetadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface ProductTypeAttributeReorder_productTypeReorderAttributes_productType_productAttributes {
  __typename: "Attribute";
  id: string;
  name: string | null;
  slug: string | null;
  type: AttributeTypeEnum | null;
  visibleInStorefront: boolean;
  filterableInDashboard: boolean;
  filterableInStorefront: boolean;
  unit: MeasurementUnitsEnum | null;
  inputType: AttributeInputTypeEnum | null;
}

export interface ProductTypeAttributeReorder_productTypeReorderAttributes_productType_variantAttributes {
  __typename: "Attribute";
  id: string;
  name: string | null;
  slug: string | null;
  type: AttributeTypeEnum | null;
  visibleInStorefront: boolean;
  filterableInDashboard: boolean;
  filterableInStorefront: boolean;
  unit: MeasurementUnitsEnum | null;
  inputType: AttributeInputTypeEnum | null;
}

export interface ProductTypeAttributeReorder_productTypeReorderAttributes_productType_assignedVariantAttributes_attribute {
  __typename: "Attribute";
  id: string;
  name: string | null;
  slug: string | null;
  type: AttributeTypeEnum | null;
  visibleInStorefront: boolean;
  filterableInDashboard: boolean;
  filterableInStorefront: boolean;
  unit: MeasurementUnitsEnum | null;
  inputType: AttributeInputTypeEnum | null;
}

export interface ProductTypeAttributeReorder_productTypeReorderAttributes_productType_assignedVariantAttributes {
  __typename: "AssignedVariantAttribute";
  attribute: ProductTypeAttributeReorder_productTypeReorderAttributes_productType_assignedVariantAttributes_attribute;
  variantSelection: boolean;
}

export interface ProductTypeAttributeReorder_productTypeReorderAttributes_productType_weight {
  __typename: "Weight";
  unit: WeightUnitsEnum;
  value: number;
}

export interface ProductTypeAttributeReorder_productTypeReorderAttributes_productType {
  __typename: "ProductType";
  id: string;
  name: string;
  kind: ProductTypeKindEnum;
  hasVariants: boolean;
  isShippingRequired: boolean;
  taxType: ProductTypeAttributeReorder_productTypeReorderAttributes_productType_taxType | null;
  metadata: (ProductTypeAttributeReorder_productTypeReorderAttributes_productType_metadata | null)[];
  privateMetadata: (ProductTypeAttributeReorder_productTypeReorderAttributes_productType_privateMetadata | null)[];
  productAttributes: (ProductTypeAttributeReorder_productTypeReorderAttributes_productType_productAttributes | null)[] | null;
  variantAttributes: (ProductTypeAttributeReorder_productTypeReorderAttributes_productType_variantAttributes | null)[] | null;
  assignedVariantAttributes: (ProductTypeAttributeReorder_productTypeReorderAttributes_productType_assignedVariantAttributes | null)[] | null;
  weight: ProductTypeAttributeReorder_productTypeReorderAttributes_productType_weight | null;
}

export interface ProductTypeAttributeReorder_productTypeReorderAttributes {
  __typename: "ProductTypeReorderAttributes";
  errors: ProductTypeAttributeReorder_productTypeReorderAttributes_errors[];
  productType: ProductTypeAttributeReorder_productTypeReorderAttributes_productType | null;
}

export interface ProductTypeAttributeReorder {
  productTypeReorderAttributes: ProductTypeAttributeReorder_productTypeReorderAttributes | null;
}

export interface ProductTypeAttributeReorderVariables {
  move: ReorderInput;
  productTypeId: string;
  type: ProductAttributeType;
}
