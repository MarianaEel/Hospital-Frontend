import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import App from "../../App";

const { width, height, scale } = Dimensions.get("window");
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.loginHandle = this.loginHandle.bind(this);
        this.state = {
            username: "",
            password: "",
        };
    }
    loginHandle= (event) => {
        // const { navigation } = this.props;
        // console.log( params);
        // navigation.navigate("Login");

        console.log(this.state.username);
        console.log(this.state.password);
        if (
            this.state.username === undefined ||
            this.state.password === undefined
        ) {
            alert("Please enter username & password");
        } else if (
            this.state.username == "admin" &&
            this.state.password == 123456
        ) {
            // navigation.navigate("Nav");
            this.props.callback(true);
        } else {
            alert("Wrong Username & Password");
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SafeAreaView style={styles.wrap}>
                    {/* avatar */}
                    <Image
                        source={require("../../static/icon.png")}
                        style={styles.avatar}
                    />
                    {/* name */}
                    <TextInput
                        style={styles.txtinput}
                        placeholder=" username "
                        placeholderTextColor="#ddd"
                        maxLength={10}
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        onChangeText={(text) =>
                            this.setState({ username: text })
                        }
                    />
                    {/* password */}
                    <TextInput
                        style={styles.txtinput}
                        placeholder=" password "
                        placeholderTextColor="#ddd"
                        maxLength={10}
                        underlineColorAndroid="transparent"
                        returnKeyType="go"
                        secureTextEntry={true}
                        onChangeText={(password) =>
                            this.setState({ password: password })
                        }
                    />

                    {/* Login Button */}
                    <TouchableOpacity
                        style={styles.loginbtn}
                        activeOpacity={0.7}
                        onPress={this.loginHandle}
                    >
                        <Text style={styles.logintxt}>Login</Text>
                    </TouchableOpacity>

                    {/* forget password && Sign up */}
                    <SafeAreaView style={styles.forgetpswdview}>
                        <TouchableOpacity
                            style={styles.forgetpswdbtn}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.forgetpswdtxt}>
                                forget password
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.forgetpswdbtn}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.forgetpswdtxt}>sign up</Text>
                        </TouchableOpacity>
                    </SafeAreaView>

                    {/* other login method */}
                    <View style={styles.bottom}>
                        <View styles={styles.line}></View>
                        <Text styles={styles.bottomtxt}>
                            Other Login Method
                        </Text>
                        <View style={styles.bottomimgbox}>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image
                                    source={require("../../static/icon.png")}
                                    style={styles.bottomimg}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image
                                    source={require("../../static/icon.png")}
                                    style={styles.bottomimg}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image
                                    source={require("../../static/icon.png")}
                                    style={styles.bottomimg}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
                {/* <GetModule/> */}
                <StatusBar style="auto" />
            </SafeAreaView>
        );
    }
}
export default function (props) {
    const navigation = useNavigation();
    return <LoginPage {...props} navigation={navigation} />;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    wrap: {
        width: width * 0.6,
        height,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: width * 0.5,
        borderWidth: 1,
        borderColor: "#fff",
        marginTop: height * 0.25,
        marginBottom: 30,
    },
    txtinput: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        marginTop: 10,
        padding: 5,
    },
    loginbtn: {
        width: "100%",
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 5,
        padding: 5,
        backgroundColor: "aquamarine",
        alignItems: "center",
    },
    logintxt: {
        fontFamily: "sans-serif",
    },

    forgetpswdview: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    forgetpswdbtn: {},
    forgetpswdtxt: {
        fontFamily: "sans-serif",
        color: "#ddd",
    },
    bottom: {
        width: "100%",
        position: "absolute",
        bottom: 30,
        alignItems: "center",
    },
    line: {
        width: "100%",
        height: 5,
        backgroundColor: "#000",
    },
    bottomtxt: {
        width: "100%",
        marginTop: -8,
        backgroundColor: "blue",
        textAlign: "center",
    },
    bottomimgbox: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottomimg: {
        width: 30,
        height: 30,
        borderRadius: width * 0.5,
        borderWidth: 1,
        borderColor: "#fff",
        margin: 10,
    },
});

// export default LoginPage;
