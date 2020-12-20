import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function Cart({ cart, setCart }) {
  const [email, setEmail] = useState("");

  return (
    <div>
      Cart: {cart}
      <Input
        type="email"
        name="email"
        onChange={(value) => setEmail(value.target.value)}
        id="exampleEmail"
        placeholder="with a placeholder"
      />
      <Button
        onClick={() => {
          setCart(email);
          //   if (cart == 1) {
          //     setCart(0);
          //   } else {
          //     setCart(1);
          //   }
        }}
        color="secondary"
      >
        one
      </Button>
    </div>
  );
}

// class Abc extends React.Component{
// constructor(){
//     super();
//     this.state={}
// }
// render(){
//     return(

//     )
// }
// }
