import React from "react";
import { connect } from "react-redux";

import LocationNode from "./form-bits/location-node-editor";

class LocationEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingTitle: false,
      editingDescription: false,
      editingAddress: false,
      editingCity: false,
      editingState: false,
      editingZipCode: false
    };
  }

  editStateToggler(obj) {
    this.setState(obj);
    console.log(this.state.editingTitle);
  }

  render() {
    return (
      <div>
        <h1>Edit your Location</h1>
        <button className="logout-button" type="button">
          Log out
        </button>

        <LocationNode
          fieldName="Title"
          fieldData={this.props.locationState.currentLocation.title}
          editing={this.state.editingTitle}
          onClick={() => {
            console.log("button clicked");
            this.setState({ editingTitle: true });
            // this.editStateToggler({ editingTitle: !this.state.editingTitle });
          }}
        />

        <label htmlFor="edit-location-description">Edit your Description</label>
        <textarea id="edit-location-description" rows="3" columns="33" />

        <label htmlFor="edit-location-address">Edit your Street Address</label>
        <input id="edit-location-address" type="text" />

        <label htmlFor="edit-location-city">Edit your City</label>
        <input id="edit-location-city" type="text" />

        <label htmlFor="edit-location-state">Edit your State</label>
        <select id="edit-location-state">
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>

        <label htmlFor="edit-location-zipcode">Edit your Zip Code</label>
        <input id="edit-location-zipcode" type="text" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});
export default connect(mapStateToProps)(LocationEditor);
