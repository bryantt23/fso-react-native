import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(AUTHENTICATE);
    const apolloClient = useApolloClient(); // Access the Apollo Client instance

    const signIn = async ({ username, password }) => {
        const res = await mutate({ variables: { username, password } })
        await authStorage.setAccessToken(res.data.authenticate.accessToken)
        apolloClient.resetStore();
        console.log('SignIn successful, store reset.');
        return res
    }

    return [signIn, result]
};

export default useSignIn;
