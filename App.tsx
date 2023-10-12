import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageTest = () => {
    const [inputValue, setInputValue] = useState('');
    const [storedValue, setStoredValue] = useState('');

    const saveValueToStorage = async () => {
        try {
            await AsyncStorage.setItem('test_key', inputValue);
            Alert.alert("Success!", "Value saved to AsyncStorage.");
        } catch (error) {
            Alert.alert("Error", "There was an error saving the value.");
        }
    };

    const loadValueFromStorage = async () => {
        try {
            const value = await AsyncStorage.getItem('test_key');
            if (value !== null) {
                setStoredValue(value);
            } else {
                Alert.alert("Info", "No value found in AsyncStorage.");
            }
        } catch (error) {
            Alert.alert("Error", "There was an error loading the value.");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Type something..."
            />
            <Button title="Save" onPress={saveValueToStorage} />
            <Button title="Load" onPress={loadValueFromStorage} />
            <Text style={styles.storedText}>Loaded from AsyncStorage: {storedValue}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
    },
    storedText: {
        marginTop: 20,
    }
});

export default AsyncStorageTest;
