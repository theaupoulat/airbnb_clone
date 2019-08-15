import React from "react";
import {
  Button,
  View,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  FlatList
} from "react-native";
import RoomCard from "../components/RoomCard";
import Axios from "axios";

class HomeScreen extends React.Component {
  state = {
    data: [],
    isLoading: true
  };
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Accueil"
    };
  };

  openRoomInfo = index => {
    this.props.navigation.navigate("RoomView", {
      data: this.state.data.rooms[index]
    });
  };

  render() {
    return this.state.isLoading ? (
      <ActivityIndicator size="large" color="#EE555D" />
    ) : (
      <ScrollView style={styles.container}>
        <FlatList
          data={this.state.data.rooms}
          renderItem={({ item, index }) => (
            <RoomCard
              keyExtractor={room => {
                return room._id;
              }}
              data={item}
              openRoomInfo={this.openRoomInfo}
              index={index}
            />
          )}
        />

        {/* <Button title="Aller sur une autre page" onPress={this.showMoreApp} /> */}
      </ScrollView>
    );
  }
  componentDidMount = async () => {
    const response = await Axios.get(
      "https://airbnb-api.now.sh/api/room?city=paris"
    );
    this.setState({ data: response.data, isLoading: false });
  };
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1
  }
});

export default HomeScreen;
