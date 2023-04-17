import { StyleSheet, View, Text } from "react-native";


 export default function About({navigation}) {
    return (
        <View style={styles.container}>
          <Text onPress={() => navigation.navigate("Home")} 
          style={{ fontSize: 14, fontWeight: "bold"}} > About</Text>
          
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
    });