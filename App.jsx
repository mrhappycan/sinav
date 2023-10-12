import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

const MMKVStorageTest = () => {
    const [inputValue, setInputValue] = useState('');
    const [storedValue, setStoredValue] = useMMKVStorage('test_key', MMKV);

    const saveValueToStorage = () => {
        try {
            MMKV.setString('test_key', inputValue);
            Alert.alert("Success!", "Value saved to MMKV storage.");
        } catch (error) {
            Alert.alert("Error", "There was an error saving the value.");
        }
    };

    const loadValueFromStorage = () => {
        try {
            const value = MMKV.getString('test_key');
            if (value) {
                setStoredValue(value);
            } else {
                Alert.alert("Info", "No value found in MMKV storage.");
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
            <Text style={styles.storedText}>Loaded from MMKV storage: {storedValue}</Text>
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

export default MMKVStorageTest;
