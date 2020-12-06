import React, { Component } from "react";
import ShowName from "../Components/showName";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      stName: "",
      isOpen: false,
      //   data: [{
      //       name:"",
      //       price:"",
      //       image:"/image/imageOne.png"
      //   },{
      //     name:"",
      //     price:"",
      //     image:"/image/imageOne.png"

      //   }],
      data: [],
    };
  }
  inputHandler = (event) => {
    //to svae value in state
    // console.log("event", event.target.value);
    this.setState({ stName: event.target.value });
  };
  onSubmit = () => {
    let dataCopy = [...this.state.data];

    dataCopy.push(this.state.stName);
    this.setState({ data: dataCopy, stName: "" });
  };

  render() {
    console.log("render called state data", this.state.data);
    //this.setState({ isOpen: true }); /// this will cause loop to change state.

    let { stName } = this.state;
    console.log("stName", stName);
    return (
      <div>
        <h1>Form</h1>
        <input
          name="stName"
          value={this.state.stName}
          type="text"
          onChange={this.inputHandler}
        />
        <button onClick={this.onSubmit}>Submit</button>

        <h3>{stName}</h3>

        {this.state.data.map((val, index) => {
          return <ShowName name={val} />;
          // return(
          //     <div>
          //         <h6>
          //             {val}
          //         </h6>
          //     </div>
          // )
        })}
      </div>
    );
  }
}
