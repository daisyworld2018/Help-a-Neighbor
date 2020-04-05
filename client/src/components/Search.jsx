import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItems: []
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.renderTable1Data = this.renderTable1Data.bind(this);
    this.renderTable1Header = this.renderTable1Header.bind(this);
    this.renderTable2Data = this.renderTable2Data.bind(this);
    this.renderTable2Header = this.renderTable2Header.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          searchItems: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  onSubmit() {
    let city = document.getElementById("searchCity").value;
    let state = document.getElementById("searchState").value;
    console.log(city, state)
    $.ajax({
      method: "POST",
      url: '/helpers',
      data: { city, state },
      success: (data) => {
        this.setState({
          searchItems: data
        })
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    $.ajax({
      method: "POST",
      url: '/helpers',
      data: { city, state },
      success: (data) => {
        this.setState({
          searchItems: data
        })
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  renderTable1Data() {
    return this.state.searchItems.map((item, index) => {
       const { id, name, location_city, location_state, zip_code, contact_info, i_can, notes } = item
       return (
          <tr key={id}>
             <td>{name}</td>
             <td>{location_city}</td>
             <td>{location_state}</td>
             <td>{zip_code}</td>
             <td>{contact_info}</td>
             <td>{i_can}</td>
             <td>{notes}</td>
          </tr>
       )
    })
  }

  renderTable2Data() {
    return this.state.searchItems.map((item, index) => {
       const { id, name, location_city, location_state, zip_code, contact_info, i_need, notes } = item
       return (
          <tr key={id}>
             <td>{name}</td>
             <td>{location_city}</td>
             <td>{location_state}</td>
             <td>{zip_code}</td>
             <td>{contact_info}</td>
             <td>{i_need}</td>
             <td>{notes}</td>
          </tr>
       )
    })
  }

  renderTable1Header() {
    let header = ['Name', 'City', 'State', 'Zip Code','Contact Info', 'I Can', 'Notes']
    return header.map((key, index) => {
      return <th key={index}>{key}</th>
    })
  }

  renderTable2Header() {
    let header = ['Name', 'City', 'State', 'Zip Code','Contact Info', 'I Need', 'Notes']
    return header.map((key, index) => {
      return <th key={index}>{key}</th>
    })
  }

  render () {
    return (
      <div className="search-container">
        <form onSubmit={this.onSubmit} >
          <input type="text" placeholder="e.g. San Francisco" id="searchCity"></input>
          <input type="text" placeholder="e.g. CA" id="searchState"></input>
          <input type="text" placeholder="e.g. 94403" id="searchZipCode"></input>
          <button type="submit">Search</button>
        </form>
        <div>Helpers:
          <table id='helpers'>
            <tbody>
              <tr>{this.renderTable1Header()}</tr>
              {this.renderTable1Data()}
            </tbody>
          </table>
        </div>
        <div>Seekers:
          <table id='seekers'>
            <tbody>
              <tr>{this.renderTable2Header()}</tr>
              {this.renderTable2Data()}
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}
export default Search;
