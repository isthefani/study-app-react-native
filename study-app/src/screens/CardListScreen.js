import { View, Text, Button, FlatList } from 'react-native'
import React, { useContext } from 'react'
import StudyCadsContext from '.../contexts/StudyCadsContext'

const CardListScreen = ({ navigation }) => {

    const { cards, deleteCard } = useContext(StudyCadsContext)

  return (
    <View>
      <FlatList 
        data={cards}
        keyExtractor={item => item.id.toString}
        renderItem={( { item }) => (
            <View>
                <Text>{item.title}</Text>
                <Text>Status: {item.status}</Text>
                <Button title='Editar' onPress={() => navigation.navigate('CardEdit', {id: item.id})}/>
                <Button title='Deletar' onPress={() => deleteCard(item.id)}/>
            </View>
        )

        }
      />

      <Button title='Adicionar Card' onPress={() => navigation.navigate('CardEdite')}/>
    </View>
  )
}

export default CardListScreen