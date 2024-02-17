import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

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

const SignIn = () => {
    const [signIn] = useSignIn();
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        console.log("🚀 ~ onSubmit ~ values:", values)
        const { username, password } = values;

        try {
            const { data } = await signIn({ username, password });
            console.log(data);
            navigate("/")
        } catch (e) {
            console.log(e);
        }
    };

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .required('Username is required'),
        password: yup
            .string()
            .required('Password is required'),
    });

    return (
        <Formik
            initialValues={{ username: 'kalle', password: 'password' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <FormikTextInput
                        style={styles.input}
                        name="username"
                        placeholder="Username"
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                    />
                    <FormikTextInput
                        style={styles.input}
                        name="password"
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={true}
                    />
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </Pressable>
                </View>
            )}
        </Formik>
    );
};

export default SignIn;
