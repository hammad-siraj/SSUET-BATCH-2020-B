import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./Components/childComponent";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "talha",
      prod: ["one"],
      cart: 1,
      isOpen: false,
      object: {},
      arr: [],
    };
  }

  render() {
    let { name, cart, prod, isOpen } = this.state;
    let arr = [name, prod, isOpen];

    return (
      <div>
        <h1>{prod[0]}</h1>
        <button
          // onClick={() => (this.state.isOpen = true)}  wrong way

          onClick={() => this.setState({ isOpen: true })}
        >
          Open Drop down
        </button>
        <h1>Dropdown{isOpen ? "open" : "close"}</h1>

        <ChildComponent
          name={name}
          cart={this.state.cart} // without destructuring !
          arr={arr}
        />
      </div>
    );
  }
}

export class App2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>HELLO ?</h1>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
