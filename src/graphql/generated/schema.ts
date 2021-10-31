import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GAdditionalEntityFields = {
  readonly path?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
};

export type GManga = {
  readonly __typename?: 'Manga';
  readonly description: Scalars['String'];
  readonly title: Scalars['String'];
};

export type GQuery = {
  readonly __typename?: 'Query';
  readonly manga?: Maybe<GManga>;
  readonly mangas?: Maybe<ReadonlyArray<GManga>>;
};


export type GQueryMangaArgs = {
  title?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GResolversTypes = {
  AdditionalEntityFields: GAdditionalEntityFields;
  String: ResolverTypeWrapper<Scalars['String']>;
  Manga: ResolverTypeWrapper<GManga>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GResolversParentTypes = {
  AdditionalEntityFields: GAdditionalEntityFields;
  String: Scalars['String'];
  Manga: GManga;
  Query: {};
  Boolean: Scalars['Boolean'];
};

export type GUnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<ReadonlyArray<Maybe<GAdditionalEntityFields>>>;
};

export type GUnionDirectiveResolver<Result, Parent, ContextType = any, Args = GUnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GAbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<ReadonlyArray<Maybe<GAdditionalEntityFields>>>;
};

export type GAbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = GAbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GEntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<ReadonlyArray<Maybe<GAdditionalEntityFields>>>;
};

export type GEntityDirectiveResolver<Result, Parent, ContextType = any, Args = GEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type GColumnDirectiveResolver<Result, Parent, ContextType = any, Args = GColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GIdDirectiveArgs = { };

export type GIdDirectiveResolver<Result, Parent, ContextType = any, Args = GIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GLinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type GLinkDirectiveResolver<Result, Parent, ContextType = any, Args = GLinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GEmbeddedDirectiveArgs = { };

export type GEmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = GEmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GMapDirectiveArgs = {
  path: Scalars['String'];
};

export type GMapDirectiveResolver<Result, Parent, ContextType = any, Args = GMapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GMangaResolvers<ContextType = any, ParentType extends GResolversParentTypes['Manga'] = GResolversParentTypes['Manga']> = {
  description?: Resolver<GResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<GResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQueryResolvers<ContextType = any, ParentType extends GResolversParentTypes['Query'] = GResolversParentTypes['Query']> = {
  manga?: Resolver<Maybe<GResolversTypes['Manga']>, ParentType, ContextType, RequireFields<GQueryMangaArgs, never>>;
  mangas?: Resolver<Maybe<ReadonlyArray<GResolversTypes['Manga']>>, ParentType, ContextType>;
};

export type GResolvers<ContextType = any> = {
  Manga?: GMangaResolvers<ContextType>;
  Query?: GQueryResolvers<ContextType>;
};

export type GDirectiveResolvers<ContextType = any> = {
  union?: GUnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: GAbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: GEntityDirectiveResolver<any, any, ContextType>;
  column?: GColumnDirectiveResolver<any, any, ContextType>;
  id?: GIdDirectiveResolver<any, any, ContextType>;
  link?: GLinkDirectiveResolver<any, any, ContextType>;
  embedded?: GEmbeddedDirectiveResolver<any, any, ContextType>;
  map?: GMapDirectiveResolver<any, any, ContextType>;
};

import { ObjectID } from 'mongodb';