import { Button, ListItem, Text } from '@rneui/base'
import { Overlay } from '@rneui/themed'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'

function AxiosParcial03() {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title style={styles.listItemTitle}>
                {item.username}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: 'thin',
    color: '#007bff'
  },
  overlay: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff'
  },
  overlayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  overlayText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5
  },
  button: {
    backgroundColor: '#007bff',
    marginTop: 10
  }
})

export default AxiosParcial03
