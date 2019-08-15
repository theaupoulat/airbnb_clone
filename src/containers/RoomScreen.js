import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import RoomCard from "../components/RoomCard";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import Swiper from "react-native-swiper";

class RoomScreen extends React.Component {
  state = {
    isClicked: false
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Room"
    };
  };

  expandDescription = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam("data");
    const photoShow = data.photos.map((curr, index) => {
      console.log(data.photos[index]);
      return (
        <View style={styles.swiper} key={index}>
          <Image
            source={{
              uri: data.photos[index]
            }}
            style={{ height: 350, width: Dimensions.get("window").width }}
            resizeMode="cover"
          />
        </View>
      );
    });
    return (
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={false}
        >
          {photoShow}
        </Swiper>
        <View style={{ position: "relative" }}>
          <View style={styles.priceTag}>
            <Text style={styles.price}>{data.price} €</Text>
          </View>
        </View>
        <View style={styles.infoCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={1}>
              {data.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View style={{ flexDirection: "row", marginRight: 5 }}>
                <Ionicons
                  name="ios-star"
                  size={15}
                  color={parseInt(data.ratingValue) >= 1 ? "gold" : "grey"}
                />
                <Ionicons
                  name="ios-star"
                  size={15}
                  color={parseInt(data.ratingValue) >= 2 ? "gold" : "grey"}
                />
                <Ionicons
                  name="ios-star"
                  size={15}
                  color={parseInt(data.ratingValue) >= 3 ? "gold" : "grey"}
                />
                <Ionicons
                  name="ios-star"
                  size={15}
                  color={parseInt(data.ratingValue) >= 4 ? "gold" : "grey"}
                />
                <Ionicons
                  name="ios-star"
                  size={15}
                  color={parseInt(data.ratingValue) >= 5 ? "gold" : "grey"}
                />
              </View>

              <Text style={styles.reviews}>{data.reviews} reviews</Text>
            </View>
          </View>

          <Image
            source={{
              uri: data.user.account.photos[0]
            }}
            style={styles.portrait}
            resizeMode="contain"
          />
        </View>
        {this.state.isClicked ? (
          <Text
            style={styles.description}
            onPress={() => this.expandDescription()}
          >
            {data.description}
          </Text>
        ) : (
          <Text
            style={styles.description}
            numberOfLines={3}
            onPress={() => this.expandDescription()}
          >
            {data.description}
          </Text>
        )}
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: data.loc[1],
            longitude: data.loc[0],
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
        >
          <Marker
            coordinate={{ latitude: data.loc[1], longitude: data.loc[0] }}
            title=""
            description=""
          />
        </MapView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  cardContainer: {
    flex: 1,

    justifyContent: "flex-start"
  },
  swiper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 19
  },
  priceTag: {
    backgroundColor: "black",
    width: 90,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 8,
    left: 8
  },
  price: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
  },
  infoCard: {
    flexDirection: "row",

    //flex: 1, -- change here
    marginTop: 10,
    alignItems: "center",
    paddingHorizontal: 15
    /* backgroundColor: "yellow" */
  },
  reviews: {
    color: "grey"
  },
  portrait: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginLeft: 15
    /* backgroundColor: "yellow" */
  },
  description: {
    marginHorizontal: 15,
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "300"
  }
  /* separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginTop: 10
  } */
});
export default RoomScreen;
