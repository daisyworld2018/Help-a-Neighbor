import React from 'react';
import $ from 'jquery';
//import Map from './Map.jsx'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchHelpers: [],
      searchSeekers: []
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.renderTable1Data = this.renderTable1Data.bind(this);
    this.renderTable1Header = this.renderTable1Header.bind(this);
    this.renderTable2Data = this.renderTable2Data.bind(this);
    this.renderTable2Header = this.renderTable2Header.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:8080/helpers',
      success: (data) => {
        this.setState({
          searchHelpers: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    $.ajax({
      url: 'http://localhost:8080/seekers',
      success: (data) => {
        this.setState({
          searchSeekers: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  onSubmit() {
    let zip = document.getElementById("searchZip").value;
    $.ajax({
      method: "POST",
      url: 'http://localhost:8080/helpers',
      data: { zip },
      success: (data) => {
        this.setState({
          searchHelpers: data
        })
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    $.ajax({
      method: "POST",
      url: 'http://localhost:8080/seekers',
      data: { zip },
      success: (data) => {
        this.setState({
          searchSeekers: data
        })
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  renderTable1Data() {
    return this.state.searchHelpers.map((item, index) => {
       const { id, username, location_city, location_state, zip_code, contact_info, i_can, notes } = item
       return (
          <tr key={id}>
             <td>{username}</td>
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
    return this.state.searchSeekers.map((item, index) => {
       const { id, username, location_city, location_state, zip_code, contact_info, i_need, notes } = item
       return (
          <tr key={id}>
             <td>{username}</td>
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
      <div>
        <div className="search-container">
          <form onSubmit={this.onSubmit} >
            <input type="text" placeholder="e.g. 94403" id="searchZip"></input>
            <button type="submit">Search</button>
          </form>
        </div >
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
//        <Map />