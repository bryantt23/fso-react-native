import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useMe = () => {
    const me = useQuery(GET_ME)

    return me
};

export default useMe;
