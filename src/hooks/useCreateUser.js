import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useCreateUser = () => {
    const [createUserMutation, { data, loading, error }] = useMutation(CREATE_USER);

    const createUser = async (input) => {
        const response = await createUserMutation({
            variables: { input },
        });
        return response.data.createUser;
    };

    return [createUser, { data, loading, error }];
};

export default useCreateUser;