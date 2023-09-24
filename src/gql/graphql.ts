/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Categories = {
  count: Scalars['Int']['output'];
  data: Array<Category>;
};

export type Category = {
  id: Scalars['ID']['output'];
  name: CategoryName;
  products: Array<Products>;
  slug: Scalars['String']['output'];
};


export type CategoryProductsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};

export type CategoryName =
  | 'ACCESSORIES'
  | 'HOODIES'
  | 'SHOES'
  | 'T_SHIRTS';

export type Color = {
  color: ColorType;
  id: Scalars['ID']['output'];
};

export type ColorType =
  | 'BLACK'
  | 'BLUE'
  | 'GREEN'
  | 'PINK'
  | 'RED'
  | 'WHITE';

export type ConnectIdInput = {
  id: Scalars['ID']['input'];
};

export type CreateOrderInput = {
  total: Scalars['Int']['input'];
};

export type CreateOrderItemInput = {
  order: OrderConnectInput;
  product: ProductConnectInput;
  quantity: Scalars['Int']['input'];
};

export type Image = {
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<Order>;
};


export type MutationCreateOrderArgs = {
  total: Scalars['Int']['input'];
};


export type MutationCreateOrderItemArgs = {
  data: CreateOrderItemInput;
};

export type Order = {
  id: Scalars['ID']['output'];
  orderItems: Array<OrderItem>;
  products: Array<Product>;
  quantity: Scalars['Int']['output'];
  status: OrderStatus;
  total: Scalars['Int']['output'];
};

export type OrderConnectInput = {
  connect: ConnectIdInput;
};

export type OrderItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type OrderStatus =
  | 'CANCELED'
  | 'DRAFT'
  | 'FULFILLED'
  | 'PAYED';

export type Product = {
  categories: Array<Category>;
  colors: Array<Color>;
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Image>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  sizes: Array<Size>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};


export type ProductCategoriesArgs = {
  first: Scalars['Int']['input'];
};


export type ProductImagesArgs = {
  first: Scalars['Int']['input'];
};

export type ProductConnectInput = {
  connect: ConnectIdInput;
};

export type Products = {
  count?: Maybe<Scalars['Int']['output']>;
  data: Array<Product>;
};

export type Query = {
  categories: Array<Category>;
  order?: Maybe<Order>;
  productBySlug?: Maybe<Product>;
  products: Products;
  productsByCategorySlug?: Maybe<Products>;
};


export type QueryCategoriesArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
  status: OrderStatus;
};


export type QueryProductBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryProductsByCategorySlugArgs = {
  skip: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
  take: Scalars['Int']['input'];
};

export type Size = {
  id: Scalars['ID']['output'];
  size: SizeType;
};

export type SizeType =
  | 'L'
  | 'M'
  | 'S'
  | 'XL';

export type CartAddItemMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartAddItemMutation = { createOrderItem?: { id: string } | null };

export type CartCreateMutationVariables = Exact<{
  total: Scalars['Int']['input'];
}>;


export type CartCreateMutation = { createOrder?: { id: string } | null };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { order?: { id: string, orderItems: Array<{ quantity: number, product: { id: string, name: string, slug: string, description: string, price: number, images: Array<{ url: string }>, categories: Array<{ id: string, name: CategoryName }>, colors: Array<{ id: string, color: ColorType }>, sizes: Array<{ id: string, size: SizeType }> } }> } | null };

export type ProductGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductGetBySlugQuery = { productBySlug?: { id: string, name: string, slug: string, description: string, price: number, images: Array<{ url: string }>, categories: Array<{ id: string, name: CategoryName }>, colors: Array<{ id: string, color: ColorType }>, sizes: Array<{ id: string, size: SizeType }> } | null };

export type ProductListItemFragment = { id: string, name: string, slug: string, description: string, price: number, images: Array<{ url: string }>, categories: Array<{ id: string, name: CategoryName }>, colors: Array<{ id: string, color: ColorType }>, sizes: Array<{ id: string, size: SizeType }> };

export type ProductsByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;


export type ProductsByCategorySlugQuery = { productsByCategorySlug?: { count?: number | null, data: Array<{ id: string, name: string, slug: string, description: string, price: number, images: Array<{ url: string }>, categories: Array<{ id: string, name: CategoryName }>, colors: Array<{ id: string, color: ColorType }>, sizes: Array<{ id: string, size: SizeType }> }> } | null };

export type ProductsGetListQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetListQuery = { products: { count?: number | null, data: Array<{ id: string, name: string, slug: string, description: string, price: number, images: Array<{ url: string }>, categories: Array<{ id: string, name: CategoryName }>, colors: Array<{ id: string, color: ColorType }>, sizes: Array<{ id: string, size: SizeType }> }> } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  slug
  description
  price
  images(first: 10) {
    url
  }
  categories(first: 10) {
    id
    name
  }
  colors {
    id
    color
  }
  sizes {
    id
    size
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($cartId: ID!, $productId: ID!) {
  createOrderItem(
    data: {quantity: 1, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate($total: Int!) {
  createOrder(total: $total) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  order(id: $id, status: DRAFT) {
    id
    orderItems {
      quantity
      product {
        ...ProductListItem
      }
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  slug
  description
  price
  images(first: 10) {
    url
  }
  categories(first: 10) {
    id
    name
  }
  colors {
    id
    color
  }
  sizes {
    id
    size
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const ProductGetBySlugDocument = new TypedDocumentString(`
    query ProductGetBySlug($slug: String!) {
  productBySlug(slug: $slug) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  slug
  description
  price
  images(first: 10) {
    url
  }
  categories(first: 10) {
    id
    name
  }
  colors {
    id
    color
  }
  sizes {
    id
    size
  }
}`) as unknown as TypedDocumentString<ProductGetBySlugQuery, ProductGetBySlugQueryVariables>;
export const ProductsByCategorySlugDocument = new TypedDocumentString(`
    query ProductsByCategorySlug($slug: String!, $take: Int!, $skip: Int!) {
  productsByCategorySlug(slug: $slug, take: $take, skip: $skip) {
    data {
      ...ProductListItem
    }
    count
  }
}
    fragment ProductListItem on Product {
  id
  name
  slug
  description
  price
  images(first: 10) {
    url
  }
  categories(first: 10) {
    id
    name
  }
  colors {
    id
    color
  }
  sizes {
    id
    size
  }
}`) as unknown as TypedDocumentString<ProductsByCategorySlugQuery, ProductsByCategorySlugQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int!, $skip: Int!, $search: String) {
  products(take: $take, skip: $skip, search: $search) {
    data {
      ...ProductListItem
    }
    count
  }
}
    fragment ProductListItem on Product {
  id
  name
  slug
  description
  price
  images(first: 10) {
    url
  }
  categories(first: 10) {
    id
    name
  }
  colors {
    id
    color
  }
  sizes {
    id
    size
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;