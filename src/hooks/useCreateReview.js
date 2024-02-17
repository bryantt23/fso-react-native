import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const [mutate, { data, loading, error }] = useMutation(CREATE_REVIEW);

    const createReview = async (reviewInput) => {
        try {
            const { data } = await mutate({
                variables: {
                    review: reviewInput,
                },
            });
            return data;
        } catch (e) {
            // Handle errors, e.g., set an error state, show a message, etc.
            console.error(e);
        }
    };

    return [createReview, { data, loading, error }];
};

export default useCreateReview;
