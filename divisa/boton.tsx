import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Textos from './text'

interface props {
    color?: '#00FBFF' | 'white';
    text: string;
    onPress: () => void
}

const button = ({ color, text, onPress }: props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                color === '#00FBFF' ? styles.colorCyan : null,
            ]}
        >
            <Textos text={text} type='normal' />
        </TouchableOpacity>
    )
}

export default button

const styles = StyleSheet.create({
    button: {
        position: 'relative',
        top: 140,
        right: 0,
        borderRadius: 10,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    colorCyan: {
        backgroundColor: '#00FBFF'
    },


})