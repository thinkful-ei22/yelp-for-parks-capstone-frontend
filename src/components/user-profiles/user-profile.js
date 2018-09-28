import React from "react";

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        //There will be Edit User Profile
        //Once they register - we will automatically create
        //a user profile for them
        //But it will only have username/profile

        //Default userProfile - will be a GET request
        //to get firstName, lastName, username but NOT password

        //When we load the individual userProfile page
        //We dispatch a fetch request that will send the request
        //to the get endpoint to the back end to retrieve
        //those 4 piece of information

      </div>
    );
  }
}

export default UserProfile;
