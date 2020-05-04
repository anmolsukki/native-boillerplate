import React from "react";
import Navigator from "./src/Config/Navigator";
import { Provider } from "react-redux";
import store from "./src/Redux/Store/store";

class App extends React.Component {
  render () {
    return <Provider store={store}><Navigator /></Provider>
  }
}

export default App;
