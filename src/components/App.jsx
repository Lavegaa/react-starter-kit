import React from "react";
import styles from "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.hi}>Hello, 리액트</h1>
      </div>
    );
  }
}
export default App;
