import React, {useState} from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import BackBtn from './assets/backbtn'

const DetailScreen = props => {

    return (
        <SafeAreaView style={Styles.container}>
            <TouchableOpacity
                style = {Styles.btn}
                onPress={() => {
                    props.navigation.navigate('Ana Sayfa')
                }}
            >
                <BackBtn/>
            </TouchableOpacity>
            <View style = {Styles.stringcontainer}>
            <Text style = {Styles.title}>
                    {}
                </Text>
                <Text style = {Styles.date}>
                    {props.route.params.title}
                </Text>
                <Text style = {Styles.metin}>
                    {props.route.params.title}
                </Text>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        padding: 24,
        backgroundColor: 'white',
        
    },

    btn: {
        height: 44,
        width: 44,
    },

    stringcontainer: {
        flex: 1,
    },

    title: {
        fontWeight: '600',
        fontSize: 24,
        color: 'black'
    },

    date: {
        fontWeight: '400',
        fontSize: 16
    },

    metin: {
        fontWeight: '500',
        fontSize: 16
    }
})

export default DetailScreen