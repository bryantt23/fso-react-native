import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import useCreateUser from '../hooks/useCreateUser'; // Assume this hook is for the createUser mutation
import useSignIn from '../hooks/useSignIn'; // Assume you already have this for signing in
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';

// Define styles
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#0366d6',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

const signUpValidationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username must be between 5 and 30 characters')
        .max(30, 'Username must be between 5 and 30 characters')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Password must be between 5 and 50 characters')
        .max(50, 'Password must be between 5 and 50 characters')
        .required('Password is required'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required'),
});


const CreateUser = () => {
    const navigate = useNavigate();
    const [createUser] = useCreateUser(); // Instantiate the useCreateUser hook
    const [signIn] = useSignIn(); // Instantiate the useSignIn hook

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            // Extract createUser function from the createUser hook and call it
            const userCreationResult = await createUser({ username, password });
            console.log("🚀 ~ onSubmit ~ userCreationResult:", userCreationResult)

            // Assuming createUser mutation returns the user or some form of success indicator
            if (userCreationResult && userCreationResult.id) {
                // Attempt to sign in the newly created user
                const signInResult = await signIn({ username, password });

                // Check if signIn was successful before navigating
                if (signInResult) {
                    // Redirect to the repositories list view upon successful sign in
                    navigate('/');
                } else {
                    // Handle unsuccessful sign in, e.g., show an error message
                }
            }
        } catch (e) {
            console.error(e);
            // Handle errors, e.g., show an error message
        }
    };

    return (
        <Formik
            initialValues={{ username: '', password: '', passwordConfirmation: '' }}
            onSubmit={onSubmit}
            validationSchema={signUpValidationSchema}
        >
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <FormikTextInput name="username" placeholder="Username" style={styles.input} />
                    <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.input} />
                    <FormikTextInput name="passwordConfirmation" placeholder="Confirm Password" secureTextEntry style={styles.input} />
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </Pressable>
                </View>
            )}
        </Formik>
    );
};

export default CreateUser;