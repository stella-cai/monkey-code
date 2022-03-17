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

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text, Input } from '@ui-kitten/components';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const Category = ({title}) => {
    // const [title, setTitle] = useState('Title');
    const [items, setItems] = useState(['Mcdonalds', 'Burger King', 'Wendys']);
    const [inputValue, setInputValue] = useState('');

    const renderHeader = () => {
        return (
            <View>
                <Text category='h6'>{title}</Text>
            </View>
        );
    };

    const renderItems = () => {
        console.log('items :>> ', items);
        items.map(item => <Text>{item}</Text>
        );
    };

    const pickItem = () => {
        const index = Math.floor(Math.random() * (items.length - 1));
        console.log('index :>> ', index);
        console.log('items[index] :>> ', items[index]);
        setItems([items[index]]);
    };

return (
    <Card style={styles.card} header={renderHeader()}>
        {items.map(item => (<Text key={item}>{item}</Text>))}
        <Input
            placeholder='Add something...'
            value={inputValue}
            onChangeText={nextValue => setInputValue(nextValue)}
        />
        <Button onPress={() => setItems([...items, inputValue])}>Add</Button>
        <Button onPress={pickItem}>Pick</Button>
    </Card>
);
};


const styles = StyleSheet.create({
    itemsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // flexGrow: 1,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        // flex: 1,
        margin: 2,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
});

export default Category;
