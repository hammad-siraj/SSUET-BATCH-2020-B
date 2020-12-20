import React, { useState } from "react";
import Products from "../component/products";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
export default function ProductPage() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [stock, setstock] = useState("");

  const [myProducts, setmyProducts] = React.useState([
    {
      name: "smarter way to learn javascreipt",
      stock: 20,
      price: 400,
      image: "book1.jpeg",
    },
    {
      name: "Angular book",
      stock: 20,
      price: 400,
      image: "book1.jpeg",
    },
    {
      name: "Vue book",
      stock: 20,
      price: 400,
      image: "book1.jpeg",
    },
  ]);

  const addProduct = (e) => {
    e.preventDefault();
    setmyProducts([...myProducts, { name, price, stock, image: "book1.jpeg" }]);
  };

  const deleteProduct = (index) => {
    console.log(index);
    let products = [...myProducts];

    products.splice(index, 1);
    setmyProducts(products);
  };

  return (
    <div>
      <Form onSubmit={addProduct}>
        <FormGroup>
          <Label for="exampleEmail">name</Label>
          <Input
            type="name"
            name="name"
            onChange={(val) => setname(val.target.value)}
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Price</Label>
          <Input
            type="price"
            onChange={(val) => setprice(val.target.value)}
            name="price"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Stock</Label>
          <Input
            type="stock"
            name="stock"
            onChange={(val) => setstock(val.target.value)}
            id="examplestock"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <Button type="submit" color="secondary">
          Add
        </Button>
      </Form>
      {myProducts.map((val, index) => {
        return (
          <Products index={index} deleteProduct={deleteProduct} hammad={val} />
        );
      })}
    </div>
  );
}
