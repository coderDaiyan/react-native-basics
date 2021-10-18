import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
  
const App = () => {
  const [people, setPeople] = useState([
    { name: "abc", id: 1 },
    { name: "abc", id: 2 },
    { name: "abc", id: 3 },
    { name: "abc", id: 4 },
    { name: "abc", id: 5 },
    { name: "abc", id: 6 },
    { name: "abc", id: 7 },
  ]);

  const pressHandler = id => {
    console.log(id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        key={"_"}
        keyExtractor={item => "_" + item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map(p => (
          <View key={p.key}>
            <Text style={styles.item}>{p.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    fontWeight: "bold",
  },
});
