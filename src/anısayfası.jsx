import React, {useState, useEffect, cloneElement} from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native'

import BackBtn from './assets/backbtn'
import HomeScreen from './HomeScreen'

import MMKVStorage, { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage'

const MMKV = new MMKVLoader().initialize()

const MemoryScreen = props => {
   const [memories, setMemories] = useMMKVStorage('anilar', MMKV, [props.route.params])
   const array = [
    {
        title: 'efe yazıcı',
        string: 'sporcu'
    },

    {
        title: 'emre',
        string: 'çelik'
    },

    {
        title: 'mustafa',
        string: 'mutlu'
    }
   ]
    return (
        <SafeAreaView style={Styles.container}>
            <TouchableOpacity
                style = {Styles.btn}
                onPress={() => {
                    props.navigation.navigate('Ana Sayfa')
                }}
            >
                <BackBtn />
            </TouchableOpacity>
            <FlatList
                data={array}
                renderItem={element => {
                    return(
                        <View>
                            <TouchableOpacity
                            style = {Styles.memory}
                                onPress={() => {
                                    props.navigation.navigate('Detaylar', title)
                                }}
                            >
                                <Text style = {Styles.memorytxt}>
                                    {element.item.title}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        padding: 24,
        backgroundColor: 'white'
    },

    btn: {
        height: 44,
        width: 44,
    },

    memory: {
        borderWidth: 2,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16
    },

    memorytxt: {
        fontWeight: '600',
        fontSize: 24,
        color: 'black',
    }
})

export default MemoryScreen