import React, {Component}  from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height, scale } = Dimensions.get("window");

class Startup extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.startText}> Hospital Management </Text>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
    startText: {
        fontFamily: "sans-serif",
        fontSize: 36,
        fontWeight: "bold",
    },
});
export default function (props) {
    const navigation = useNavigation();
    return <Startup {...props} navigation={navigation} />;
}
