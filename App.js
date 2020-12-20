import React,{useState} from 'react';
import { StyleSheet,TouchableWithoutFeedback,Keyboard, View,FlatList,Alert } from 'react-native';
import Header from './components/Header';
import AddTodo from './components/addItem';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    if(text.length > 0){
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Empty Task!!', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
