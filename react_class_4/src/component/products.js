import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function Products(props) {
  //   console.log(name, price, image, stock);
  console.log("props", props);

  let { name, price, image, stock } = props.hammad;
  return (
    <div>
      <Card>
        <CardImg
          style={{ height: 100, width: 100 }}
          top
          //   width="30%"
          //   height="20%"
          src={image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {price}
          </CardSubtitle>
          <CardText>ghanrana ni ha !</CardText>
          <Button onClick={() => props.deleteProduct(props.index)}>
            Delete
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
