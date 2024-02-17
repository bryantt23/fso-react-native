import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy = 'CREATED_AT', orderDirection = 'DESC') => {
    // Use the useQuery hook to fetch the repositories with variables
    const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
        variables: { orderBy, orderDirection },
        fetchPolicy: 'cache-and-network',
    });

    // Prepare the repositories data in the desired format
    const repositories = data?.repositories.edges.map(edge => edge.node) || [];

    return { repositories, loading, error, refetch };
};

export default useRepositories;
