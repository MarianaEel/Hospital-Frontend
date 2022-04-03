import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GetModule from "../get/GetModule";
import PostModule from "../post/PostModule";

const { width, height, scale } = Dimensions.get("window");

class Nav extends Component {
    constructor(props) {
        super(props);
        this.getHandle = this.getHandle.bind(this);
        this.postHandle = this.postHandle.bind(this);
        this.state = {};
    }
    getHandle() {
        const { navigation } = this.props;
        navigation.navigate("Get");
    }
    postHandle() {
        const { navigation } = this.props;
        navigation.navigate("Post");
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* 4 Nav Button */}
                <SafeAreaView style={styles.hcontainer}>
                    <TouchableOpacity
                        style={[styles.buttons,{backgroundColor:"lightpink"}]}
                        activeOpacity={0.7}
                        onPress={this.getHandle}
                    >
                        <Text style={styles.btntxt}>Get</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttons,{backgroundColor:"lightcoral"}]}
                        activeOpacity={0.7}
                        onPress={this.postHandle}
                    >
                        <Text style={styles.btntxt}>Post</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={styles.hcontainer}>
                    <TouchableOpacity
                        style={[styles.buttons,{backgroundColor:"salmon"}]}
                        activeOpacity={0.7}
                        onPress={this.getHandle}
                    >
                        <Text style={styles.btntxt}>Put</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttons,{backgroundColor:"tomato"}]}
                        activeOpacity={0.7}
                        onPress={this.postHandle}
                    >
                        <Text style={styles.btntxt}>Delete</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    hcontainer: {
        width,
        height: 150,
        marginTop: height * 0.02,
        marginBottom: height * 0.02,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttons: {
        width: 150,
        height: 150,
        marginHorizontal: width * 0.02,
        borderRadius: 5,
        padding: 5,
        backgroundColor: "aquamarine",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    btntxt:{
        fontFamily:"sans-serif",
        fontSize:24,
        fontWeight:"bold",
    },
});

export default function (props) {
    const navigation = useNavigation();
    return <Nav {...props} navigation={navigation} />;
}
