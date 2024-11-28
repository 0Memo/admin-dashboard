import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;

export const UpdateUserDocument = gql`
  mutation UpdateUser($input: UpdateOneUserInput!) {
    updateOneUser(input: $input) {
      id
      name
      avatarUrl
      email
      phone
      jobTitle
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const CreateCompanyDocument = gql`
  mutation CreateCompany($input: CreateOneCompanyInput!) {
    createOneCompany(input: $input) {
      id
      salesOwner {
        id
      }
    }
  }
`;
export type CreateCompanyMutationFn = Apollo.MutationFunction<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>;

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCompanyMutation,
    CreateCompanyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCompanyMutation,
    CreateCompanyMutationVariables
  >(CreateCompanyDocument, options);
}
export type CreateCompanyMutationHookResult = ReturnType<
  typeof useCreateCompanyMutation
>;
export type CreateCompanyMutationResult =
  Apollo.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>;
export const UpdateCompanyDocument = gql`
  mutation UpdateCompany($input: UpdateOneCompanyInput!) {
    updateOneCompany(input: $input) {
      id
      name
      totalRevenue
      industry
      companySize
      businessType
      country
      website
      avatarUrl
      salesOwner {
        id
        name
        avatarUrl
      }
    }
  }
`;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
>;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCompanyMutation,
    UpdateCompanyMutationVariables
  >(UpdateCompanyDocument, options);
}
export type UpdateCompanyMutationHookResult = ReturnType<
  typeof useUpdateCompanyMutation
>;
export type UpdateCompanyMutationResult =
  Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<
  UpdateCompanyMutation,
  UpdateCompanyMutationVariables
>;
export const UpdateTaskStageDocument = gql`
  mutation UpdateTaskStage($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
    }
  }
`;
export type UpdateTaskStageMutationFn = Apollo.MutationFunction<
  UpdateTaskStageMutation,
  UpdateTaskStageMutationVariables
>;

/**
 * __useUpdateTaskStageMutation__
 *
 * To run a mutation, you first call `useUpdateTaskStageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskStageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskStageMutation, { data, loading, error }] = useUpdateTaskStageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaskStageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTaskStageMutation,
    UpdateTaskStageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateTaskStageMutation,
    UpdateTaskStageMutationVariables
  >(UpdateTaskStageDocument, options);
}
export type UpdateTaskStageMutationHookResult = ReturnType<
  typeof useUpdateTaskStageMutation
>;
export type UpdateTaskStageMutationResult =
  Apollo.MutationResult<UpdateTaskStageMutation>;
export type UpdateTaskStageMutationOptions = Apollo.BaseMutationOptions<
  UpdateTaskStageMutation,
  UpdateTaskStageMutationVariables
>;
export const CreateTaskDocument = gql`
  mutation CreateTask($input: CreateOneTaskInput!) {
    createOneTask(input: $input) {
      id
      title
      stage {
        id
        title
      }
    }
  }
`;
export type CreateTaskMutationFn = Apollo.MutationFunction<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTaskMutation,
    CreateTaskMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
    CreateTaskDocument,
    options,
  );
}
export type CreateTaskMutationHookResult = ReturnType<
  typeof useCreateTaskMutation
>;
export type CreateTaskMutationResult =
  Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;
export const UpdateTaskDocument = gql`
  mutation UpdateTask($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
      title
      completed
      description
      dueDate
      stage {
        id
        title
      }
      users {
        id
        name
        avatarUrl
      }
      checklist {
        title
        checked
      }
    }
  }
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTaskMutation,
    UpdateTaskMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(
    UpdateTaskDocument,
    options,
  );
}
export type UpdateTaskMutationHookResult = ReturnType<
  typeof useUpdateTaskMutation
>;
export type UpdateTaskMutationResult =
  Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;
export const DashboardTotalCountsDocument = gql`
  query DashboardTotalCounts {
    companies {
      totalCount
    }
    contacts {
      totalCount
    }
    deals {
      totalCount
    }
  }
`;

/**
 * __useDashboardTotalCountsQuery__
 *
 * To run a query within a React component, call `useDashboardTotalCountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardTotalCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardTotalCountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDashboardTotalCountsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DashboardTotalCountsQuery,
    DashboardTotalCountsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DashboardTotalCountsQuery,
    DashboardTotalCountsQueryVariables
  >(DashboardTotalCountsDocument, options);
}
export function useDashboardTotalCountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardTotalCountsQuery,
    DashboardTotalCountsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardTotalCountsQuery,
    DashboardTotalCountsQueryVariables
  >(DashboardTotalCountsDocument, options);
}
export function useDashboardTotalCountsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardTotalCountsQuery,
        DashboardTotalCountsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DashboardTotalCountsQuery,
    DashboardTotalCountsQueryVariables
  >(DashboardTotalCountsDocument, options);
}
export type DashboardTotalCountsQueryHookResult = ReturnType<
  typeof useDashboardTotalCountsQuery
>;
export type DashboardTotalCountsLazyQueryHookResult = ReturnType<
  typeof useDashboardTotalCountsLazyQuery
>;
export type DashboardTotalCountsSuspenseQueryHookResult = ReturnType<
  typeof useDashboardTotalCountsSuspenseQuery
>;
export type DashboardTotalCountsQueryResult = Apollo.QueryResult<
  DashboardTotalCountsQuery,
  DashboardTotalCountsQueryVariables
>;
export const DashboardCalendarUpcomingEventsDocument = gql`
  query DashboardCalendarUpcomingEvents(
    $filter: EventFilter!
    $sorting: [EventSort!]
    $paging: OffsetPaging!
  ) {
    events(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        color
        startDate
        endDate
      }
    }
  }
`;

/**
 * __useDashboardCalendarUpcomingEventsQuery__
 *
 * To run a query within a React component, call `useDashboardCalendarUpcomingEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardCalendarUpcomingEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardCalendarUpcomingEventsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useDashboardCalendarUpcomingEventsQuery(
  baseOptions: Apollo.QueryHookOptions<
    DashboardCalendarUpcomingEventsQuery,
    DashboardCalendarUpcomingEventsQueryVariables
  > &
    (
      | {
          variables: DashboardCalendarUpcomingEventsQueryVariables;
          skip?: boolean;
        }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DashboardCalendarUpcomingEventsQuery,
    DashboardCalendarUpcomingEventsQueryVariables
  >(DashboardCalendarUpcomingEventsDocument, options);
}
export function useDashboardCalendarUpcomingEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardCalendarUpcomingEventsQuery,
    DashboardCalendarUpcomingEventsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardCalendarUpcomingEventsQuery,
    DashboardCalendarUpcomingEventsQueryVariables
  >(DashboardCalendarUpcomingEventsDocument, options);
}
export function useDashboardCalendarUpcomingEventsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardCalendarUpcomingEventsQuery,
        DashboardCalendarUpcomingEventsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DashboardCalendarUpcomingEventsQuery,
    DashboardCalendarUpcomingEventsQueryVariables
  >(DashboardCalendarUpcomingEventsDocument, options);
}
export type DashboardCalendarUpcomingEventsQueryHookResult = ReturnType<
  typeof useDashboardCalendarUpcomingEventsQuery
>;
export type DashboardCalendarUpcomingEventsLazyQueryHookResult = ReturnType<
  typeof useDashboardCalendarUpcomingEventsLazyQuery
>;
export type DashboardCalendarUpcomingEventsSuspenseQueryHookResult = ReturnType<
  typeof useDashboardCalendarUpcomingEventsSuspenseQuery
>;
export type DashboardCalendarUpcomingEventsQueryResult = Apollo.QueryResult<
  DashboardCalendarUpcomingEventsQuery,
  DashboardCalendarUpcomingEventsQueryVariables
>;
export const DashboardDealsChartDocument = gql`
  query DashboardDealsChart(
    $filter: DealStageFilter!
    $sorting: [DealStageSort!]
    $paging: OffsetPaging
  ) {
    dealStages(filter: $filter, sorting: $sorting, paging: $paging) {
      nodes {
        id
        title
        dealsAggregate {
          groupBy {
            closeDateMonth
            closeDateYear
          }
          sum {
            value
          }
        }
      }
      totalCount
    }
  }
`;

/**
 * __useDashboardDealsChartQuery__
 *
 * To run a query within a React component, call `useDashboardDealsChartQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardDealsChartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardDealsChartQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useDashboardDealsChartQuery(
  baseOptions: Apollo.QueryHookOptions<
    DashboardDealsChartQuery,
    DashboardDealsChartQueryVariables
  > &
    (
      | { variables: DashboardDealsChartQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DashboardDealsChartQuery,
    DashboardDealsChartQueryVariables
  >(DashboardDealsChartDocument, options);
}
export function useDashboardDealsChartLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardDealsChartQuery,
    DashboardDealsChartQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardDealsChartQuery,
    DashboardDealsChartQueryVariables
  >(DashboardDealsChartDocument, options);
}
export function useDashboardDealsChartSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardDealsChartQuery,
        DashboardDealsChartQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DashboardDealsChartQuery,
    DashboardDealsChartQueryVariables
  >(DashboardDealsChartDocument, options);
}
export type DashboardDealsChartQueryHookResult = ReturnType<
  typeof useDashboardDealsChartQuery
>;
export type DashboardDealsChartLazyQueryHookResult = ReturnType<
  typeof useDashboardDealsChartLazyQuery
>;
export type DashboardDealsChartSuspenseQueryHookResult = ReturnType<
  typeof useDashboardDealsChartSuspenseQuery
>;
export type DashboardDealsChartQueryResult = Apollo.QueryResult<
  DashboardDealsChartQuery,
  DashboardDealsChartQueryVariables
>;
export const DashboardLatestActivitiesDealsDocument = gql`
  query DashboardLatestActivitiesDeals(
    $filter: DealFilter!
    $sorting: [DealSort!]
    $paging: OffsetPaging
  ) {
    deals(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        stage {
          id
          title
        }
        company {
          id
          name
          avatarUrl
        }
        createdAt
      }
    }
  }
`;

/**
 * __useDashboardLatestActivitiesDealsQuery__
 *
 * To run a query within a React component, call `useDashboardLatestActivitiesDealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardLatestActivitiesDealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardLatestActivitiesDealsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useDashboardLatestActivitiesDealsQuery(
  baseOptions: Apollo.QueryHookOptions<
    DashboardLatestActivitiesDealsQuery,
    DashboardLatestActivitiesDealsQueryVariables
  > &
    (
      | {
          variables: DashboardLatestActivitiesDealsQueryVariables;
          skip?: boolean;
        }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DashboardLatestActivitiesDealsQuery,
    DashboardLatestActivitiesDealsQueryVariables
  >(DashboardLatestActivitiesDealsDocument, options);
}
export function useDashboardLatestActivitiesDealsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardLatestActivitiesDealsQuery,
    DashboardLatestActivitiesDealsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardLatestActivitiesDealsQuery,
    DashboardLatestActivitiesDealsQueryVariables
  >(DashboardLatestActivitiesDealsDocument, options);
}
export function useDashboardLatestActivitiesDealsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardLatestActivitiesDealsQuery,
        DashboardLatestActivitiesDealsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DashboardLatestActivitiesDealsQuery,
    DashboardLatestActivitiesDealsQueryVariables
  >(DashboardLatestActivitiesDealsDocument, options);
}
export type DashboardLatestActivitiesDealsQueryHookResult = ReturnType<
  typeof useDashboardLatestActivitiesDealsQuery
>;
export type DashboardLatestActivitiesDealsLazyQueryHookResult = ReturnType<
  typeof useDashboardLatestActivitiesDealsLazyQuery
>;
export type DashboardLatestActivitiesDealsSuspenseQueryHookResult = ReturnType<
  typeof useDashboardLatestActivitiesDealsSuspenseQuery
>;
export type DashboardLatestActivitiesDealsQueryResult = Apollo.QueryResult<
  DashboardLatestActivitiesDealsQuery,
  DashboardLatestActivitiesDealsQueryVariables
>;
export const DashboardLatestActivitiesAuditsDocument = gql`
  query DashboardLatestActivitiesAudits(
    $filter: AuditFilter!
    $sorting: [AuditSort!]
    $paging: OffsetPaging
  ) {
    audits(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        action
        targetEntity
        targetId
        changes {
          field
          from
          to
        }
        createdAt
        user {
          id
          name
          avatarUrl
        }
      }
    }
  }
`;

/**
 * __useDashboardLatestActivitiesAuditsQuery__
 *
 * To run a query within a React component, call `useDashboardLatestActivitiesAuditsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardLatestActivitiesAuditsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardLatestActivitiesAuditsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useDashboardLatestActivitiesAuditsQuery(
  baseOptions: Apollo.QueryHookOptions<
    DashboardLatestActivitiesAuditsQuery,
    DashboardLatestActivitiesAuditsQueryVariables
  > &
    (
      | {
          variables: DashboardLatestActivitiesAuditsQueryVariables;
          skip?: boolean;
        }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DashboardLatestActivitiesAuditsQuery,
    DashboardLatestActivitiesAuditsQueryVariables
  >(DashboardLatestActivitiesAuditsDocument, options);
}
export function useDashboardLatestActivitiesAuditsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardLatestActivitiesAuditsQuery,
    DashboardLatestActivitiesAuditsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardLatestActivitiesAuditsQuery,
    DashboardLatestActivitiesAuditsQueryVariables
  >(DashboardLatestActivitiesAuditsDocument, options);
}
export function useDashboardLatestActivitiesAuditsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardLatestActivitiesAuditsQuery,
        DashboardLatestActivitiesAuditsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DashboardLatestActivitiesAuditsQuery,
    DashboardLatestActivitiesAuditsQueryVariables
  >(DashboardLatestActivitiesAuditsDocument, options);
}
export type DashboardLatestActivitiesAuditsQueryHookResult = ReturnType<
  typeof useDashboardLatestActivitiesAuditsQuery
>;
export type DashboardLatestActivitiesAuditsLazyQueryHookResult = ReturnType<
  typeof useDashboardLatestActivitiesAuditsLazyQuery
>;
export type DashboardLatestActivitiesAuditsSuspenseQueryHookResult = ReturnType<
  typeof useDashboardLatestActivitiesAuditsSuspenseQuery
>;
export type DashboardLatestActivitiesAuditsQueryResult = Apollo.QueryResult<
  DashboardLatestActivitiesAuditsQuery,
  DashboardLatestActivitiesAuditsQueryVariables
>;
export const CompaniesListDocument = gql`
  query CompaniesList(
    $filter: CompanyFilter!
    $sorting: [CompanySort!]
    $paging: OffsetPaging!
  ) {
    companies(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
        dealsAggregate {
          sum {
            value
          }
        }
      }
    }
  }
`;

/**
 * __useCompaniesListQuery__
 *
 * To run a query within a React component, call `useCompaniesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useCompaniesListQuery(
  baseOptions: Apollo.QueryHookOptions<
    CompaniesListQuery,
    CompaniesListQueryVariables
  > &
    (
      | { variables: CompaniesListQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CompaniesListQuery, CompaniesListQueryVariables>(
    CompaniesListDocument,
    options,
  );
}
export function useCompaniesListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompaniesListQuery,
    CompaniesListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CompaniesListQuery, CompaniesListQueryVariables>(
    CompaniesListDocument,
    options,
  );
}
export function useCompaniesListSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        CompaniesListQuery,
        CompaniesListQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    CompaniesListQuery,
    CompaniesListQueryVariables
  >(CompaniesListDocument, options);
}
export type CompaniesListQueryHookResult = ReturnType<
  typeof useCompaniesListQuery
>;
export type CompaniesListLazyQueryHookResult = ReturnType<
  typeof useCompaniesListLazyQuery
>;
export type CompaniesListSuspenseQueryHookResult = ReturnType<
  typeof useCompaniesListSuspenseQuery
>;
export type CompaniesListQueryResult = Apollo.QueryResult<
  CompaniesListQuery,
  CompaniesListQueryVariables
>;
export const UsersSelectDocument = gql`
  query UsersSelect(
    $filter: UserFilter!
    $sorting: [UserSort!]
    $paging: OffsetPaging!
  ) {
    users(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
      }
    }
  }
`;

/**
 * __useUsersSelectQuery__
 *
 * To run a query within a React component, call `useUsersSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useUsersSelectQuery(
  baseOptions: Apollo.QueryHookOptions<
    UsersSelectQuery,
    UsersSelectQueryVariables
  > &
    (
      | { variables: UsersSelectQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersSelectQuery, UsersSelectQueryVariables>(
    UsersSelectDocument,
    options,
  );
}
export function useUsersSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersSelectQuery,
    UsersSelectQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersSelectQuery, UsersSelectQueryVariables>(
    UsersSelectDocument,
    options,
  );
}
export function useUsersSelectSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        UsersSelectQuery,
        UsersSelectQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UsersSelectQuery, UsersSelectQueryVariables>(
    UsersSelectDocument,
    options,
  );
}
export type UsersSelectQueryHookResult = ReturnType<typeof useUsersSelectQuery>;
export type UsersSelectLazyQueryHookResult = ReturnType<
  typeof useUsersSelectLazyQuery
>;
export type UsersSelectSuspenseQueryHookResult = ReturnType<
  typeof useUsersSelectSuspenseQuery
>;
export type UsersSelectQueryResult = Apollo.QueryResult<
  UsersSelectQuery,
  UsersSelectQueryVariables
>;
export const CompanyContactsTableDocument = gql`
  query CompanyContactsTable(
    $filter: ContactFilter!
    $sorting: [ContactSort!]
    $paging: OffsetPaging!
  ) {
    contacts(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
        jobTitle
        email
        phone
        status
      }
    }
  }
`;

/**
 * __useCompanyContactsTableQuery__
 *
 * To run a query within a React component, call `useCompanyContactsTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyContactsTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyContactsTableQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useCompanyContactsTableQuery(
  baseOptions: Apollo.QueryHookOptions<
    CompanyContactsTableQuery,
    CompanyContactsTableQueryVariables
  > &
    (
      | { variables: CompanyContactsTableQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CompanyContactsTableQuery,
    CompanyContactsTableQueryVariables
  >(CompanyContactsTableDocument, options);
}
export function useCompanyContactsTableLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompanyContactsTableQuery,
    CompanyContactsTableQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CompanyContactsTableQuery,
    CompanyContactsTableQueryVariables
  >(CompanyContactsTableDocument, options);
}
export function useCompanyContactsTableSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        CompanyContactsTableQuery,
        CompanyContactsTableQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    CompanyContactsTableQuery,
    CompanyContactsTableQueryVariables
  >(CompanyContactsTableDocument, options);
}
export type CompanyContactsTableQueryHookResult = ReturnType<
  typeof useCompanyContactsTableQuery
>;
export type CompanyContactsTableLazyQueryHookResult = ReturnType<
  typeof useCompanyContactsTableLazyQuery
>;
export type CompanyContactsTableSuspenseQueryHookResult = ReturnType<
  typeof useCompanyContactsTableSuspenseQuery
>;
export type CompanyContactsTableQueryResult = Apollo.QueryResult<
  CompanyContactsTableQuery,
  CompanyContactsTableQueryVariables
>;
export const TaskStagesDocument = gql`
  query TaskStages(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
`;

/**
 * __useTaskStagesQuery__
 *
 * To run a query within a React component, call `useTaskStagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskStagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskStagesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useTaskStagesQuery(
  baseOptions: Apollo.QueryHookOptions<
    TaskStagesQuery,
    TaskStagesQueryVariables
  > &
    (
      | { variables: TaskStagesQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TaskStagesQuery, TaskStagesQueryVariables>(
    TaskStagesDocument,
    options,
  );
}
export function useTaskStagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TaskStagesQuery,
    TaskStagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TaskStagesQuery, TaskStagesQueryVariables>(
    TaskStagesDocument,
    options,
  );
}
export function useTaskStagesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        TaskStagesQuery,
        TaskStagesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<TaskStagesQuery, TaskStagesQueryVariables>(
    TaskStagesDocument,
    options,
  );
}
export type TaskStagesQueryHookResult = ReturnType<typeof useTaskStagesQuery>;
export type TaskStagesLazyQueryHookResult = ReturnType<
  typeof useTaskStagesLazyQuery
>;
export type TaskStagesSuspenseQueryHookResult = ReturnType<
  typeof useTaskStagesSuspenseQuery
>;
export type TaskStagesQueryResult = Apollo.QueryResult<
  TaskStagesQuery,
  TaskStagesQueryVariables
>;
export const TasksDocument = gql`
  query Tasks(
    $filter: TaskFilter!
    $sorting: [TaskSort!]
    $paging: OffsetPaging!
  ) {
    tasks(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        description
        dueDate
        completed
        stageId
        users {
          id
          name
          avatarUrl
        }
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useTasksQuery(
  baseOptions: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables> &
    ({ variables: TasksQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TasksQuery, TasksQueryVariables>(
    TasksDocument,
    options,
  );
}
export function useTasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(
    TasksDocument,
    options,
  );
}
export function useTasksSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<TasksQuery, TasksQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<TasksQuery, TasksQueryVariables>(
    TasksDocument,
    options,
  );
}
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksSuspenseQueryHookResult = ReturnType<
  typeof useTasksSuspenseQuery
>;
export type TasksQueryResult = Apollo.QueryResult<
  TasksQuery,
  TasksQueryVariables
>;
export const TaskStagesSelectDocument = gql`
  query TaskStagesSelect(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
`;

/**
 * __useTaskStagesSelectQuery__
 *
 * To run a query within a React component, call `useTaskStagesSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskStagesSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskStagesSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useTaskStagesSelectQuery(
  baseOptions: Apollo.QueryHookOptions<
    TaskStagesSelectQuery,
    TaskStagesSelectQueryVariables
  > &
    (
      | { variables: TaskStagesSelectQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TaskStagesSelectQuery, TaskStagesSelectQueryVariables>(
    TaskStagesSelectDocument,
    options,
  );
}
export function useTaskStagesSelectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TaskStagesSelectQuery,
    TaskStagesSelectQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    TaskStagesSelectQuery,
    TaskStagesSelectQueryVariables
  >(TaskStagesSelectDocument, options);
}
export function useTaskStagesSelectSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        TaskStagesSelectQuery,
        TaskStagesSelectQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    TaskStagesSelectQuery,
    TaskStagesSelectQueryVariables
  >(TaskStagesSelectDocument, options);
}
export type TaskStagesSelectQueryHookResult = ReturnType<
  typeof useTaskStagesSelectQuery
>;
export type TaskStagesSelectLazyQueryHookResult = ReturnType<
  typeof useTaskStagesSelectLazyQuery
>;
export type TaskStagesSelectSuspenseQueryHookResult = ReturnType<
  typeof useTaskStagesSelectSuspenseQuery
>;
export type TaskStagesSelectQueryResult = Apollo.QueryResult<
  TaskStagesSelectQuery,
  TaskStagesSelectQueryVariables
>;
