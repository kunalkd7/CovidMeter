import React, { Component } from 'react'
import { Alert } from 'react-bootstrap';


export default class Globaldatacomp extends Component {
    render() {
        console.log(this.props.globaldata)
        const { globaldata } = this.props
        return (
            <>
                <div>
                    <Alert variant="light" className="align">
                        COVID-19 CORONAVIRUS PANDEMIC <br />
                    last updated : {new Date(globaldata.Date).toDateString()}
                    </Alert>
                </div>


                <div>
                    <Alert variant="secondary" className="align">
                        <h3> Total Cases:</h3>
                        <h3>{globaldata.TotalConfirmed}</h3>
                    </Alert>
                </div>

                <div>
                    <Alert variant="success" className="align">
                        <h3> Total Recovered:</h3>
                        <h3>{globaldata.TotalRecovered}</h3>
                    </Alert>
                </div>

                <div>
                    <Alert variant="danger" className="align">
                        <h3> Total Deaths:</h3>
                        <h3>{globaldata.TotalDeaths}</h3>
                    </Alert>
                </div>
            </>
        )
    }
}
