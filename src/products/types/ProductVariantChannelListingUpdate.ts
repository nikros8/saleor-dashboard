/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductVariantChannelListingAddInput, ProductErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: ProductVariantChannelListingUpdate
// ====================================================

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_channelListings_channel {
  __typename: "Channel";
  id: string;
  name: string;
  currencyCode: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_channelListings_price {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_channelListings_costPrice {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_channelListings_preorderThreshold {
  __typename: "PreorderThreshold";
  quantity: number | null;
  soldUnits: number;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_channelListings {
  __typename: "ProductVariantChannelListing";
  channel: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_channelListings_channel;
  price: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_channelListings_price | null;
  costPrice: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_channelListings_costPrice | null;
  preorderThreshold: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_channelListings_preorderThreshold | null;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_product_channelListings_channel {
  __typename: "Channel";
  id: string;
  name: string;
  currencyCode: string;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_product_channelListings {
  __typename: "ProductChannelListing";
  isPublished: boolean;
  publicationDate: any | null;
  isAvailableForPurchase: boolean | null;
  availableForPurchase: any | null;
  visibleInListings: boolean;
  channel: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_product_channelListings_channel;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_product {
  __typename: "Product";
  id: string;
  channelListings: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_product_channelListings[] | null;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant {
  __typename: "ProductVariant";
  id: string;
  channelListings: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_channelListings[] | null;
  product: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant_product;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_errors {
  __typename: "ProductChannelListingError";
  code: ProductErrorCode;
  field: string | null;
  message: string | null;
  channels: string[] | null;
}

export interface ProductVariantChannelListingUpdate_productVariantChannelListingUpdate {
  __typename: "ProductVariantChannelListingUpdate";
  variant: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_variant | null;
  errors: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate_errors[];
}

export interface ProductVariantChannelListingUpdate {
  productVariantChannelListingUpdate: ProductVariantChannelListingUpdate_productVariantChannelListingUpdate | null;
}

export interface ProductVariantChannelListingUpdateVariables {
  id: string;
  input: ProductVariantChannelListingAddInput[];
}
