import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import LoginPage from "./app/launcher/LoginPage";
import Startup from "./app/launcher/Startup";
import GetModule from "./app/get/GetModule";
import Nav from "./app/nav/Nav";
import PostModule from "./app/post/PostModule";

// const { width, height, scale } = Dimensions.get("window");
const Stack = createNativeStackNavigator();
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowStart: true,
            isLogin: false,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isShowStart: false,
            });
        }, 2000);
        clearTimeout();
    }
    callback= (islogin)=> {
        // console.log("callback")
        // console.log(islogin)
        this.setState({ isLogin: islogin });
        // console.log(this.state.isLogin)
    }
    render() {
        return (
            <NavigationContainer style={styles.container}>
                
                    {this.state.isShowStart ? (
                        <Startup/>
                    ) : ! this.state.isLogin ? (
                        <LoginPage callback={this.callback}/>
                    ) : (
                        <>
                        <Stack.Navigator initialRouteName="Nav">
                            <Stack.Screen
                                name="Nav"
                                component={Nav}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Get"
                                component={GetModule}
                                options={{ headerShown: true }}
                            />
                            <Stack.Screen
                                name="Post"
                                component={PostModule}
                                options={{ headerShown: true }}
                            /></Stack.Navigator>
                        </>
                    )}
                
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
