import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function DayWeather() {
  const [open, setOpen] = useState(false);

  const [weather, setWeather] = useState();

  const getWeather = async () => {
    const promise = {
        method: 'POST',
        url: 'https://api.meteum.ai/graphql/query',
        headers: {
        "X-Meteum-API-Key": "ec031972-4c53-45f9-9885-2f6aa3525cd7",
        "Content-Type": "application/json"
        },
        data: {
            query: `{
              weatherByPoint(request: { lat: 24.93404972248921, lon: 67.11219859094551 }) {
                forecast {
                  days(limit: 2) {
                    time
                    sunrise
                    sunset
                    parts {
                      morning {
                        avgTemperature
                      }
                      day {
                        avgTemperature
                      }
                      evening {
                        avgTemperature
                      }
                      night {
                        avgTemperature
                      }
                    }
                  }
                }
              }
            }`
        }
    };

    await axios.request(promise)
        .then(res => {
            console.log(res.data);
            setWeather(res.data);
        })
        .catch(err => {
            console.log(err)
        })
}

useEffect(() => {
    getWeather();
}, [])



  return (
    <Container fluid style={{marginBottom: 5, paddingTop: 20, paddingBottom: 20,backgroundColor: '#2d75df'}}>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{marginBottom: '20px', backgroundColor: '#a57d06'}}
      >
        More info. about today's weather
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
            <Row xs={1} md={2} className="g-4">
                
                <Col>
                    <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/breathtaking-sunset-colorful-sky-desert-tsavo-west-kenya-kilimanjaro_181624-6794.jpg" height={250}/>
                    <Card.Body>
                        <Card.Title>Morning</Card.Title>
                        <Card.Text>
                            {weather ? <p>Average Temperature : {weather.data.weatherByPoint.forecast.days[0].parts.morning.avgTemperature}° C</p>: <p>Fetching</p>}
                        </Card.Text>
                        <Card.Text>
                        {weather ? <p>Sunrise At : {weather.data.weatherByPoint.forecast.days[0].sunrise} AM</p>: <p>Fetching</p>}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                    <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-psd/natural-light-lens-flare-psd-gold-background-sun-ray-effect_53876-140441.jpg" height={250}/>
                    <Card.Body>
                        <Card.Title>Day</Card.Title>
                        <Card.Text>
                        {weather ? <p>Average Temperature : {weather.data.weatherByPoint.forecast.days[0].parts.day.avgTemperature}° C</p>: <p>Fetching</p>}
                        </Card.Text>
                        <Card.Text>
                          <p>No Info</p>
                        </Card.Text>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                    <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/landscape-sky-dusk-beauty-beach_1203-6292.jpg" height={250}/>
                    <Card.Body>
                        <Card.Title>Evening</Card.Title>
                        <Card.Text>
                            {weather ? <p>Average Temperature : {weather.data.weatherByPoint.forecast.days[0].parts.evening.avgTemperature}° C</p>: <p>Fetching</p>}
                        </Card.Text>
                        <Card.Text>
                        {weather ? <p>Sunset At : {weather.data.weatherByPoint.forecast.days[0].sunset} PM</p>: <p>Fetching</p>}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                    <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-vector/falling-stars-beautiful-night-background_23-2148273840.jpg" height={250}/>
                    <Card.Body>
                        <Card.Title>Night</Card.Title>
                        <Card.Text>
                            {weather ? <p>Average Temperature : {weather.data.weatherByPoint.forecast.days[0].parts.night.avgTemperature}° C</p>: <p>Fetching</p>}
                        </Card.Text>
                        <Card.Text>
                          <p>No Info</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
      </Collapse>
    </Container>
  );
}

export default DayWeather;