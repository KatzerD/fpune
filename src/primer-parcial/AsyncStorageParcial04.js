import AsyncStorage from '@react-native-async-storage/async-storage'
import { ListItem, Text } from '@rneui/base'
import { Button, Input } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View, ScrollView } from 'react-native'

function AsyncStorageParcial04() {
  const [carrera, setCarrera] = useState('')
  const [materia, setMateria] = useState('')
  const [key, setKey] = useState('')
  const [dataList, setDataList] = useState([])
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    listar()
  }, [])

  const listar = async () => {
    try {
      setIsDisabled(false)
      const keys = await AsyncStorage.getAllKeys()
      const items = await AsyncStorage.multiGet(keys)
      setDataList(
        items.map(([id, value]) => ({ id, value: JSON.parse(value) }))
      )
    } catch (error) {
      console.error('Error loading lista', error)
    }
  }

  const editar = async (id, value) => {
    setKey(id)
    setCarrera(value.carrera)
    setMateria(value.materia)
    setIsDisabled(true)
  }

  const guardar = async () => {
    try {
      if (carrera.trim() === '' || materia.trim() === '') {
        Alert.alert('Error', 'Los campos no pueden estar vacíos')
        return
      }
      const item = { carrera, materia }
      if (key.trim() === '') {
        // Guardar
        const key = `item_${Date.now()}`
        await AsyncStorage.setItem(key, JSON.stringify(item))
        setKey('')
        setCarrera('')
        setMateria('')
        listar()
        Alert.alert('Éxito', 'Datos guardados')
      } else {
        // Actualizar
        actualizar(item)
      }
    } catch (error) {
      Alert.alert('Error', 'Error al guardar los datos')
      console.error(error)
    }
  }

  const actualizar = async (item) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(item))
      setCarrera('')
      setMateria('')
      setKey('')
      listar()
      Alert.alert('Éxito', 'Datos actualizados')
    } catch (error) {
      Alert.alert('Error', 'Error al actualizar los datos')
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Input
          placeholder="Código"
          disabled={isDisabled}
          value={key}
          onChangeText={setKey}
          style={styles.input}
        />
        <Input
          placeholder="Ingrese una carrera"
          value={carrera}
          onChangeText={setCarrera}
          style={styles.input}
        />
        <Input
          placeholder="Ingrese una materia"
          value={materia}
          onChangeText={setMateria}
          style={styles.input}
        />

        <Button
          title={isDisabled ? 'Actualizar' : 'Guardar'}
          onPress={guardar}
          buttonStyle={styles.button}
        />
        <Text h4 style={styles.title}>
          Lista de Datos:
        </Text>
        {dataList.map(({ id, value }) => (
          <ListItem key={id} bottomDivider containerStyle={styles.listItem}>
            <ListItem.Content>
              <ListItem.Title style={styles.listItemTitle}>
                {value.carrera}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.listItemSubtitle}>
                {value.materia}
              </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.listItemId}>
                {id}
              </ListItem.Subtitle>
            </ListItem.Content>
            <Button
              icon={{
                name: 'edit',
                type: 'font-awesome',
                size: 15,
                color: 'white'
              }}
              onPress={() => editar(id, value)}
              buttonStyle={styles.editButton}
            />
          </ListItem>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#ffffff'
  },
  button: {
    backgroundColor: '#007bff',
    marginBottom: 15
  },
  title: {
    marginVertical: 10,
    textAlign: 'center',
    color: '#333'
  },
  listItem: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginVertical: 5,
    padding: 10
  },
  listItemTitle: {
    fontWeight: 'bold'
  },
  listItemSubtitle: {
    color: '#555'
  },
  listItemId: {
    fontStyle: 'italic',
    color: '#aaa'
  },
  editButton: {
    backgroundColor: '#28a745',
    marginLeft: 10
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    marginLeft: 10
  }
})

export default AsyncStorageParcial04
