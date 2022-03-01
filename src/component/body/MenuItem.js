import React from 'react'
import { Card, CardImg, CardImgOverlay,CardBody, CardTitle } from 'reactstrap'

export default function MenuItem({dishNew,selectedDish}) {
    const DishSelect =()=>{
        selectedDish(dishNew)
    }
  return (
    <Card style={{margin:"10px"}}>
        <CardBody>
            <CardImg width="100%" alt={dishNew.name} src={dishNew.image} style={{opacity:"0.5"}}></CardImg>
            <CardImgOverlay>
                <CardTitle onClick={DishSelect} style={{cursor:"pointer", textAlign:"center"}}>{dishNew.name}</CardTitle>
            </CardImgOverlay>
        </CardBody>
    </Card>
  )
}

