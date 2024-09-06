import React from 'react'
import { ScrollView } from 'react-native'
import { Avatar, Icon } from '@rneui/themed'

function AvatarBasic() {
  const imageUrl = "https://randomuser.me/api/portraits/men/36.jpg"; // Puedes verificar si es accesible

  return (
    <ScrollView>
        {imageUrl ? (
          <Avatar 
            size={64}
            rounded
            source={{ uri: imageUrl }}
          />
        ) : (
          <Text>No image available</Text>  // Mensaje alternativo si la imagen no está disponible
        )}

        <Avatar 
            size={64}
            rounded
            title='FC'
            containerStyle={{ backgroundColor: "#3d4db7"}}
        />
    </ScrollView>
  )
}

export default AvatarBasic