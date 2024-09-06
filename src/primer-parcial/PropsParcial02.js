import { Text } from '@rneui/base'
import React from 'react'
import { View, StyleSheet } from 'react-native'

function PropsParcial02({ route }) {
  const { materia, nota } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        En la materia: <Text style={styles.bold}>{materia}</Text>, recibí la
        siguiente nota: <Text style={styles.bold}>{nota}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center'
  },
  bold: {
    fontWeight: 'bold',
    color: '#007bff'
  }
})

export default PropsParcial02
