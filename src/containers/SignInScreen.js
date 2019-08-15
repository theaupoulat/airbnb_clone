import React from "react";
import {
  Text,
  Button,
  AsyncStorage,
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Axios from "axios";

class SignInScreen extends React.Component {
  state = {
    username: "",
    password: ""
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: "#EE555D",
        borderBottomWidth: 0
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 28
      }
    };
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        contentContainerStyle={styles.container}
        behavior="position"
        enabled
      >
        <Ionicons name="md-home" size={110} color="white" style={styles.icon} />
        <Text style={styles.title}> Welcome </Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={text => {
            this.setState({ username: text });
          }}
          value={this.state.username}
          placeholder="Username / Email"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={text => {
            this.setState({ password: text });
          }}
          value={this.state.password}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.signInAsync();
          }}
        >
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signButton}
          onPress={() => {
            //
            this.props.navigation.navigate("NewAccount");
          }}
        >
          <Text style={styles.signButtonText}> Sign in </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }

  signInAsync = async () => {
    try {
      const response = await Axios.post(
        "https://airbnb-api.now.sh/api/user/log_in",
        { email: this.state.username, password: this.state.password },
        { "Content-Type": "application/json" }
      );
      await AsyncStorage.setItem("userToken", response.data.token);
      this.props.navigation.navigate("App");
    } catch (error) {
      alert("You entered a wrong username or password");
    }
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EE555D",
    flex: 1,
    alignItems: "center"
  },
  icon: {
    marginTop: 20
  },
  title: {
    fontSize: 40,
    color: "white",
    marginVertical: 40
  },
  input: {
    width: 300,
    color: "white",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    marginBottom: 20,
    textAlign: "left",
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  button: {
    backgroundColor: "white",
    marginTop: 35,
    padding: 15,
    paddingHorizontal: 35,
    borderRadius: 40
  },
  buttonText: {
    color: "#EE555D",
    fontSize: 26,
    fontWeight: "200"
  },
  signButton: {
    backgroundColor: "#EE555D",
    marginTop: 30
  },
  signButtonText: {
    color: "white",
    fontSize: 26,
    fontWeight: "200"
  }
});

export default SignInScreen;
