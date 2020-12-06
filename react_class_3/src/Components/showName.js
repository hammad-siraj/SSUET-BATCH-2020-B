import React from "react";

export default function ShowName({ name }) {
  console.log("arr", name);
  return (
    <div>
      <h6>{name}</h6>
    </div>
  );
}
