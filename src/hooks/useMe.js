import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useMe = () => {
    const { data, loading, error } = useQuery(GET_ME, {
        fetchPolicy: 'cache-and-network',
    });

    const me = data?.me
    const reviews = data?.me?.reviews?.edges.map(edge => edge.node) || [];

    return { me, reviews, loading, error };
};

export default useMe;
