import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import RepositoryItemDetails from './RepositoryItemDetails'
import ReviewForm from './ReviewForm'
import { Route, Routes, Navigate } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/:id" element={<RepositoryItemDetails />} />
                <Route path="/create-review" element={<ReviewForm />} />
                <Route path="/" element={<RepositoryList />} exact />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </View>
    );
};

export default Main;