import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryList from '../components/RepositoryList'; // Updated to the correct component name
import { useQuery } from '@apollo/client';

// Mock the useQuery hook
jest.mock('@apollo/client', () => ({
    ...jest.requireActual('@apollo/client'),
    useQuery: jest.fn(),
}));

describe('RepositoryList', () => {
    it('renders repository information correctly', () => {
        // Setup the mock useQuery return value
        useQuery.mockReturnValue({
            "data": {
                "repositories": {
                    "edges": [
                        {
                            "node": {
                                "name": "formik",
                                "fullName": "jaredpalmer/formik",
                                "description": "Build forms in React, without the tears 😭 ",
                                "stargazersCount": 33345,
                                "ownerName": "jaredpalmer",
                                "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/4060187?v=4",
                                "forksCount": 2799,
                                "reviewCount": 5,
                                "ratingAverage": 90,
                                "__typename": "Repository"
                            },
                            "__typename": "RepositoryEdge"
                        },
                        {
                            "node": {
                                "name": "react-async",
                                "fullName": "async-library/react-async",
                                "description": "🍾 Flexible promise-based React data loader",
                                "stargazersCount": 2143,
                                "ownerName": "async-library",
                                "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/54310907?v=4",
                                "forksCount": 94,
                                "reviewCount": 3,
                                "ratingAverage": 72,
                                "__typename": "Repository"
                            },
                            "__typename": "RepositoryEdge"
                        },
                        {
                            "node": {
                                "name": "lombok",
                                "fullName": "rzwitserloot/lombok",
                                "description": "Very spicy additions to the Java programming language.",
                                "stargazersCount": 12482,
                                "ownerName": "rzwitserloot",
                                "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/45949248?v=4",
                                "forksCount": 2344,
                                "reviewCount": 0,
                                "ratingAverage": 0,
                                "__typename": "Repository"
                            },
                            "__typename": "RepositoryEdge"
                        },
                        {
                            "node": {
                                "name": "rails",
                                "fullName": "rails/rails",
                                "description": "Ruby on Rails",
                                "stargazersCount": 54447,
                                "ownerName": "rails",
                                "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/4223?v=4",
                                "forksCount": 21647,
                                "reviewCount": 2,
                                "ratingAverage": 100,
                                "__typename": "Repository"
                            },
                            "__typename": "RepositoryEdge"
                        },
                        {
                            "node": {
                                "name": "django",
                                "fullName": "django/django",
                                "description": "The Web framework for perfectionists with deadlines.",
                                "stargazersCount": 75608,
                                "ownerName": "django",
                                "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/27804?v=4",
                                "forksCount": 30982,
                                "reviewCount": 2,
                                "ratingAverage": 73,
                                "__typename": "Repository"
                            },
                            "__typename": "RepositoryEdge"
                        },
                        {
                            "node": {
                                "name": "apollo-client",
                                "fullName": "apollographql/apollo-client",
                                "description": ":rocket:  A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server.",
                                "stargazersCount": 19138,
                                "ownerName": "apollographql",
                                "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/17189275?v=4",
                                "forksCount": 2657,
                                "reviewCount": 0,
                                "ratingAverage": 0,
                                "__typename": "Repository"
                            },
                            "__typename": "RepositoryEdge"
                        },
                        {
                            "node": {
                                "name": "redux",
                                "fullName": "reduxjs/redux",
                                "description": "Predictable state container for JavaScript apps",
                                "stargazersCount": 60266,
                                "ownerName": "reduxjs",
                                "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/13142323?v=4",
                                "forksCount": 15490,
                                "reviewCount": 0,
                                "ratingAverage": 0,
                                "__typename": "Repository"
                            },
                            "__typename": "RepositoryEdge"
                        },
                        {
                            "node": {
                                "name": "spring-framework",
                                "fullName": "spring-projects/spring-framework",
                                "description": "Spring Framework",
                                "stargazersCount": 54447,
                                "ownerName": "spring-projects",
                                "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/317776?v=4",
                                "forksCount": 37505,
                                "reviewCount": 0,
                                "ratingAverage": 0,
                                "__typename": "Repository"
                            },
                            "__typename": "RepositoryEdge"
                        },
                        {
                            "node": {
                                "name": "next.js",
                                "fullName": "zeit/next.js",
                                "description": "The React Framework",
                                "stargazersCount": 118217,
                                "ownerName": "zeit",
                                "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/14985020?v=4",
                                "forksCount": 25783,
                                "reviewCount": 0,
                                "ratingAverage": 0,
                                "__typename": "Repository"
                            },
                            "__typename": "RepositoryEdge"
                        },
                        {
                            "node": {
                                "name": "swr",
                                "fullName": "zeit/swr",
                                "description": "React Hooks for Data Fetching",
                                "stargazersCount": 28953,
                                "ownerName": "zeit",
                                "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/14985020?v=4",
                                "forksCount": 1192,
                                "reviewCount": 0,
                                "ratingAverage": 0,
                                "__typename": "Repository"
                            },
                            "__typename": "RepositoryEdge"
                        }
                    ],
                    "__typename": "RepositoryConnection"
                }
            }
        });

        // Render the RepositoryList with mock data
        const { getAllByTestId } = render(<RepositoryList />);

        // Get all repository items rendered
        const repositoryItems = getAllByTestId('repositoryItem');

        // Assertions to check if the first repository's information is rendered correctly
        expect(repositoryItems[0]).toHaveTextContent(/jaredpalmer\/formik/i); // Checks if the text includes 'jaredpalmer/formik'
        expect(repositoryItems[0]).toHaveTextContent(/Build forms in React, without the tears/i); // Checks if the text includes this substring
        expect(repositoryItems[0]).toHaveTextContent(/33.3k/i); // Checks if the text includes '33.3k'
        expect(repositoryItems[0]).toHaveTextContent(/90/i); // Checks if the text includes '90'
        expect(repositoryItems[0]).toHaveTextContent(/5/i); // Checks if the text includes '5'

        // Add similar assertions for the second repository if needed
    });
});
