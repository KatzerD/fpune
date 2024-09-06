import { useNavigation } from '@react-navigation/native'
import { ListItem, Text } from '@rneui/base'
import { Input } from '@rneui/themed'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'

function ComponenteParcial01({ navigation }) {
  const [materia, setMateria] = useState('')
  const [nota, setNota] = useState(0)

  const irAPropsParcial02 = () => {
    if (materia && nota) {
      navigation.navigate('PropsParcial02', { materia, nota })
    } else {
      Alert.alert('Error', 'Los campos deben estar completos')
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Examen Primera Parcial</Text>
        <Input
          placeholder="Ingresar nombre de materia"
          keyboardType="default"
          onChangeText={setMateria}
          value={materia}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Ingresar nota"
          keyboardType="numeric"
          onChangeText={setNota}
          value={String(nota)}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
        />
      </View>
      <ListItem bottomDivider onPress={irAPropsParcial02}>
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitle}>Props</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate('AxiosParcial03')}
      >
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitle}>Axios</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate('AsyncStorageParcial04')}
      >
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitle}>
            Async Storage
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  container: {
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center'
  },
  inputContainer: {
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16
  },
  listItemTitle: {
    fontSize: 18,
    color: '#007bff'
  }
})

export default ComponenteParcial01
