/*
Creación de una aplicación de lista de calificaciones con Componentes Básicos de React Native
Objetivo

Crear una aplicación de carga de notas o calificaciones por materia, la misma de forma sencilla
que permita a los usuarios agregar y visualizar notas por materia. Este ejercicio te ayudará a
entender y aplicar los componentes básicos de React Native como ScrollView, Text, TextInput,
Button, y FlatList.

*/

import React, { useState } from 'react'
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput
} from 'react-native'

const Ejercicio1 = () => {
  const [materia, setMateria] = useState('')
  const [materias, setMaterias] = useState([])
  const [nota, setNota] = useState(0)

  const addMateria = () => {
    if (materia && nota) {
      setMaterias([
        ...materias,
        { key: Date.now().toString(), value: materia, calificacion: nota }
      ])
      setMateria('')
      setNota(0)
    }
  }

  const deleteMaterias = () => {
    setMaterias([])
  }
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.text}>Carga de calificaciones 8vo Semestre</Text>
      <TextInput
        style={styles.input}
        placeholder="Cargar la materia..."
        value={materia}
        onChangeText={setMateria}
      />
      <TextInput
        style={styles.input}
        placeholder="Cargar la nota..."
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric"
      />
      <Button
        onPress={addMateria}
        title="Agregar"
        accessibilityLabel="Este boton agrega una nota a la lista de materias"
      />
      <Text style={styles.text}>Lista de materias</Text>
      <FlatList
        data={materias}
        renderItem={({ item }) => (
          <Text>{item.value + ' - ' + item.calificacion}</Text>
        )}
        ListFooterComponent={
          <Button
            style={styles.eliminar}
            onPress={deleteMaterias}
            title="Eliminar"
            disabled={materias.length === 0}
          />
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  eliminar: {
    backgroundColor: '#6666'
  }
})

export default Ejercicio1
