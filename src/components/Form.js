import React, { Component } from 'react';
import DataList from './DataList';

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();

    let city = document.getElementsByName('city')[0].value;

    let country = document.getElementById('mycountries').value;
    let key = this.props.countryList.filter((option, index) => {
      return option.value === country[0].toUpperCase() + country.substr(1);
    });
    console.log(key, country);

    if (key.length > 0) {
      console.log('hi');

      this.props.onSubmit(city, key[0].countryCode, undefined);
    } else {
      this.props.onSubmit(city, undefined, '!Error: check country name again');
    }
  };

  componentDidMount() {
    console.log('Form componentDidMount');
  }

  render() {
    console.log('Form render');
    return (
      <section className="form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <span className="required-style">* </span>
            <input
              aria-label="Search by city name"
              aria-required="true"
              placeholder="Start typing city"
              className="form-text"
              type="text"
              name="city"
              required
            />
          </div>
          <DataList countryList={this.props.countryList} />
          <button className="sub-btn" type="submit">
            Get Weather
          </button>
        </form>
      </section>
    );
  }
}

export default Form;
