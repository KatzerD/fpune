import { ListItem, Text } from '@rneui/base'
import React from 'react'
import { ScrollView } from 'react-native'

const profesionales = [
  {
    name: 'Enrique Centurion',
    occupation: 'Trainee Software Developer',
    age: 22
  },
  {
    name: 'Fulano de Tal',
    occupation: 'Product Manager',
    age: 45
  }
]

const Home = ({navigation}) => {

  const props = {
    titulo: 'Lista de Alumnos',
    semestre: '8vo',
    estado: true,
    profesionales
  }

  return <ScrollView>
    <ListItem bottomDivider onPress={() => navigation.navigate('ListaAlumnos')}>
      <ListItem.Content>
        <ListItem.Title>Pantalla de Notas</ListItem.Title>
      </ListItem.Content>
    </ListItem>

    <ListItem bottomDivider onPress={() => navigation.navigate('AvatarBasic')}>
      <ListItem.Content>
        <ListItem.Title>Avatars</ListItem.Title>
      </ListItem.Content>
    </ListItem>

    <ListItem bottomDivider onPress={() => navigation.navigate('PropsEjemplo', props)}>
      <ListItem.Content>
        <ListItem.Title>PropsEjemplo</ListItem.Title>
      </ListItem.Content>
    </ListItem>

    <ListItem bottomDivider onPress={() => navigation.navigate('AxiosEjemplo')}>
      <ListItem.Content>
        <ListItem.Title>AxiosEjemplo</ListItem.Title>
      </ListItem.Content>
    </ListItem>

    <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorageEjemplo')}>
      <ListItem.Content>
        <ListItem.Title>AsyncStorage</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  </ScrollView>
}

export default Home
