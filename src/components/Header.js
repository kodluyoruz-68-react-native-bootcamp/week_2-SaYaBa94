import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header(props){
    return(
    <View style={styles.container}>
        <Text style={styles.title}>TODO</Text>
        <Text style={styles.todoCount}>{props.count}</Text>
    </View>
    )        
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        margin: 5,
    },
    title: {
        color:"red",
        fontSize:30,
    },
    todoCount: {
        color:"black",
        fontSize:30,
    },
})
export {Header}