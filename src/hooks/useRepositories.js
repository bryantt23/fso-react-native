import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    // Use the useQuery hook to fetch the repositories
    const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });

    // Prepare the repositories data in the desired format
    const repositories = data?.repositories.edges.map(edge => edge.node) || [];

    return { repositories, loading, error, refetch };
};

export default useRepositories;
