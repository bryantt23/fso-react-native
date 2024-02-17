// useRepository.js
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
    const { data, loading, error } = useQuery(GET_REPOSITORY, {
        variables: { id },
        fetchPolicy: 'cache-and-network',
    });

    return { data: data ? data.repository : null, loading, error };
};

export default useRepository;
