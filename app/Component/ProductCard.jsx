import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
const ProductCard = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <View style={styles.container}>
            <Image source={require('../Component/image/shirt3.png')} style={styles.coverImage} />
            <View style={styles.textContainer}>
                <Text style={styles.productName}>Shirt</Text>
                <Text style={styles.productPrice}>$29.99</Text>
            </View>
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} style={styles.heartContainer}>
                {
                    isFavorite ? (
                        <AntDesign name="heart" size={24} color="red" />
                    ) : (
                        <AntDesign name="hearto" size={24} color="#444444" />
                    )
                }
                
            </TouchableOpacity>
        </View>

    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    coverImage: {
        marginTop: 10,
        height: 250,
        width: '90%',
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10,
    },
    productName: {
        fontSize: 18,
        fontWeight: 600,
        color: '#444444',
        marginLeft: 10,
        marginTop: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 600,
        color: '#9c9c9c',
        marginLeft: 10,
        marginTop: 5,
    },
    textContainer: {
        paddingLeft: 15,
    },
    heartContainer: {
        height: 34,
        width: 34,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        position: 'absolute',
        top: '20',
        right: '20',
    },
})