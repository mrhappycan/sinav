import React, {useState, useEffect} from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Shape from './assets/shape'
import RightIcon from './assets/right'

import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage'

const MMKV = new MMKVLoader().initialize()

const HomeScreen = props => {
    const [title, setTitle] = useMMKVStorage('baslik', MMKV, '')
    const [string, setString] = useMMKVStorage('metin', MMKV, '')

    useEffect(() => {
        console.log('props.route.params: ', props.route.params);
        if (props?.route?.params?.index >= 0) {
            setTitle([...title.slice(0, props.route.params.index), props.route.params.title, ...title.slice(props.route.params.index + 1)])
        } else if (props?.route?.params?.category.length > 0) {
            setExpenses([props.route.params, ...title])
        }
    }, [props.route.params])


    useEffect(() => {
        console.log('props.route.params: ', props.route.params);
        if (props?.route?.params?.index >= 0) {
            setTitle([...string.slice(0, props.route.params.index), props.route.params.string, ...string.slice(props.route.params.index + 1)])
        } else if (props?.route?.params?.category.length > 0) {
            setExpenses([props.route.params, ...string])
        }
    }, [props.route.params])

    return (
        <SafeAreaView style={Styles.container}>
            <View>
                <View>
                    <TextInput
                        style={Styles.title}
                        placeholder='Title'
                        onChangeText={setTitle}
                        value={title}
                    />
                </View>
                <View>
                    <TextInput
                        style={Styles.txt}
                        placeholder='write something'
                        onChangeText={setString}
                        value={string}
                    />
                </View>
            </View>
            <View style={Styles.btncontainer}>
                <TouchableOpacity
                    style={Styles.btn}
                    onPress={() => {
                        props.navigation.navigate('Memory', {
                            title: title,
                            string: string,
                        })
                    }}
                >
                    <Text>
                        see my memories
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {Styles.btn}
                    onPress={() => {
                        props.navigation.navigate('Detaylar', {
                            title: title,
                            string: string,
                        })
                    }}
                >
                    <Text>
                        save
                    </Text>
                </TouchableOpacity>
            </View>
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

    title: {
        fontWeight: '600',
        fontSize: 24,
        color: 'black',
    },

    txt: {
        fontWeight: '400',
        fontSize: 14,
        color: 'black'
    },

    btncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    btn: {
        flexDirection: 'row',
        backgroundColor: '#FFD700',
        width: 150,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90
    }
})

export default HomeScreen