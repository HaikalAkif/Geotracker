import { StyleSheet, Text, Dimensions, Pressable, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Profile = ({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                Sini buat profile page
            </Text>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})