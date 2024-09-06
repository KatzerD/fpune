import React, { useState } from 'react'
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

const TrabajoPractico01 = () => {
  const [nombre, setNombre] = useState('')
  const [cedula, setCedula] = useState(0)
  const [email, setEmail] = useState('')
  const [alumnos, setAlumnos] = useState([])

  const addAlumno = () => {
    if (nombre && cedula && email) {
      setAlumnos([
        ...alumnos,
        {
          key: Date.now().toString(),
          alumno: nombre,
          ci: cedula,
          correo: email
        }
      ])
      setNombre('')
      setCedula(0)
      setEmail('')
    }
  }

  const limpiarLista = () => {
    setAlumnos([])
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Lista de alumnos del 8vo Semestre</Text>

        <TextInput
          style={styles.input}
          value={cedula}
          onChangeText={setCedula}
          placeholder="Cedula del Alumno..."
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre del Alumno..."
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email del Alumno..."
          keyboardType="email-address"
        />

        <Button
          style={styles.button}
          color="green"
          onPress={addAlumno}
          title="Agregar alumno"
        />
      </ScrollView>

      <FlatList
        style={styles.table}
        data={alumnos}
        renderItem={({ item }) => (
          <Text style={styles.row}>
            {item.ci} - {item.alumno} - {item.correo}
          </Text>
        )}
        keyExtractor={(item) => item.key}
        ListFooterComponent={
          <Button
            style={styles.button}
            color="red"
            onPress={limpiarLista}
            title="Limpiar tabla"
            disabled={alumnos.length === 0}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  table: {
    marginVertical: 10
  },
  row: {
    borderColor: 'gray',
    borderWidth: 2,
    padding: 15,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20
  }
})

export default TrabajoPractico01
