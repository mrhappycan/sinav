import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'


const App = () => {
  return (
    <Text style={ styles.txt } >Sınavın başlangıç hali budur. Figmadaki design'a ve direktiflere uygun bir şekilde toplayabildiğiniz en yüksek puanı toplamaya çalışın.</Text>
  )
}

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Lora-Regular',
    fontSize: 24
  }
})

export default App;