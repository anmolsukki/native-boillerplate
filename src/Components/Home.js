import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as actionCreator from "../Redux/Actions/ActionTypes/Index";

class Home extends React.Component {
  componentDidMount = () => {
    this.props.userDatas()
  }
  render () {
    console.log("API Call======>>>>", this.props.userData)
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.Texts}>Hello React Natives</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  Texts: {
    fontSize: 20
  }
})

const mapStateToProps = state => {
  return {
    userData: state.CtrUser.getUserData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userDatas: () => dispatch(actionCreator.getUsersDataAction())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
