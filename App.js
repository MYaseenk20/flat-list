import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
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
        <FlatList data={pokemonList} renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.type}</Text>
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        )}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style ={{height:16}}
          />}

        ListEmptyComponent={<View style={{flex : 1,justifyContent : 'center',alignItems :'center'}}><Text style={{fontSize : 30}}>No Item Found</Text></View>}
        ListHeaderComponent={<View style={{flex : 1,justifyContent : 'center',alignItems :'center'}}><Text style={{fontSize : 24}}>Pokemon List</Text></View>}
        
        ListFooterComponent={<View style={{flex : 1,justifyContent : 'center',alignItems :'center'}}><Text style={{fontSize : 24}}>Pokemon List End</Text></View>}
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
  flatView: {
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 22
  }
});
