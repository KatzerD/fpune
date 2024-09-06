import { Button, Text } from '@rneui/base'
import React, { useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type ItemData = {
  id: string,
  materia: string,
  nota: number
}

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string
}

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => {
  return (<TouchableOpacity onPress={onPress} style={{backgroundColor}}>
    <Text style={{color: textColor}}> {item.id} - {item.materia} - {item.nota}</Text>
  </TouchableOpacity>)
}

function ListaAlumnos() {
  const [DATA, setDATA] = useState<ItemData[]>([
    { id: '1', materia: 'Fisica', nota: 10 },
    { id: '2', materia: 'Algoritmica', nota: 8 },
    { id: '3', materia: 'Calculo', nota: 10 }
  ])
  
  const [materia, setMateria] = useState<string>()
  const [nota, setNota] = useState<number>()
  const [selectedId, setSelectedId] = useState<string>()

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? 'grey' : 'white'  
    const color = item.id === selectedId ? 'white' : 'black'

    return (
      <Item 
      item={item}
      onPress={() => setSelectedId(item.id)}
      backgroundColor={backgroundColor}
      textColor={color}/>
    )
  }

  const addMateria = () => {
    if (materia && nota) {
      setDATA([
        ...DATA,
        { id: (DATA.length+1).toString(), materia: materia, nota: nota }
      ])
      setMateria('')
      setNota(0)
    }
  }

  const deleteData = () => {
    setDATA([])
  }

  return (
    <SafeAreaView>
      <View id="formulario">
        <Text>Carga de calificaciones del 8vo semestre</Text>

        <View>
          <TextInput value={materia} onChangeText={setMateria} placeholder="Cargar la materia..."></TextInput>
          <TextInput 
            value={nota !== undefined ? nota.toString() : ''} 
            onChangeText={text => setNota(Number(text))} 
            placeholder="Cargar la nota..."
            keyboardType="numeric"></TextInput>
        </View>

        <Button 
          onPress={addMateria} 
          title='Agregar' 
          accessibilityLabel="Este boton agrega una nota a la lista de materias">AGREGAR</Button>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        ListFooterComponent={() => (
          <Button
            color='error'
            onPress={deleteData}
            title='Eliminar'
            disabled={DATA.length == 0}>LIMPIAR</Button>
        )}
      />
    </SafeAreaView>
  )
}

export default ListaAlumnos
