import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignOut = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient(); // Access the Apollo Client instance

    const signOut = async () => {
        const res = await authStorage.removeAccessToken()
        apolloClient.resetStore();
        console.log('Signout successful, store reset.');
        return res
    }

    return signOut
};

export default useSignOut;
