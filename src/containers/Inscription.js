import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Axios from "axios";

class Inscription extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    description: "",
    cardNumber: "",
    expiration: "",
    crypto: ""
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Inscription"
    };
  };

  signInAsync = async () => {
    try {
      console.log(1);
      const response = await Axios.post(
        "https://airbnb-api.now.sh/api/user/sign_up",
        {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username,
          descripton: this.state.description
        },
        { "Content-Type": "application/json" }
      );
      console.log(2);
      console.log(response.data);
      await AsyncStorage.setItem("userToken", response.data.token);
      console.log(3);
      this.props.navigation.navigate("App");
    } catch (error) {
      alert("This account already exist or idk bro");
    }
  };
  render = () => {
    return (
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.container}
          contentContainerStyle={styles.container}
          behavior="position"
          enabled
        >
          <Text style={styles.sectionName}>Informations </Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({ username: text });
            }}
            value={this.state.username}
            placeholder="Username"
            placeholderTextColor="#ea797f"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({ email: text });
            }}
            value={this.state.email}
            placeholder="Email"
            placeholderTextColor="#ea797f"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({ password: text });
            }}
            value={this.state.password}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#ea797f"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({ description: text });
            }}
            value={this.state.description}
            placeholder="Tell us more about yourself"
            placeholderTextColor="#ea797f"
          />
          <Text style={styles.sectionName}>Paiement </Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({ cardNumber: text });
            }}
            value={this.state.cardNumber}
            placeholder="Card Number"
            placeholderTextColor="#ea797f"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({ expiration: text });
            }}
            value={this.state.expiration}
            placeholder="Expiration Date"
            placeholderTextColor="#ea797f"
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({ crypto: text });
            }}
            value={this.state.crypto}
            placeholder="Crypto"
            placeholderTextColor="#ea797f"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.signInAsync();
            }}
          >
            <Text style={styles.buttonText}> Register </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#EE555D",
    flex: 1,
    alignItems: "center"
  },
  sectionName: {
    color: "#EE555D",
    fontSize: 40,
    fontWeight: "700",
    marginTop: 30
  },
  input: {
    width: 300,
    color: "#1c1c1c",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    marginBottom: 20,
    textAlign: "left",
    borderBottomColor: "#EE555D",
    borderBottomWidth: 1
  },
  button: {
    backgroundColor: "#EE555D",
    marginVertical: 35,
    padding: 15,
    paddingHorizontal: 35,
    borderRadius: 40
  },
  buttonText: {
    color: "white",
    fontSize: 26,
    fontWeight: "600"
  }
});

export default Inscription;
