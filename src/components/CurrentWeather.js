import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './currentWeather.css'

const CurrentWeather = (props) => {

  const [weather, setWeather] = useState();

  var date = new Date();

  console.log(props.lat);
  console.log(props.long);
    
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
                        now {
                            temperature
                            humidity
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
    <Container fluid style={{marginTop: 5, backgroundColor: '#2d75df', paddingBottom: 20}}>
      <Row className="justify-content-sm-center">
        <Col sm="auto"><h1 style={{fontSize: "3rem"}}>Precise Weather Updates</h1></Col>
      </Row>
    <Container fluid>
      <div className="bg d-flex justify-content-center align-items-center">
        {weather?<>
          <h2>{weather.data.weatherByPoint.now.temperature}° C</h2>
          <p>Humidity {weather.data.weatherByPoint.now.humidity}%</p>
          </>
          :
          <h2>Fetching Data</h2> 
      }
        <div>
          <h4>{date.getDate()}, Nov, 2022</h4>
        </div>
      </div>
    </Container>
    </Container>
  )
}

export default CurrentWeather;