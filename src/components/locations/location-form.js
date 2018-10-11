import React from "react";
import { connect } from "react-redux";
import { createLocation, toggleRedirect } from "../../actions/location";
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';
import './styles/location-form.css';

class LocationForm extends React.Component {

  componentWillMount() {
    this.props.dispatch(toggleRedirect(false));
  }
  componentWillUnmount() {
    this.props.dispatch(toggleRedirect(false));
  }

  handleSubmit(e){
    e.preventDefault();
    const data = new FormData();
    data.append('title', this.title.value);
    data.append('address', this.addressLine.value);
    data.append('city', this.city.value);
    data.append('state', this.stateName.value);
    data.append('zipCode', this.zipCode.value);
    data.append('description', this.description.value);
    data.append('specialInstructions', this.specialInstructions.value);
    data.append('image', this.uploadImage.files[0]);
    this.props.dispatch(
      createLocation(data)
    );
  }

  render() {
    //if redirecting is true, we redirect to the location in state.
    if (this.props.locationState.redirecting) {
      return (
        <Redirect
          to={{
            pathname: "/location"
          }}
        />
      );
    }
    //else, we present the form.
    return (
      <div className="location-form-container">
        <div className="sticky"></div>
        <h1 className="main-header">Add A Location</h1>
        <div className="form-container">
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="title-desc-address">
              <label htmlFor="title">Enter A Title</label>
              <br/>
              <input
                type="text"
                name="title-input-box"
                placeholder="Wallace Park"
                ref={input => (this.title = input)}
              />
              <br/>
              <label htmlFor="description">Write A Description</label>
              <br/>
              <textarea
                rows="8"
                name="description-text-area"
                placeholder="A recently renovated neighborhood park in the heart of Portland's Pearl District"
                ref={input => (this.description = input)}
              />
              <br/>
              <label htmlFor="addressLine">Where is it?</label>
              <br/>
              <label htmlFor="addressLine">Address</label>
              <input
                type="text"
                id="addressLine"
                name="address-input-box"
                placeholder="1763 Quail Run Drive"
                ref={input => (this.addressLine = input)}
              />
              <br/>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city-input-box"
                placeholder="Atlanta"
                ref={input => (this.city = input)}
              />

              <label htmlFor="state">State</label>
              <select id="state" ref={input => (this.stateName = input)}>
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
              <label htmlFor="zipCode">Zip code</label>
              <input
                type="text"
                id="zipCode"
                ref={input => (this.zipCode = input)}
                name="zipCode-input-box"
                placeholder="30301"
              />
            </div>
            <div className="image-container">
              <label htmlFor="file">Upload A Photo</label>
              <div className="stock-photo"></div>
              <input
                type="file"
                id="file"
                ref={(ref) => { this.uploadImage = ref; }}
                name="file"
                placeholder="upload an image"
              />
            </div>
            <br/>
            <br/>
            <fieldset>
              <legend> Amenities</legend>
              <input
                type="checkbox"
                id="amenities1"
                name="amenities1"
                value="Grill"
                ref={input => (this.grill = input)}
              />
              <label htmlFor="amenities1">Grill</label>
              <input
                type="checkbox"
                id="amenities2"
                name="amenities2"
                value="Playground"
                ref={input => (this.playground = input)}
              />
              <label htmlFor="amenities2">Playground</label>
              <input
                type="checkbox"
                id="fruit3"
                name="fruit-3"
                value="Bathrooms"
                ref={input => (this.bathroom = input)}
              />
              <label htmlFor="fruit3">Bathrooms</label>
            </fieldset>
            <br/>
            <label htmlFor="special-instructions">Special Instructions</label>
            <textarea
              id="special-instructions"
              name="special-instructions-text-area"
              rows="4"
              placeholder="Clow Elementary School is 0.3 miles away and the school children are released at 3:30 PM, thus the park may get crowded at around that time."
              ref={input => (this.specialInstructions = input)}
            />
            <div className="add-location-button-container">
              <button
                type="submit"
                name="submit"
                className="add-location-submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="dashboard-button-container">
          <Link className="dashboard-button" to="/dashboard">Back to Dashboard</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});
export default connect(mapStateToProps)(LocationForm);
