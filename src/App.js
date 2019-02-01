import React from "react";

/*const App = () => <h1>Hello</h1>;*/
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Header username="jessica" />
          <Greeting />
        </h1>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <p>Welcome, {this.props.username}!</p>
        </h1>
      </div>
    );
  }
}

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternon";
    } else {
      timeOfDay = "night";
    }

    return <h1>Good {timeOfDay} to you, sir or madam</h1>;
  }
}

export default App;
