import React, { Component } from 'react'
import axios from 'axios'
import Globaldatacomp from './globaldatacomp'
import Countriescomp from './countriescomp'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Container, Row, Col } from 'react-bootstrap';

export default class App extends Component {

  state = {
    global: [],
    countries: [],
    loading: true,
  }

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary")
      .then((res) => {
        console.log(res)

        this.setState({
          global: res.data.Global,
          countries: res.data.Countries,
          loading: false
        })
      })
      .catch((error) => { console.log(error) })
  }

  render() {
    if (this.state.loading) {
      return <>
        <div className="App">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="primary" />
        </div>
      </>
    }
    else {
      return (
        <>
          <Container>
            <Row >
              <img src={process.env.PUBLIC_URL + '/icon-covid.png'} className="logo" alt="Covidmeter" />
              <p className="logotext">Covid<span className="spancss">M</span>eter</p>
            </Row>

            <Row  >
              <Col  xs lg="3" >
                <Globaldatacomp globaldata={this.state.global} />
              </Col>

              <Col md="auto">
                <Countriescomp countriesdata={this.state.countries} />
              </Col>
            </Row>
          </Container>
        </>
      )
    }
  }
}
