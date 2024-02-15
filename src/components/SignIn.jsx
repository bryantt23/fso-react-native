import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

// Your SignIn component
const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
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
            initialValues={{ username: '', password: '' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <FormikTextInput
                        name="username"
                        placeholder="Username"
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                    />
                    <FormikTextInput
                        name="password"
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={true}
                    />
                    {/* When this is pressed, Formik's handleSubmit will call the onSubmit function with form values */}
                    <Pressable onPress={handleSubmit}>
                        <Text>Sign In</Text>
                    </Pressable>
                </View>
            )}
        </Formik>
    );
};

export default SignIn;
