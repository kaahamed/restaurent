import React from "react";
import { Card, CardImg, CardBody, CardText } from 'reactstrap'
const DishDetail =({dishItem})=>{
    return(
        <div>
            <Card style={{margin:"10px"}}>
                <CardImg top src={dishItem.image} alt={dishItem.name}></CardImg>
                <CardBody>
                <CardText style={{textAlign:"center"}}>{dishItem.description}</CardText>
                <CardText>Price: {dishItem.price} BDT</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail