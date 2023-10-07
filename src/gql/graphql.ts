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

export type Collection = {
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
};

export type Color = {
  color: ColorType;
  id: Scalars['ID']['output'];
};

export type ColorConnectInput = {
  connect: ColorType;
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
  total: Scalars['Int']['output'];
};

export type CreateOrderItemInput = {
  color: ColorConnectInput;
  order: OrderConnectInput;
  product: ProductConnectInput;
  quantity: Scalars['Int']['input'];
  size: SizeConnectInput;
};

export type Direction =
  | 'ASC'
  | 'DESC';

export type Field =
  | 'price'
  | 'rating';

export type Image = {
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type Mutation = {
  addReview: Review;
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  updateOrderItem?: Maybe<OrderItem>;
};


export type MutationAddReviewArgs = {
  reviewInput: ReviewInput;
};


export type MutationCreateOrderArgs = {
  total: Scalars['Int']['input'];
};


export type MutationCreateOrderItemArgs = {
  data: CreateOrderItemInput;
};


export type MutationDeleteOrderItemArgs = {
  where: UpdateOrderItemWhereInput;
};


export type MutationUpdateOrderItemArgs = {
  data: UpdateOrderItemInput;
  where: UpdateOrderItemWhereInput;
};

export type Order = {
  id: Scalars['ID']['output'];
  orderItems: Array<OrderItem>;
  products: Array<Product>;
  quantity: Scalars['Int']['output'];
  status: OrderStatus;
  total: Scalars['Int']['output'];
};

export type OrderByInput = {
  direction: Direction;
  field: Field;
};

export type OrderConnectInput = {
  connect: ConnectIdInput;
};

export type OrderItem = {
  color: Color;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  size: Size;
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
  rating: Scalars['Float']['output'];
  ratingCount: Scalars['Int']['output'];
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
  collections: Array<Collection>;
  order?: Maybe<Order>;
  productBySlug?: Maybe<Product>;
  products: Products;
  productsByCategorySlug?: Maybe<Products>;
  reviews: Array<Review>;
};


export type QueryCategoriesArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
  status?: InputMaybe<OrderStatus>;
};


export type QueryProductBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  orderBy?: InputMaybe<OrderByInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryProductsByCategorySlugArgs = {
  skip: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
  take: Scalars['Int']['input'];
};


export type QueryReviewsArgs = {
  productId: Scalars['ID']['input'];
};

export type Rating = {
  description: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Review = {
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  productId: Scalars['ID']['output'];
  rating?: Maybe<Rating>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type ReviewInput = {
  description: Scalars['String']['input'];
  product: ConnectIdInput;
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  user: UserConnectInput;
};

export type Size = {
  id: Scalars['ID']['output'];
  size: SizeType;
};

export type SizeConnectInput = {
  connect: SizeType;
};

export type SizeType =
  | 'L'
  | 'M'
  | 'S'
  | 'XL';

export type UpdateOrderItemInput = {
  quantity: Scalars['Int']['input'];
};

export type UpdateOrderItemWhereInput = {
  id: Scalars['ID']['input'];
};

export type User = {
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserConnectInput = {
  email: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type AddOrderItemMutationVariables = Exact<{
  quantity: Scalars['Int']['input'];
  orderId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  color: ColorType;
  size: SizeType;
}>;


export type AddOrderItemMutation = { createOrderItem?: { id: string } | null };

export type CartChangeItemQuantityMutationVariables = Exact<{
  quantity: Scalars['Int']['input'];
  itemId: Scalars['ID']['input'];
}>;


export type CartChangeItemQuantityMutation = { updateOrderItem?: { quantity: number } | null };

export type CartCreateMutationVariables = Exact<{
  total: Scalars['Int']['input'];
}>;


export type CartCreateMutation = { createOrder?: { id: string } | null };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { order?: { id: string, orderItems: Array<{ quantity: number, id: string, name: string, price: number, description: string, image: string, color: { color: ColorType }, size: { size: SizeType } }> } | null };

export type CartRemoveItemMutationVariables = Exact<{
  itemId: Scalars['ID']['input'];
}>;


export type CartRemoveItemMutation = { deleteOrderItem?: { id: string } | null };

export type CollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsQuery = { collections: Array<{ id: string, name: string, description: string, products: Array<{ id: string, name: string, slug: string, description: string, price: number, rating: number, ratingCount: number, images: Array<{ url: string }>, categories: Array<{ id: string, name: CategoryName }>, colors: Array<{ id: string, color: ColorType }>, sizes: Array<{ id: string, size: SizeType }> }> }> };

export type ProductGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductGetBySlugQuery = { productBySlug?: { id: string, name: string, slug: string, description: string, price: number, rating: number, ratingCount: number, images: Array<{ url: string }>, categories: Array<{ id: string, name: CategoryName }>, colors: Array<{ id: string, color: ColorType }>, sizes: Array<{ id: string, size: SizeType }> } | null };

export type ProductListItemFragment = { id: string, name: string, slug: string, description: string, price: number, rating: number, ratingCount: number, images: Array<{ url: string }>, categories: Array<{ id: string, name: CategoryName }>, colors: Array<{ id: string, color: ColorType }>, sizes: Array<{ id: string, size: SizeType }> };

export type ProductsByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;


export type ProductsByCategorySlugQuery = { productsByCategorySlug?: { count?: number | null, data: Array<{ id: string, name: string, slug: string, description: string, price: number, rating: number, ratingCount: number, images: Array<{ url: string }>, categories: Array<{ id: string, name: CategoryName }>, colors: Array<{ id: string, color: ColorType }>, sizes: Array<{ id: string, size: SizeType }> }> } | null };

export type ProductsGetListQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<OrderByInput>;
}>;


export type ProductsGetListQuery = { products: { count?: number | null, data: Array<{ id: string, name: string, slug: string, description: string, price: number, rating: number, ratingCount: number, images: Array<{ url: string }>, categories: Array<{ id: string, name: CategoryName }>, colors: Array<{ id: string, color: ColorType }>, sizes: Array<{ id: string, size: SizeType }> }> } };

export type ReviewAddMutationVariables = Exact<{
  input: ReviewInput;
}>;


export type ReviewAddMutation = { addReview: { id: string } };

export type ReviewGetListQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ReviewGetListQuery = { reviews: Array<{ id: string, productId: string, rating?: { rating: number, title: string, description: string } | null, user?: { name: string, email: string } | null }> };

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
  rating
  ratingCount
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
export const AddOrderItemDocument = new TypedDocumentString(`
    mutation AddOrderItem($quantity: Int!, $orderId: ID!, $productId: ID!, $color: ColorType!, $size: SizeType!) {
  createOrderItem(
    data: {quantity: $quantity, order: {connect: {id: $orderId}}, product: {connect: {id: $productId}}, color: {connect: $color}, size: {connect: $size}}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<AddOrderItemMutation, AddOrderItemMutationVariables>;
export const CartChangeItemQuantityDocument = new TypedDocumentString(`
    mutation CartChangeItemQuantity($quantity: Int!, $itemId: ID!) {
  updateOrderItem(data: {quantity: $quantity}, where: {id: $itemId}) {
    quantity
  }
}
    `) as unknown as TypedDocumentString<CartChangeItemQuantityMutation, CartChangeItemQuantityMutationVariables>;
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
      id
      color {
        color
      }
      size {
        size
      }
      name
      price
      description
      image
    }
  }
}
    `) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($itemId: ID!) {
  deleteOrderItem(where: {id: $itemId}) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const CollectionsDocument = new TypedDocumentString(`
    query collections {
  collections {
    id
    name
    description
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  slug
  description
  price
  rating
  ratingCount
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
}`) as unknown as TypedDocumentString<CollectionsQuery, CollectionsQueryVariables>;
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
  rating
  ratingCount
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
  rating
  ratingCount
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
    query ProductsGetList($take: Int!, $skip: Int!, $search: String, $orderBy: OrderByInput) {
  products(take: $take, skip: $skip, search: $search, orderBy: $orderBy) {
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
  rating
  ratingCount
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
export const ReviewAddDocument = new TypedDocumentString(`
    mutation ReviewAdd($input: ReviewInput!) {
  addReview(reviewInput: $input) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewAddMutation, ReviewAddMutationVariables>;
export const ReviewGetListDocument = new TypedDocumentString(`
    query ReviewGetList($productId: ID!) {
  reviews(productId: $productId) {
    id
    productId
    rating {
      rating
      title
      description
    }
    user {
      name
      email
    }
  }
}
    `) as unknown as TypedDocumentString<ReviewGetListQuery, ReviewGetListQueryVariables>;