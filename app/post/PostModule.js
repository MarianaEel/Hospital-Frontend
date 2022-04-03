import React, { Component } from "react";
import axios from "axios";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

const { width, height, scale } = Dimensions.get("window");
class PostModule extends Component {
    constructor(props) {
        super(props);
        this.getbutton = this.getbutton.bind(this);
        this.renderdata = this.renderdata.bind(this);
        this.setValue = this.setValue.bind(this);
        this.setItems = this.setItems.bind(this);
        this.setOpen = this.setOpen.bind(this);
        this.pickerselect = this.pickerselect.bind(this);
        this.state = {
            open: false,
            value: null,
            items: [
                { label: "Patients", value: "patients" },
                { label: "Datas", value: "datas" },
                { label: "Staffs", value: "staffs" },
                { label: "Chats", value: "chats" },
            ],
            baseurl: "http://34.238.84.218:8000/",
            extendurl: "patients",
            queryid: "",
            getdatas: [],
        };
    }
    setOpen(open) {
        this.setState({
            open,
        });
    }

    setValue(callback) {
        this.setState((state) => ({
            value: callback(state.value),
        }));
    }

    setItems(callback) {
        this.setState((state) => ({
            items: callback(state.items),
        }));
    }

    getbutton = async () => {
        const url = `${this.state.baseurl}${this.state.extendurl}`;
        const response = await axios.get(url);
        // console.log(url);
        this.setState({ getdatas: response.data.data });
    };

    pickerselect(item) {
        this.setState({ extendurl: item.value });
        // console.log(item.value);
    }

    renderdata() {
        return this.state.getdatas.map(function (items) {
            return (
                <View key={items.id} style={styles.outinnerbox}>
                    <Text>id: {items.id}</Text>
                    <View>
                        <Text style={styles.outtxt}>name: {items.name}</Text>
                        <Text style={styles.outtxt}>
                            gender: {items.gender}
                        </Text>
                        <Text style={styles.outtxt}>age: {items.age}</Text>
                    </View>
                </View>
            );
        });
    }

    render() {
        // const { navigation } = this.props;
        const { open, value, items } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <SafeAreaView style={styles.wrap}>
                    <DropDownPicker
                        placeholder="Select where to get"
                        style={styles.picker}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={this.setOpen}
                        setValue={this.setValue}
                        setItems={this.setItems}
                        onSelectItem={(item) => this.pickerselect(item)}
                    />
                    <TextInput
                        style={styles.txtinput}
                        placeholder="id"
                        placeholderTextColor="#ddd"
                        maxLength={10}
                        returnKeyType="done"
                        keyboardType="numeric"
                        onChangeText={(text) =>
                            this.setState({ queryid: text })
                        }
                    />
                    <TouchableOpacity
                        style={styles.getbtn}
                        activeOpacity={0.7}
                        onPress={this.getbutton}
                    >
                        <Text style={styles.gettxt}>Post</Text>
                    </TouchableOpacity>
                    <View style={styles.outbox}>{this.renderdata()}</View>
                </SafeAreaView>
            </SafeAreaView>
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
    wrap: {
        width: width * 0.6,
        height,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    txtinput: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        marginTop: 5,
        padding: 5,
    },
    getbtn: {
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        padding: 5,
        backgroundColor: "aquamarine",
    },
    gettxt: {
        fontFamily: "sans-serif",
    },
    outbox: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
    },
    outinnerbox: {
        width: "100%",
        backgroundColor: "#eee",
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
    },
    outtxt: {
        fontFamily: "sans-serif",
    },
    picker: {
        width: "100%",
        marginTop: height * 0.15,
    },
});
export default function (props) {
    const navigation = useNavigation();
    return <PostModule {...props} navigation={navigation} />;
}
