import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function ListItem(props) {
    return (
        <TouchableOpacity style={props.item.isDone==false ? styles.container : [styles.container, {backgroundColor:"#eba09b"}]} onLongPress={props.deleteTodo} onPress={props.changeEnable}>
            <Text style={props.item.isDone==false ? styles.text : [styles.text, {textDecorationLine:'line-through'}]} >{props.item.todo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        borderRadius: 10,
        margin: 5,
        color: "white"
    },
    text:{
        padding: 10,
        margin: 5,
        color: "white",
    }
})

export { ListItem }