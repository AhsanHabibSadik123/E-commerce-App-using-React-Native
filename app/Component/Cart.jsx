import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff3f8', // pinkish
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})