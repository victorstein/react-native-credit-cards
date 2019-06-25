import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Card from './components/Card'
import { LinearGradient } from 'expo-linear-gradient'

const cards = [
  {
    key: 123
  },
  {
    key: 456
  },
  {
    key: 789
  }
]

export default function App () {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0f0c29', '#302b63', '#24243e']}
        style={{
          height: '70%',
          width: '100%',
          paddingHorizontal: '10%',
          paddingTop: '40%',
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}
      >
        {
          cards.map((u, i) => {
            return <Card key={u.key} index={i + 1} />
          })
        }
      </LinearGradient>
      <View style={{ height: '30%' }}>
        <Text>Some Text</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
