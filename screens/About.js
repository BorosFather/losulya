import { StyleSheet, View, Text } from "react-native";


 export default function About({navigation}) {
    return (
        <View style={styles.container}>
          <Text onPress={() => navigation.navigate("Home")} 
          style={{ fontSize: 14, fontWeight: "bold"}} > About</Text>
          
        </View>
      );
    }