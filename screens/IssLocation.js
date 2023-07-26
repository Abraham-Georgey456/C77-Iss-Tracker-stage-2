import * as React from 'react'
import {Text, View, StyleSheet} from 'react-native';

export default class IssLocationScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    Iss Location Screen
                </Text>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "cursive",
    },
});
