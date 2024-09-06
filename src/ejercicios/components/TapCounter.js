import { Button, Text } from '@rneui/base'
import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

function TapCounter() {
  const [contador, setContador] = useState(0)

  const addContador = () => {
    setContador(contador + 1)
  }
  return (
    <View style={[styles.centrar, styles.container]}>
      <View style={styles.centrar}>
        <Text style={styles.titulo}>Has presionado el botón</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.texto, styles.red]}>{contador}</Text>
          <Text style={styles.texto}> veces</Text>
        </View>
      </View>

      <Pressable style={[styles.button, styles.centrar]} onPress={addContador}>
        <Text>Touchme!</Text>
      </Pressable>
    </View>
  )
}

export default TapCounter

const styles = StyleSheet.create({
  centrar: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: { flex: 1, gap: 50 },

  titulo: {
    fontWeight: 900,
    fontSize: 30
  },

  texto: {
    fontWeight: 700,
    fontSize: 25
  },

  red: {
    color: 'red'
  },

  button: {
    backgroundColor: 'green',
    borderRadius: 100,
    padding: 50,
    width: 200,
    height: 200
  }
})
