import AsyncStorage from '@react-native-async-storage/async-storage'
import { ListItem, Text } from '@rneui/base'
import { Button, Input } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

function AsyncStorageEjemplo() {
    const [name, setName] = useState('')
    const [key, setKey] = useState('')
    const [dataList, setDataList] = useState([])
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        listar();
    }, [])

    const listar = async () => {
        try {
            setIsDisabled(false)
            const keys = await AsyncStorage.getAllKeys();
            const items = await AsyncStorage.multiGet(keys);
            setDataList(items.map(([id, value]) => ({id, value})));
        } catch (error) {
            console.error('Error loading lista', error);
        }
    }

    const editar = async (id, value) => {
        setKey(id)
        setName(value)
        setIsDisabled(true)
    }

    const guardar = async () => {
        try {
            if (name.trim() === '') {
                Alert.alert('Error', 'El campo no puede estar vacio');
                return
            }
            if(key.trim() === '') { //Guardar
                const key = `item_${Date.now()}`;
                await AsyncStorage.setItem(key, name)
                setName('')
                setKey('')
                listar();
                Alert.alert('Exito', 'Datos guardados')
            } else { //Actualizar
                actualizar()
            }
        } catch (error){
            Alert.alert('Error', 'Error al guardar los datos')
            console.error(error);
        }
    }

    const actualizar = async () => {
        try {
            await AsyncStorage.setItem(key, name)
            setName('')
            setKey('');
            listar()
            Alert.alert('Exito', 'Datos actualizados')
        } catch(error){
            Alert.alert('Error', 'Error al actualizar los datos')
            console.error(error)
        }
    }

    const eliminar = async (id) => {
        try {
            await AsyncStorage.removeItem(id);
            listar();
            Alert.alert('Exito', 'Datos eliminados')
        } catch(error) {
            Alert.alert('Error', 'Error al eliminar los datos')
            console.error(error)
        }
    }
    return (
        <View style={StyleSheet.container}>
            <View>
                <Input 
                    placeholder='Codigo'
                    disabled={isDisabled}
                    value={key}
                    style={StyleSheet.input}
                />
            </View>
            <View>
                <Input 
                    placeholder='Ingrese un nombre'
                    value={name}
                    onChangeText={setName}
                    style={StyleSheet.input}
                />
            </View>

            <Button title={isDisabled ? 'Actualizar' : 'Guardar'} onPress={guardar}/>
            <Text h4 style={StyleSheet.title}>Lista de Datos:</Text>
            {dataList.map(({id, value}) => (
                <ListItem key={id} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{value}</ListItem.Title>
                        <ListItem.Subtitle>{id}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Button icon={{name: 'edit', type:'font-awesome', size: 15, color: 'white'}} onPress={() => editar(id, value)}/>
                    <Button icon={{name: 'trash', type:'font-awesome', size: 15, color: 'white'}} onPress={() => eliminar(id)}/>
                </ListItem>
            ))}
        </View>
    )
}

export default AsyncStorageEjemplo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    input: {
        marginBottom: 15
    },
    title: {
        marginVertical: 10
    },
    overlayContent: {
        width: '80%',
        padding: 20
    }
})