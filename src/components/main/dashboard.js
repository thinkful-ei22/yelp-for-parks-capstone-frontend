import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

class Dashboard extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="dashboard">
        <h2>dashboard</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(Dashboard);