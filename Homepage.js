/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
    Card,
    Button,
    Icon,
    Modal,
    Layout,
    Text,
    Input
} from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Category from './Category';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const PlusIcon = props => <Icon {...props} name="plus-outline" />;


const Homepage = () => {
    const [categories, setCategories] = useState(['Drinks', 'Appetizers', 'Entrees', 'Desserts']);
    const [visible, setVisible] = React.useState(false);
    const [categoryInput, setCategoryInput] = React.useState('');

    const handleAddCategory = () => {
        setCategories([...categories, categoryInput]);
    };

    return (
        <Layout style={styles.container}>
            {categories.map(category => (<Category title={category} />))}

            <Button style={styles.likeButton} accessoryLeft={PlusIcon} onPress={() => setVisible(true)}>
                Add Category
            </Button>

            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true}>
                    <Text>Enter a title for the category.</Text>
                    <Input
                        placeholder='A title...'
                        value={categoryInput}
                        onChangeText={nextValue => setCategoryInput(nextValue)}
                    />
                    <Button onPress={handleAddCategory}>
                        Add
                    </Button>
                    <Button onPress={() => setVisible(false)}>
                        Cancel
                    </Button>
                </Card>
            </Modal>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: "center",
    },
    likeButton: {
        marginVertical: 16,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default Homepage;
