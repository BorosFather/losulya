import { StyleSheet, View, Text, TouchableOpacity, Linking } from "react-native";


 export default function About({navigation}) {

  const linkPress = () => {
    Linking.openURL("https://github.com/BorosFather");
  }

    return (
        <View style={styles.container}>
        
          <Text style={styles.about}> Creator: Boros Father </Text>
          <Text style={styles.about}> Class: Szoft II N </Text>
          <Text style={styles.about}> Date: 2023-04-17 </Text>
          <Text style={styles.about}> Task: 0375 </Text>
          <TouchableOpacity onPress={linkPress}>
          <Text style={styles.link}> GitHub: https://github.com/BorosFather</Text>
          </TouchableOpacity>
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
      link: {
        color: "blue",
      },
      about: {
        padding: 5,
      }
    
    });