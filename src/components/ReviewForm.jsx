import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';
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

const reviewValidationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository owner\'s username is required'),
    repositoryName: yup.string().required('Repository\'s name is required'),
    rating: yup.number().required('Rating is required').min(0).max(100),
    text: yup.string(),
});

const ReviewForm = () => {
    const [createReview] = useCreateReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { ownerName, repositoryName, text } = values;
        // Convert rating to a number
        const rating = parseInt(values.rating, 10);

        if (isNaN(rating)) {
            console.log('Rating must be a number');
            return;
        }

        try {
            const result = await createReview({ ownerName, repositoryName, rating, text });
            if (result.createReview.id && result.createReview.repository.id) {
                navigate(`/${result.createReview.repository.id}`);
            }
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <Formik
            initialValues={{
                ownerName: '',
                repositoryName: '',
                rating: '',
                text: '',
            }}
            onSubmit={onSubmit}
            validationSchema={reviewValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <FormikTextInput
                        style={styles.input}
                        name="ownerName"
                        placeholder="Repository owner's username"
                        onChangeText={handleChange('ownerName')}
                        onBlur={handleBlur('ownerName')}
                        value={values.ownerName}
                    />
                    <FormikTextInput
                        style={styles.input}
                        name="repositoryName"
                        placeholder="Repository's name"
                        onChangeText={handleChange('repositoryName')}
                        onBlur={handleBlur('repositoryName')}
                        value={values.repositoryName}
                    />
                    <FormikTextInput
                        style={styles.input}
                        name="rating"
                        placeholder="Rating between 0 and 100"
                        onChangeText={handleChange('rating')}
                        onBlur={handleBlur('rating')}
                        value={values.rating}
                        keyboardType="numeric"
                    />
                    <FormikTextInput
                        style={styles.input}
                        name="text"
                        placeholder="Review"
                        onChangeText={handleChange('text')}
                        onBlur={handleBlur('text')}
                        value={values.text}
                        multiline
                    />
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Create Review</Text>
                    </Pressable>
                </View>
            )}
        </Formik>
    );
};

export default ReviewForm;