import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Animated from 'react-native-reanimated'

const { height, width } = Dimensions.get('window')
const { Value } = Animated

export default ({ number = '0000 0000 0000 0000', name = 'alfonso gomez', exp = '12/21', index = 1 }) => {
  return (
    <Animated.View>
      <LinearGradient
        colors={colors}
        style={[styles.card, { top: index * 20, left: index * 20 }]}
        start={[0, 0]}
        end={[0.5, 1]}
      >
        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', right: -20 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[ styles.logoCircles, { backgroundColor: '#FF512F' } ]} />
            <View style={[ styles.logoCircles, { backgroundColor: '#F09819', left: -15 } ]} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.textcolor, { paddingTop: 10 }]}>
              { number }
            </Text>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
            <View style={{ width: '70%', height: '100%', justifyContent: 'flex-end' }}>
              <Text style={[styles.textcolor, { paddingBottom: 10, textTransform: 'capitalize' }]}>
                { name }
              </Text>
            </View>
            <View style={{ width: '30%', height: '100%', justifyContent: 'flex-end' }}>
              <Text style={[styles.textcolor, { paddingBottom: 10, fontSize: 16, alignSelf: 'flex-end' }]}>
                { exp }
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  )
}

const styles = {
  card: {
    position: 'absolute',
    width: width / 1.4,
    height: height / 4.2,
    backgroundColor: 'red',
    borderRadius: 15,
    paddingHorizontal: '5%',
    transform: [
      { rotateY: '25deg' },
      { perspective: 400 }
    ],
    elevation: 4
  },
  textcolor: {
    color: 'white',
    fontSize: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1
  },
  logoCircles: {
    borderRadius: 35,
    height: 35,
    width: 35
  }
}

const colors = [
  '#5C258D',
  '#4389A2'
]
