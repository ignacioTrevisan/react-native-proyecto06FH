import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
    nombre: string,
    photoUrl: string
}
export const Cast = ({ nombre, photoUrl }: Props) => {
    return (
        <View style={{ flex: 1, width: 100, paddingLeft: 10, marginRight: 10 }}>

            <Image
                source={{ uri: photoUrl }}
                style={{ width: 100, height: 150, borderRadius: 15 }}
            />

            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{nombre}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    }
})
