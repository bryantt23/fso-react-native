import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_ME } from '../graphql/queries'; // Assuming this is your query to fetch user data

const useDeleteReview = () => {
    const [mutate, { data, loading, error }] = useMutation(DELETE_REVIEW, {
        refetchQueries: [{ query: GET_ME }],
    });

    const deleteReview = async (id) => {
        try {
            await mutate({
                variables: { id },
            });
        } catch (e) {
            console.error(e);
        }
    };

    return [deleteReview, { data, loading, error }];
};

export default useDeleteReview;
