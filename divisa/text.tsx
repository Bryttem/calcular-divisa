import React from 'react'
import { Text, StyleSheet } from 'react-native'

interface Props {
    text: string;
    type: 'titulo' | 'comment' | 'normal'
}

const valores = ({ text, type }: Props) => {
    return (

        <Text
            style={[
                type === 'titulo' ? styles.titulo : null,
                type === 'comment' ? styles.comment : null,
                type === 'normal' ? styles.normal : null
            ]}
>
            {text}
        </Text>

    )
}

export default valores

const styles = StyleSheet.create({
    titulo: {
        fontSize: 50,
        position: 'absolute',
        top: 30,
        left: 20,
        color: 'blue'
    },
    comment: {
        fontSize: 12,
        textAlign: 'center',
        color: 'blue'
    },
    normal: {
        color: 'black',
        padding: 5
    }
})
