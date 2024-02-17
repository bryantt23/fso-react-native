import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_ME } from '../graphql/queries'; // Assuming this is your query to fetch user data

const useDeleteReview = () => {
    const [mutate, { data, loading, error }] = useMutation(DELETE_REVIEW, {
        refetchQueries: [{ query: GET_ME }],
        // Optionally, you can use awaitRefetchQueries to wait for the refetch queries to complete
        awaitRefetchQueries: true,
    });

    const deleteReview = async (id) => {
        try {
            const response = await mutate({
                variables: { id },
            });
            return response.data.deleteReview; // This should be a boolean
        } catch (e) {
            console.error(e);
        }
    };

    return [deleteReview, { data, loading, error }];
};

export default useDeleteReview;
