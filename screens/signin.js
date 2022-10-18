import { StyleSheet, Text, Dimensions, TextInput, Pressable, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Signin = ({ navigation }) => {
    return (  
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.container1}>
                <Image 
                    style={styles.back}
                    source={require("../assets/arrow.png")}
                    onPress={() => navigation.navigate('load')}
                />
                <Text style={styles.title}>Sign In</Text>
                <Image
                    style={styles.mount}
                    source={require("../assets/mount.png")}
                />
                <Text style={styles.desc}>
                Welcome Back.
                </Text>
                <Text style={styles.desc}>
                Log in and start exploring
                </Text>
            </SafeAreaView>
            <SafeAreaView style={styles.container2}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                />
                <Pressable style={styles.signin} onPress={() => navigation.navigate('home')}>
                    <Text style={styles.signinBut}>Sign In</Text>
                </Pressable>
                <Text style={styles.forgot}>
                    Forgot your password?
                </Text>
            </SafeAreaView>
            
        </SafeAreaView>
    )
}

export default Signin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#eee',
        height: windowHeight,
        width: windowWidth,
    },
    container1: {
        paddingBottom: 50,
    },
    container2: {
        backgroundColor: '#87F7D2',
        paddingTop: 20,
        paddingBottom: 200,
        borderRadius: 25,
    },
    back: {
        height: 50,
        width: 50,
        marginLeft: 15,
        marginTop: 20,
        position: 'absolute',
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 45,
    },
    mount: {
        height: 150,
        width: 150,
        alignSelf: 'center',
    },
    desc: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    },
    input: {
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 7,
        backgroundColor: '#bbb'
      },
      signin: {
        backgroundColor: '#eee',
        borderRadius: 10,
        marginLeft: 60,
        marginRight: 60,
        marginBottom: 30,
        paddingTop: 5,
        paddingBottom: 5,
        elevation: 10,
      },
      signinBut: {
        fontSize: 16,
        alignSelf: 'center',
      },
      forgot: {
        color: '#565656',
        alignSelf: 'center',
      }
})