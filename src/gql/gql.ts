/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation AddOrderItem($quantity: Int!, $orderId: ID!, $productId: ID!, $color: ColorType!, $size: SizeType!) {\n  createOrderItem(\n    data: {quantity: $quantity, order: {connect: {id: $orderId}}, product: {connect: {id: $productId}}, color: {connect: $color}, size: {connect: $size}}\n  ) {\n    id\n  }\n}": types.AddOrderItemDocument,
    "mutation CartChangeItemQuantity($quantity: Int!, $itemId: ID!) {\n  updateOrderItem(data: {quantity: $quantity}, where: {id: $itemId}) {\n    quantity\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate($total: Int!) {\n  createOrder(total: $total) {\n    id\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(id: $id, status: DRAFT) {\n    id\n    orderItems {\n      quantity\n      id\n      color {\n        color\n      }\n      size {\n        size\n      }\n      name\n      price\n      description\n      image\n    }\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveItemDocument,
    "query ProductGetBySlug($slug: String!) {\n  productBySlug(slug: $slug) {\n    ...ProductListItem\n  }\n}": types.ProductGetBySlugDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  slug\n  description\n  price\n  images(first: 10) {\n    url\n  }\n  categories(first: 10) {\n    id\n    name\n  }\n  colors {\n    id\n    color\n  }\n  sizes {\n    id\n    size\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsByCategorySlug($slug: String!, $take: Int!, $skip: Int!) {\n  productsByCategorySlug(slug: $slug, take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    count\n  }\n}": types.ProductsByCategorySlugDocument,
    "query ProductsGetList($take: Int!, $skip: Int!, $search: String) {\n  products(take: $take, skip: $skip, search: $search) {\n    data {\n      ...ProductListItem\n    }\n    count\n  }\n}": types.ProductsGetListDocument,
    "query ReviewGetList($productId: ID!) {\n  reviews(productId: $productId) {\n    id\n    productId\n    rating {\n      rating\n      title\n      description\n    }\n    user {\n      name\n      email\n    }\n  }\n}": types.ReviewGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddOrderItem($quantity: Int!, $orderId: ID!, $productId: ID!, $color: ColorType!, $size: SizeType!) {\n  createOrderItem(\n    data: {quantity: $quantity, order: {connect: {id: $orderId}}, product: {connect: {id: $productId}}, color: {connect: $color}, size: {connect: $size}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').AddOrderItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($quantity: Int!, $itemId: ID!) {\n  updateOrderItem(data: {quantity: $quantity}, where: {id: $itemId}) {\n    quantity\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($total: Int!) {\n  createOrder(total: $total) {\n    id\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(id: $id, status: DRAFT) {\n    id\n    orderItems {\n      quantity\n      id\n      color {\n        color\n      }\n      size {\n        size\n      }\n      name\n      price\n      description\n      image\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetBySlug($slug: String!) {\n  productBySlug(slug: $slug) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  slug\n  description\n  price\n  images(first: 10) {\n    url\n  }\n  categories(first: 10) {\n    id\n    name\n  }\n  colors {\n    id\n    color\n  }\n  sizes {\n    id\n    size\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsByCategorySlug($slug: String!, $take: Int!, $skip: Int!) {\n  productsByCategorySlug(slug: $slug, take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    count\n  }\n}"): typeof import('./graphql').ProductsByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int!, $skip: Int!, $search: String) {\n  products(take: $take, skip: $skip, search: $search) {\n    data {\n      ...ProductListItem\n    }\n    count\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewGetList($productId: ID!) {\n  reviews(productId: $productId) {\n    id\n    productId\n    rating {\n      rating\n      title\n      description\n    }\n    user {\n      name\n      email\n    }\n  }\n}"): typeof import('./graphql').ReviewGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
