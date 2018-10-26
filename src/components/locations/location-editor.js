import React from "react";
import { connect } from "react-redux";
import { toggleRedirect, updateLocation } from "../../actions/location";
import './styles/location-editor.css';

class LocationEditor extends React.Component {
  componentWillMount() {
    this.props.dispatch(toggleRedirect(false));
  }

  render() {
    return (
      <section className="location-edit-main">
        <h1 className="edit-header">Edit Location</h1>
        <div className="location-form-container-edit">
          <form>
            <label htmlFor="title">Edit Title</label>
            <input
              type="text"
              name="title-input-box"
              placeholder="Wallace Park"
              ref={input => (this.title = input)}
              defaultValue={this.props.locationState.currentLocation.title}
            />

            <label htmlFor="description">Edit Description</label>
            <textarea
              name="description-text-area"
              id="description-edit"
              placeholder="A recently renovated neighborhood park in the heart of Portland's Pearl District"
              ref={input => (this.description = input)}
              defaultValue={this.props.locationState.currentLocation.description}
            />
            <label htmlFor="addressLine">Edit Address</label><br/>
            <input
              type="text"
              id="addressLine"
              name="address-input-box"
              placeholder="1763 Quail Run Drive"
              ref={input => (this.addressLine = input)}
              defaultValue={this.props.locationState.currentLocation.address}
            /><br/>
            <label className="city-label-edit" htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city-input-box"
              placeholder="Atlanta"
              ref={input => (this.city = input)}
              defaultValue={this.props.locationState.currentLocation.city}
            />

            <label className="state-label-edit" htmlFor="state">State</label>
            <select
              id="state"
              ref={input => (this.stateName = input)}
              defaultValue={this.props.locationState.currentLocation.state}
            >
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
            <label className="zipcode-label-edit" htmlFor="zipCode">Zip code</label>
            <input
              type="text"
              id="zipCode"
              ref={input => (this.zipCode = input)}
              name="zipCode-input-box"
              placeholder="30301"
              defaultValue={this.props.locationState.currentLocation.zipCode}
            />

            <div>
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
            </div>

            <label htmlFor="special-instructions">Edit Special Instructions</label>
            <textarea
              id="special-instructions-edit"
              name="special-instructions-text-area"
              placeholder="Clow Elementary School is 0.3 miles away and the school children are released at 3:30 PM, thus the park may get crowded at around that time."
              ref={input => (this.specialInstructions = input)}
            />

            <button
              type="button"
              name="submit"
              className="location-edit-submit"
              onClick={e => {
                e.preventDefault();
                this.props.dispatch(
                  updateLocation(this.props.locationState.currentLocation.id, {
                    title: this.title.value,
                    address: this.addressLine.value,
                    city: this.city.value,
                    state: this.stateName.value,
                    zipCode: this.zipCode.value,
                    description: this.description.value,
                    specialInstructions: this.specialInstructions.value
                    // amenities:
                  })
                );
                this.props.stopEditing();
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});
export default connect(mapStateToProps)(LocationEditor);
