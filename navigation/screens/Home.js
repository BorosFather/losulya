import { StyleSheet, View, Text } from "react-native";


 export default function Home({navigation}) {
    return (
        <View style={styles.container}>
          <Text onPress={() => navigation.navigate("About")} 
          style={{ fontSize: 14, fontWeight: "bold"}} > Home</Text>
          
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