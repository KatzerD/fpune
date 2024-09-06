import React from 'react'
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

function BasicComponents() {
  return (
    <ScrollView style={{ flexDirection: 'column', height: 3000, padding: 20 }}>
      <Text style={{ fontWeight: '700', fontSize: 25, lineHeight: 50 }}>
        Componentes Basicos
      </Text>

      <View style={{ backgroundColor: 'blue', flex: 0.5 }}>
        <Text>Hello world</Text>
      </View>
      <View style={{ backgroundColor: 'red', flex: 0.3 }}>
        <Text>Hello world</Text>
      </View>

      <Text>
        Saltos
        {'\n'}De
        {'\n'}Linea
        {'\n'}Con \n
      </Text>

      <TextInput
        style={{ borderWidth: 1, borderColor: 'grey' }}
        placeholder="Input tipo alfanumerico"
      ></TextInput>

      <TextInput
        style={{ borderWidth: 1, borderColor: 'grey' }}
        placeholder="Input tipo email"
        keyboardType="email-address"
      ></TextInput>

      <TextInput
        style={{ borderWidth: 1, borderColor: 'grey' }}
        placeholder="Input tipo numerico"
        keyboardType="numeric"
      ></TextInput>
    </ScrollView>
  )
}

export default BasicComponents
