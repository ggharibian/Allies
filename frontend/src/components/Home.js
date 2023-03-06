import Logout from "./Logout.js"
import "./Home.css";

import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DateTimePicker from 'react-datetime-picker';
import Picker from './Picker.js'


function Home() {
    const [endTime, changeEnd] = useState(new Date());
    const [startTime, changeStart] = useState(new Date());

    return (
      <div className="home">
        <h2 className="home-title">Welcome, my dear sojourner.</h2>
        <br />
        <Card className="titleCard2">
          <Card.Header className="headerCard2">
                Time of Departure 
                <Col sm={8} class = "no-gutters-col"> <DateTimePicker onChange={changeStart} value={startTime} /> </Col> 
                <br/>
          </Card.Header>
         
          <Card.Body className="bodyCard2">
            <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="please enter your insta (ex. uclahack)"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your info without your consent.</small>
            </div>
            <br>
            </br>
            {Picker()}
            <br>
            </br>
            {Picker()}
          </Card.Body>
        </Card>
        <br />
        <Logout>
        </Logout>
      </div>
    );
  }
  
  export default Home;