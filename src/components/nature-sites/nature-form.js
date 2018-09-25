import React from "react";

export class natureForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        //Title
        <label for="title">Title</label>
        <input type="text" name="title-input-box" placeholder="Wallace Park" />

        //Address
        <label for="address">Address</label>
        <p>Address Line</p>
        <input type="text" name="addressline-input-box" placeholder="1763 Quail Run Drive" />
        <p>City</p>
        <input type="text" name="city-input-box" placeholder="Atlanta" />
        <p>State</p>
        <select>
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
        <p>Zip code</p>
        <input type="text" name="zipcode-input-box" placeholder="30301" />

        //Description
        <label for="description">Description</label>
        <textarea name="description-text-area" placeholder="A recently renovated neighborhood park in the heart of Portland's Pearl District" />

        //Amenities
        <label for="amenities">Amenities</label>
        <div>
          <input type="checkbox" name="amenities1" value="Grill">Grill<br>
          <input type="checkbox" name="amenities2" value="Playground">Playground<br>
          <input type="checkbox" name="amenities3" value="Bathrooms" checked>Bathrooms<br>
        </div>

        //Special Instructions
        <label for="special-instructions">Special Instructions</label>
        <textarea name="special-instructions-text-area" placeholder="Clow Elementary School is 0.3 miles away and the school children are released at 3:30 PM, thus the park may get crowded at around that time." />
      </form>
    )
  }
}
