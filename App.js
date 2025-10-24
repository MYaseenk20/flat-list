import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView,FlatList} from 'react-native';
import pokemonList from './data.json'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style = {styles.scrollView}>
      {pokemonList.map((pokemon) =>{
        return (
          <View style = {styles.card}>
            <Text style = {styles.cardText}>{pokemon.type}</Text>
            <Text style = {styles.cardText}>{pokemon.name}</Text>
          </View>
        );
      })};
</ScrollView> */}
<View style={styles.flatView}>
<FlatList data={pokemonList} renderItem={({item}) => (
        <View style = {styles.card}>
            <Text style = {styles.cardText}>{item.type}</Text>
            <Text style = {styles.cardText}>{item.name}</Text>
          </View>
)} 
keyExtractor={(item,index) => item.id.toString}
 />
 </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  flatView : {
    paddingHorizontal : 16
  },
  card :  {
    backgroundColor : "white",
    padding : 16,
    borderRadius : 8,
    borderWidth : 1,
    marginBottom : 16
  },
  cardText:{
    fontSize : 22
  }
});
