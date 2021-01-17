import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import { Header, ListItem, Form } from './components'

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {


  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("")
  const [count, setCount] = useState(0)

  const renderTodo = ({ item }) => <ListItem item={item} deleteTodo={() => deleteTodo(item)} changeEnable={() => { changeEnable(item) }} />

  function addTodo(todoText) {
    if (todoText != "") {
      const newTodo = { todo: todoText, isDone: false }
      setTodos([...todos, newTodo])
    }
  }

  function deleteTodo(todo) {
    const newList = todos.filter(todoItem => todoItem != todo);
    setTodos([...newList])
  }


  function changeEnable(data) {
    data.isDone == true ? data.isDone=false : data.isDone=true
    setTodos([...todos])
  }


  function countOfTodos() {
    const newList = todos.filter(todoItem => todoItem.isDone == false);
    setCount(newList.length)
  }


  useEffect(() => {
    setTodos(todos);
    countOfTodos();
  }, [todos]);


  return (
    <View style={styles.container}>
      <Header count={count} />
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTodo}
        testID="list"
      />
      <Form todo={(val) => setTodoText(val)}
        formSubmit={val => {
          return (
            addTodo(todoText),
            val.clear()
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
  }
})

export default App;
