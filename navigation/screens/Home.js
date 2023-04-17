import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}) {

  const [chestg, setChestg] = useState("");
  const [length, setLength] = useState("");
  const [volume, setVolume] = useState("");

  function calWeight(){
    let localVolume = (parseInt(chestg) * parseInt(chestg) * parseInt(length)) / 11887;
    setVolume(localVolume.toString());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ló súlyának számítása</Text>

      <Text>Mellkas kerülete</Text>
      <TextInput style={styles.input} onChangeText={(data) => setChestg(data)}/>

      <Text>Hossz</Text>
      <TextInput style={styles.input} onChangeText={(data) => setLength(data)}/>

      <TouchableHighlight style={styles.btn} onPress={calWeight}>
        <Text style={styles.btnText}>Számít</Text> 
      </TouchableHighlight> 

      <Text>Ló súlya</Text>
      <TextInput style={styles.input} value={volume} /> 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  btn: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});