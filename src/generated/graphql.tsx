import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
  timestamptz: any;
  jsonb: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export interface Boolean_Comparison_Exp {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
}

/** columns and relationships of "groups" */
export interface Groups {
   __typename?: 'groups';
  /** An array relationship */
  group_users: Array<User_Group>;
  /** An aggregated array relationship */
  group_users_aggregate: User_Group_Aggregate;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregated array relationship */
  todos_aggregate: Todos_Aggregate;
}


/** columns and relationships of "groups" */
export type GroupsGroup_UsersArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsGroup_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** columns and relationships of "groups" */
export type GroupsTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** aggregated selection of "groups" */
export interface Groups_Aggregate {
   __typename?: 'groups_aggregate';
  aggregate?: Maybe<Groups_Aggregate_Fields>;
  nodes: Array<Groups>;
}

/** aggregate fields of "groups" */
export interface Groups_Aggregate_Fields {
   __typename?: 'groups_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Groups_Max_Fields>;
  min?: Maybe<Groups_Min_Fields>;
}


/** aggregate fields of "groups" */
export type Groups_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Groups_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "groups" */
export interface Groups_Aggregate_Order_By {
  count?: Maybe<Order_By>;
  max?: Maybe<Groups_Max_Order_By>;
  min?: Maybe<Groups_Min_Order_By>;
}

/** input type for inserting array relation for remote table "groups" */
export interface Groups_Arr_Rel_Insert_Input {
  data: Array<Groups_Insert_Input>;
  on_conflict?: Maybe<Groups_On_Conflict>;
}

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export interface Groups_Bool_Exp {
  _and?: Maybe<Array<Maybe<Groups_Bool_Exp>>>;
  _not?: Maybe<Groups_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Groups_Bool_Exp>>>;
  group_users?: Maybe<User_Group_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  todos?: Maybe<Todos_Bool_Exp>;
}

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint */
  GroupsPkey = 'groups_pkey'
}

/** input type for inserting data into table "groups" */
export interface Groups_Insert_Input {
  group_users?: Maybe<User_Group_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  todos?: Maybe<Todos_Arr_Rel_Insert_Input>;
}

/** aggregate max on columns */
export interface Groups_Max_Fields {
   __typename?: 'groups_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "groups" */
export interface Groups_Max_Order_By {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
}

/** aggregate min on columns */
export interface Groups_Min_Fields {
   __typename?: 'groups_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
}

/** order by min() on columns of table "groups" */
export interface Groups_Min_Order_By {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
}

/** response of any mutation on the table "groups" */
export interface Groups_Mutation_Response {
   __typename?: 'groups_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Groups>;
}

/** input type for inserting object relation for remote table "groups" */
export interface Groups_Obj_Rel_Insert_Input {
  data: Groups_Insert_Input;
  on_conflict?: Maybe<Groups_On_Conflict>;
}

/** on conflict condition type for table "groups" */
export interface Groups_On_Conflict {
  constraint: Groups_Constraint;
  update_columns: Array<Groups_Update_Column>;
  where?: Maybe<Groups_Bool_Exp>;
}

/** ordering options when selecting data from "groups" */
export interface Groups_Order_By {
  group_users_aggregate?: Maybe<User_Group_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  todos_aggregate?: Maybe<Todos_Aggregate_Order_By>;
}

/** primary key columns input for table: "groups" */
export interface Groups_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "groups" */
export enum Groups_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "groups" */
export interface Groups_Set_Input {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
}

/** update columns of table "groups" */
export enum Groups_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export interface Jsonb_Comparison_Exp {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
}

/** mutation root */
export interface Mutation_Root {
   __typename?: 'mutation_root';
  /** delete data from the table: "groups" */
  delete_groups?: Maybe<Groups_Mutation_Response>;
  /** delete single row from the table: "groups" */
  delete_groups_by_pk?: Maybe<Groups>;
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** delete data from the table: "user_group" */
  delete_user_group?: Maybe<User_Group_Mutation_Response>;
  /** delete single row from the table: "user_group" */
  delete_user_group_by_pk?: Maybe<User_Group>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "groups" */
  insert_groups?: Maybe<Groups_Mutation_Response>;
  /** insert a single row into the table: "groups" */
  insert_groups_one?: Maybe<Groups>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** insert data into the table: "user_group" */
  insert_user_group?: Maybe<User_Group_Mutation_Response>;
  /** insert a single row into the table: "user_group" */
  insert_user_group_one?: Maybe<User_Group>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "groups" */
  update_groups?: Maybe<Groups_Mutation_Response>;
  /** update single row of the table: "groups" */
  update_groups_by_pk?: Maybe<Groups>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update data of the table: "user_group" */
  update_user_group?: Maybe<User_Group_Mutation_Response>;
  /** update single row of the table: "user_group" */
  update_user_group_by_pk?: Maybe<User_Group>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
}


/** mutation root */
export type Mutation_RootDelete_GroupsArgs = {
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Groups_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_GroupArgs = {
  where: User_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Group_By_PkArgs = {
  group_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_GroupsArgs = {
  objects: Array<Groups_Insert_Input>;
  on_conflict?: Maybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Groups_OneArgs = {
  object: Groups_Insert_Input;
  on_conflict?: Maybe<Groups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_GroupArgs = {
  objects: Array<User_Group_Insert_Input>;
  on_conflict?: Maybe<User_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Group_OneArgs = {
  object: User_Group_Insert_Input;
  on_conflict?: Maybe<User_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GroupsArgs = {
  _set?: Maybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Groups_By_PkArgs = {
  _set?: Maybe<Groups_Set_Input>;
  pk_columns: Groups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _append?: Maybe<Todos_Append_Input>;
  _delete_at_path?: Maybe<Todos_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Todos_Delete_Elem_Input>;
  _delete_key?: Maybe<Todos_Delete_Key_Input>;
  _prepend?: Maybe<Todos_Prepend_Input>;
  _set?: Maybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _append?: Maybe<Todos_Append_Input>;
  _delete_at_path?: Maybe<Todos_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Todos_Delete_Elem_Input>;
  _delete_key?: Maybe<Todos_Delete_Key_Input>;
  _prepend?: Maybe<Todos_Prepend_Input>;
  _set?: Maybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_GroupArgs = {
  _set?: Maybe<User_Group_Set_Input>;
  where: User_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Group_By_PkArgs = {
  _set?: Maybe<User_Group_Set_Input>;
  pk_columns: User_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export interface Query_Root {
   __typename?: 'query_root';
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "user_group" */
  user_group: Array<User_Group>;
  /** fetch aggregated fields from the table: "user_group" */
  user_group_aggregate: User_Group_Aggregate;
  /** fetch data from the table: "user_group" using primary key columns */
  user_group_by_pk?: Maybe<User_Group>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


/** query root */
export type Query_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** query root */
export type Query_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** query root */
export type Query_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUser_GroupArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Group_By_PkArgs = {
  group_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface String_Comparison_Exp {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
}

/** subscription root */
export interface Subscription_Root {
   __typename?: 'subscription_root';
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "user_group" */
  user_group: Array<User_Group>;
  /** fetch aggregated fields from the table: "user_group" */
  user_group_aggregate: User_Group_Aggregate;
  /** fetch data from the table: "user_group" using primary key columns */
  user_group_by_pk?: Maybe<User_Group>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


/** subscription root */
export type Subscription_RootGroupsArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Groups_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Groups_Order_By>>;
  where?: Maybe<Groups_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroups_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUser_GroupArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Group_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Group_By_PkArgs = {
  group_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface Timestamptz_Comparison_Exp {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
}

/** columns and relationships of "todos" */
export interface Todos {
   __typename?: 'todos';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  done: Scalars['Boolean'];
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
  id: Scalars['uuid'];
  json?: Maybe<Scalars['jsonb']>;
  title: Scalars['String'];
}


/** columns and relationships of "todos" */
export type TodosJsonArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "todos" */
export interface Todos_Aggregate {
   __typename?: 'todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
}

/** aggregate fields of "todos" */
export interface Todos_Aggregate_Fields {
   __typename?: 'todos_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
}


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todos" */
export interface Todos_Aggregate_Order_By {
  count?: Maybe<Order_By>;
  max?: Maybe<Todos_Max_Order_By>;
  min?: Maybe<Todos_Min_Order_By>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface Todos_Append_Input {
  json?: Maybe<Scalars['jsonb']>;
}

/** input type for inserting array relation for remote table "todos" */
export interface Todos_Arr_Rel_Insert_Input {
  data: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
}

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export interface Todos_Bool_Exp {
  _and?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  _not?: Maybe<Todos_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  done?: Maybe<Boolean_Comparison_Exp>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  json?: Maybe<Jsonb_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface Todos_Delete_At_Path_Input {
  json?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/**
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export interface Todos_Delete_Elem_Input {
  json?: Maybe<Scalars['Int']>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface Todos_Delete_Key_Input {
  json?: Maybe<Scalars['String']>;
}

/** input type for inserting data into table "todos" */
export interface Todos_Insert_Input {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  json?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface Todos_Max_Fields {
   __typename?: 'todos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "todos" */
export interface Todos_Max_Order_By {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
}

/** aggregate min on columns */
export interface Todos_Min_Fields {
   __typename?: 'todos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
}

/** order by min() on columns of table "todos" */
export interface Todos_Min_Order_By {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
}

/** response of any mutation on the table "todos" */
export interface Todos_Mutation_Response {
   __typename?: 'todos_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todos>;
}

/** input type for inserting object relation for remote table "todos" */
export interface Todos_Obj_Rel_Insert_Input {
  data: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
}

/** on conflict condition type for table "todos" */
export interface Todos_On_Conflict {
  constraint: Todos_Constraint;
  update_columns: Array<Todos_Update_Column>;
  where?: Maybe<Todos_Bool_Exp>;
}

/** ordering options when selecting data from "todos" */
export interface Todos_Order_By {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  done?: Maybe<Order_By>;
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  json?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
}

/** primary key columns input for table: "todos" */
export interface Todos_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface Todos_Prepend_Input {
  json?: Maybe<Scalars['jsonb']>;
}

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Done = 'done',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "todos" */
export interface Todos_Set_Input {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
  group_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  json?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
}

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Done = 'done',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Json = 'json',
  /** column name */
  Title = 'title'
}

/** columns and relationships of "user_group" */
export interface User_Group {
   __typename?: 'user_group';
  /** An object relationship */
  group: Groups;
  group_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
}

/** aggregated selection of "user_group" */
export interface User_Group_Aggregate {
   __typename?: 'user_group_aggregate';
  aggregate?: Maybe<User_Group_Aggregate_Fields>;
  nodes: Array<User_Group>;
}

/** aggregate fields of "user_group" */
export interface User_Group_Aggregate_Fields {
   __typename?: 'user_group_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Group_Max_Fields>;
  min?: Maybe<User_Group_Min_Fields>;
}


/** aggregate fields of "user_group" */
export type User_Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_group" */
export interface User_Group_Aggregate_Order_By {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Group_Max_Order_By>;
  min?: Maybe<User_Group_Min_Order_By>;
}

/** input type for inserting array relation for remote table "user_group" */
export interface User_Group_Arr_Rel_Insert_Input {
  data: Array<User_Group_Insert_Input>;
  on_conflict?: Maybe<User_Group_On_Conflict>;
}

/** Boolean expression to filter rows from the table "user_group". All fields are combined with a logical 'AND'. */
export interface User_Group_Bool_Exp {
  _and?: Maybe<Array<Maybe<User_Group_Bool_Exp>>>;
  _not?: Maybe<User_Group_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Group_Bool_Exp>>>;
  group?: Maybe<Groups_Bool_Exp>;
  group_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
}

/** unique or primary key constraints on table "user_group" */
export enum User_Group_Constraint {
  /** unique or primary key constraint */
  UserGroupPkey = 'user_group_pkey'
}

/** input type for inserting data into table "user_group" */
export interface User_Group_Insert_Input {
  group?: Maybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
}

/** aggregate max on columns */
export interface User_Group_Max_Fields {
   __typename?: 'user_group_max_fields';
  group_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "user_group" */
export interface User_Group_Max_Order_By {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
}

/** aggregate min on columns */
export interface User_Group_Min_Fields {
   __typename?: 'user_group_min_fields';
  group_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "user_group" */
export interface User_Group_Min_Order_By {
  group_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
}

/** response of any mutation on the table "user_group" */
export interface User_Group_Mutation_Response {
   __typename?: 'user_group_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Group>;
}

/** input type for inserting object relation for remote table "user_group" */
export interface User_Group_Obj_Rel_Insert_Input {
  data: User_Group_Insert_Input;
  on_conflict?: Maybe<User_Group_On_Conflict>;
}

/** on conflict condition type for table "user_group" */
export interface User_Group_On_Conflict {
  constraint: User_Group_Constraint;
  update_columns: Array<User_Group_Update_Column>;
  where?: Maybe<User_Group_Bool_Exp>;
}

/** ordering options when selecting data from "user_group" */
export interface User_Group_Order_By {
  group?: Maybe<Groups_Order_By>;
  group_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
}

/** primary key columns input for table: "user_group" */
export interface User_Group_Pk_Columns_Input {
  group_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
}

/** select columns of table "user_group" */
export enum User_Group_Select_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_group" */
export interface User_Group_Set_Input {
  group_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
}

/** update columns of table "user_group" */
export enum User_Group_Update_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "users" */
export interface Users {
   __typename?: 'users';
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  last_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  user_groups: Array<User_Group>;
  /** An aggregated array relationship */
  user_groups_aggregate: User_Group_Aggregate;
}


/** columns and relationships of "users" */
export type UsersUser_GroupsArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Groups_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Group_Order_By>>;
  where?: Maybe<User_Group_Bool_Exp>;
};

/** aggregated selection of "users" */
export interface Users_Aggregate {
   __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
}

/** aggregate fields of "users" */
export interface Users_Aggregate_Fields {
   __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
}


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export interface Users_Aggregate_Order_By {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
}

/** input type for inserting array relation for remote table "users" */
export interface Users_Arr_Rel_Insert_Input {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface Users_Bool_Exp {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  user_groups?: Maybe<User_Group_Bool_Exp>;
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export interface Users_Insert_Input {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  user_groups?: Maybe<User_Group_Arr_Rel_Insert_Input>;
}

/** aggregate max on columns */
export interface Users_Max_Fields {
   __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
}

/** order by max() on columns of table "users" */
export interface Users_Max_Order_By {
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
}

/** aggregate min on columns */
export interface Users_Min_Fields {
   __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
}

/** order by min() on columns of table "users" */
export interface Users_Min_Order_By {
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
}

/** response of any mutation on the table "users" */
export interface Users_Mutation_Response {
   __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
}

/** input type for inserting object relation for remote table "users" */
export interface Users_Obj_Rel_Insert_Input {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
}

/** on conflict condition type for table "users" */
export interface Users_On_Conflict {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
}

/** ordering options when selecting data from "users" */
export interface Users_Order_By {
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  user_groups_aggregate?: Maybe<User_Group_Aggregate_Order_By>;
}

/** primary key columns input for table: "users" */
export interface Users_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "users" */
export interface Users_Set_Input {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface Uuid_Comparison_Exp {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
}

export type CreateTodoMutationVariables = {
  title: Scalars['String'];
  description: Scalars['String'];
  group_id: Scalars['uuid'];
};


export type CreateTodoMutation = { __typename?: 'mutation_root', insert_todos_one?: Maybe<{ __typename?: 'todos', id: any, title: string, created_at: any, done: boolean }> };

export type GetGroupsSubscriptionVariables = {};


export type GetGroupsSubscription = { __typename?: 'subscription_root', groups: Array<{ __typename: 'groups', name?: Maybe<string>, id: any, todos_aggregate: { __typename?: 'todos_aggregate', aggregate?: Maybe<{ __typename?: 'todos_aggregate_fields', count?: Maybe<number> }> } }> };

export type GetTodosSubscriptionVariables = {
  group_id: Scalars['uuid'];
};


export type GetTodosSubscription = { __typename?: 'subscription_root', todos: Array<{ __typename: 'todos', id: any, title: string, created_at: any, group: { __typename?: 'groups', group_users: Array<{ __typename?: 'user_group', user: { __typename?: 'users', email: string } }> } }> };


export const CreateTodoDocument = gql`
    mutation createTodo($title: String!, $description: String!, $group_id: uuid!) {
  insert_todos_one(object: {title: $title, description: $description, group_id: $group_id}) {
    id
    title
    created_at
    done
  }
}
    `;
export type CreateTodoMutationFn = ApolloReactCommon.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      group_id: // value for 'group_id'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = ApolloReactCommon.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const GetGroupsDocument = gql`
    subscription getGroups {
  groups {
    __typename
    name
    id
    todos_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useGetGroupsSubscription__
 *
 * To run a query within a React component, call `useGetGroupsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetGroupsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GetGroupsSubscription, GetGroupsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GetGroupsSubscription, GetGroupsSubscriptionVariables>(GetGroupsDocument, baseOptions);
      }
export type GetGroupsSubscriptionHookResult = ReturnType<typeof useGetGroupsSubscription>;
export type GetGroupsSubscriptionResult = ApolloReactCommon.SubscriptionResult<GetGroupsSubscription>;
export const GetTodosDocument = gql`
    subscription getTodos($group_id: uuid!) {
  todos(where: {created_at: {_gte: "2020-09-29T00:00:00+00:00"}, group_id: {_eq: $group_id}}, order_by: {created_at: desc}) {
    __typename
    id
    title
    created_at
    group {
      group_users {
        user {
          email
        }
      }
    }
  }
}
    `;

/**
 * __useGetTodosSubscription__
 *
 * To run a query within a React component, call `useGetTodosSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosSubscription({
 *   variables: {
 *      group_id: // value for 'group_id'
 *   },
 * });
 */
export function useGetTodosSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GetTodosSubscription, GetTodosSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GetTodosSubscription, GetTodosSubscriptionVariables>(GetTodosDocument, baseOptions);
      }
export type GetTodosSubscriptionHookResult = ReturnType<typeof useGetTodosSubscription>;
export type GetTodosSubscriptionResult = ApolloReactCommon.SubscriptionResult<GetTodosSubscription>;