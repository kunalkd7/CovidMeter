import React, { Component } from 'react'
import { Table, Form } from 'react-bootstrap';

export default class Countriescomp extends Component {

    state = {
        inputvalue: ''
    }
    onchange = (e) => {
        this.setState({ inputvalue: e.target.value })
    }

    render() {
        const { countriesdata } = this.props;
        // console.log(countriesdata)
        console.log(this.state.inputvalue)
        return (
            <>
                <Form.Control type="text" placeholder="search by country"  onChange={this.onchange} />
                <Table responsive striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>New Cases</th>
                            <th>Total Cases</th>
                            <th>Total Recovered</th>
                            <th>Total Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countriesdata
                            .filter((country) => {
                                if (this.state.inputvalue === '') {
                                    return country
                                }else if (country.Country.toLowerCase().includes(this.state.inputvalue.toLowerCase())) {
                                    return country
                                }
                                return null;
                            })
                            .map((country, key) => (
                                <tr key={country.Country}>
                                    <td>{country.Country}</td>
                                    <td style={{color:"#Db1627"}}>+{country.NewConfirmed}</td>
                                    <td style ={{backgroundColor : "#e2e3e5"}}>{country.TotalConfirmed}</td>
                                    <td style ={{backgroundColor : "#d4edda"}}>{country.TotalRecovered}</td>
                                    <td style ={{backgroundColor : "#f8d7da"}}>{country.TotalDeaths}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </>
        )
    }
}
