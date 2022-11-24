import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

interface SearchBarParams {
    style?: StyleProp<ViewStyle>;
}

const SearchBar = ({ style }: SearchBarParams) => {

    const [ text, setText ] = useState('')

    return (
        <View style={[styles.container, style]}>
            <Feather name="search" size={20} color="#777" style={styles.trailingIcon} />
            <TextInput style={styles.input} placeholder="Search" value={text} onChangeText={setText} />
            <TouchableOpacity style={styles.cancel} onPress={() => setText('')}>
                <MaterialIcons name="cancel" size={20} color="#777" />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EDEEF2',
        borderRadius: 20,
        padding: 5,
    },
    trailingIcon: {
    },
    input: {
        paddingLeft: 5,
        // paddingVertical: 5,
        flex: 1,
        fontFamily: 'DMSans-Regular'
    },
    cancel: {
        marginLeft: 4
    }
})