import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffbfc', // pinkish
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})