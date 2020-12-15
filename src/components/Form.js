import React, { useState } from 'react'
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native'

function Form(props) {
    const [textInput,settextInput] = useState("")
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} testID="input" ref={input=>{settextInput(input)}} placeholder="Enter a Todo" onChangeText={props.todo} />
            <TouchableOpacity style={styles.button} testID="button" onPress={()=>props.formSubmit(textInput)}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        padding: 20,
        borderRadius:15,
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        borderRadius:15,
        padding: 10
    },
    input: {
        alignItems: "center",
        backgroundColor: "white",
        borderRadius:15,
        padding: 10,
        marginBottom:10,
    },
})

export { Form }
