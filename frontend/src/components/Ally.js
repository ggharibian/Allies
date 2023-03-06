import Logout from "./Logout.js"

import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DateTimePicker from 'react-datetime-picker';
import Picker from './Picker.js'
import ListGroup from 'react-bootstrap/ListGroup';


function Ally() {
    const [endTime, changeEnd] = useState(new Date());
    const [startTime, changeStart] = useState(new Date());

    return (
      <div className="home">
        <h2 className="home-title">Your allies await...</h2>
        <br />
        <Card className="titleCard2">
          <Card.Body className="bodyCard2">
          
          </Card.Body>
        </Card>
        <br />
        <Logout>
        </Logout>
      </div>
    );
  }
  
  export default Ally;