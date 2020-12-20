import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import Cart from "./cart";

function App() {
  // const state = useState("Arbaz");
  const [cart, setCart] = useState(0);

  //to manage state =useState
  // console.log("state.name", state);
  return (
    <div>
      {/* <Button
        onClick={() => {
          if (cart == 1) {
            setCart(0);
          } else {
            setCart(1);
          }
        }}
        color="secondary"
      >
        one
      </Button> */}
      {/* <Button
        onClick={() => {
          setCart(cart + 1);
        }}
        color="secondary"
      >
        two
      </Button>
      <Button
        onClick={() => {
          setCart(cart + 1);
        }}
        color="secondary"
      >
        three
      </Button> */}
      <Cart setCart={setCart} cart={cart} name="Arbaz" />
    </div>
    // <Form>
    //   <FormGroup>
    //     <Label for="exampleEmail">Email</Label>
    //     <Input
    //       type="email"
    //       name="email"
    //       id="exampleEmail"
    //       placeholder="with a placeholder"
    //     />
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for="examplePassword">Password</Label>
    //     <Input
    //       type="password"
    //       name="password"
    //       id="examplePassword"
    //       placeholder="password placeholder"
    //     />
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for="exampleSelect">Select</Label>
    //     <Input type="select" name="select" id="exampleSelect">
    //       <option>1</option>
    //       <option>2</option>
    //       <option>3</option>
    //       <option>4</option>
    //       <option>5</option>
    //     </Input>
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for="exampleSelectMulti">Select Multiple</Label>
    //     <Input
    //       type="select"
    //       name="selectMulti"
    //       id="exampleSelectMulti"
    //       multiple
    //     >
    //       <option>1</option>
    //       <option>2</option>
    //       <option>3</option>
    //       <option>4</option>
    //       <option>5</option>
    //     </Input>
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for="exampleText">Text Area</Label>
    //     <Input type="textarea" name="text" id="exampleText" />
    //   </FormGroup>
    //   <FormGroup>
    //     <Label for="exampleFile">File</Label>
    //     <Input type="file" name="file" id="exampleFile" />
    //     <FormText color="muted">
    //       This is some placeholder block-level help text for the above input.
    //       It's a bit lighter and easily wraps to a new line.
    //     </FormText>
    //   </FormGroup>
    //   <FormGroup tag="fieldset">
    //     <legend>Radio Buttons</legend>
    //     <FormGroup check>
    //       <Label check>
    //         <Input type="radio" name="radio1" /> Option one is this and that—be
    //         sure to include why it's great
    //       </Label>
    //     </FormGroup>
    //     <FormGroup check>
    //       <Label check>
    //         <Input type="radio" name="radio1" /> Option two can be something
    //         else and selecting it will deselect option one
    //       </Label>
    //     </FormGroup>
    //     <FormGroup check disabled>
    //       <Label check>
    //         <Input type="radio" name="radio1" disabled /> Option three is
    //         disabled
    //       </Label>
    //     </FormGroup>
    //   </FormGroup>
    //   <FormGroup check>
    //     <Label check>
    //       <Input type="checkbox" /> Check me out
    //     </Label>
    //   </FormGroup>
    //   <Button>Submit</Button>
    // </Form>
  );
}

export default App;
