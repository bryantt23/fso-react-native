import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    // Use the useQuery hook to fetch the repositories
    const [mutate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        const res = await mutate({ variables: { username, password } })
        return res
    }

    return [signIn, result]
};

export default useSignIn;
