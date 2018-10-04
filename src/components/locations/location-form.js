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
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title-input-box"
            placeholder="Wallace Park"
            ref={input => (this.title = input)}
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description-text-area"
            placeholder="A recently renovated neighborhood park in the heart of Portland's Pearl District"
            ref={input => (this.description = input)}
          />
          <label htmlFor="addressLine">Address Line</label>
          <input
            type="text"
            id="addressLine"
            name="address-input-box"
            placeholder="1763 Quail Run Drive"
            ref={input => (this.addressLine = input)}
          />
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
          <label htmlFor="file">Zip code</label>
          <input
            type="file"
            id="file"
            ref={(ref) => { this.uploadImage = ref; }}
            name="file"
            placeholder="upload an image"
          />

          <div>
            <fieldset>
              <legend> Amenities</legend>
              <label htmlFor="amenities1">Grill</label>
              <input
                type="checkbox"
                name="amenities1"
                value="Grill"
                id="amenities1"
                ref={input => (this.grill = input)}
              />
              <br />
              <label htmlFor="amenities2">Playground</label>
              <input
                type="checkbox"
                name="amenities2"
                value="Playground"
                id="amenities2"
                ref={input => (this.playground = input)}
              />
              <br />
              <label htmlFor="amenities2">Bathrooms</label>
              <input
                type="checkbox"
                name="amenities3"
                value="Bathrooms"
                id="amenities3"
                ref={input => (this.bathroom = input)}
                defaultChecked
              />
              <br />
            </fieldset>
          </div>

          <label htmlFor="special-instructions">Special Instructions</label>
          <textarea
            name="special-instructions-text-area"
            placeholder="Clow Elementary School is 0.3 miles away and the school children are released at 3:30 PM, thus the park may get crowded at around that time."
            ref={input => (this.specialInstructions = input)}
          />

          <button
            type="button"
            name="submit"
            
            onClick={e => {
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
            }}
          >
            Submit
          </button>
        </form>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});
export default connect(mapStateToProps)(LocationForm);
