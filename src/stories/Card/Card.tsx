import React from 'react';
import { CardCont } from "../../styles/CardStyle";
import { Row, Col } from "../../styles/Grids"; 

export interface CardProps {
  image: string;
  title: string;
  description: string;
  categoryName: string;
  timeAmount: string;
  effortName: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  categoryName,
  timeAmount,
  effortName
}): JSX.Element => (
  <>
    <CardCont>
      <Row justifyContent="flex-start" alignItems="center">
        <Col>{image}</Col>
        <Col>
          <Row justifyContent="flex-start" alignItems="flex-start">
            <Col>{title}</Col>
          </Row>
          <Row justifyContent="flex-start" alignItems="flex-start">
            <Col>{description}</Col>
          </Row>
          <Row justifyContent="flex-start" alignItems="flex-start">
            <Col>Cagetory</Col>
            <Col>Time</Col>
            <Col>Effort</Col>
          </Row>
          <Row justifyContent="flex-start" alignItems="flex-start">
            <Col>{categoryName}</Col>
            <Col>{timeAmount}</Col>
            <Col>{effortName}</Col>
          </Row>
        </Col>
      </Row>
    </CardCont>
  </>
);