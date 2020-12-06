import React from "react";

export default function ChildComponent({ name, arr, cart }) {
  console.log("props", name, arr, cart);
  return (
    <div>
      <h3>I am a child component</h3>
      <p>
        data send from parent {name} {cart}{" "}
      </p>
    </div>
  );
}
