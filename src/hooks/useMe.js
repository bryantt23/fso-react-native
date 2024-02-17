// useMe.js
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useMe = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_ME, {
        variables: { first: 1 }, // Starting with 1 review
        fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
        console.log("handleFetchMore")
        if (data?.me?.reviews.pageInfo.hasNextPage) {
            fetchMore({
                variables: {
                    after: data.me.reviews.pageInfo.endCursor,
                    first: 1, // Still fetch only one more review
                },
            });
        }
    };


    return {
        me: data?.me,
        reviews: data?.me?.reviews.edges.map(edge => edge.node) || [],
        loading,
        error,
        fetchMore: handleFetchMore,
    };
};

export default useMe;
