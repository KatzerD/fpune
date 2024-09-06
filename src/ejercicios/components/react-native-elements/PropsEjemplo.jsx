import { Card, Text } from '@rneui/base'
import React from 'react'
import { View } from 'react-native'

function PropsEjemplo({route}) {
    const {titulo, semestre, estado, profesionales } = route.params;
    return (
        <View>
            <Text>{titulo} - semestre: {semestre} - estado: {estado ? 'vigente': 'caducado'}</Text>

            {profesionales.map(prof =>(
                <Card>
                    <Card.Title>{prof.name}</Card.Title>
                    <Card.Divider/>
                    <Text>{prof.occupation}</Text>
                    <Card.Divider />
                    <Text>{prof.age}</Text>
                </Card>
            ))}
        </View>
    )
}

export default PropsEjemplo