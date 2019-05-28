/**
 *
 * GoogleLogin
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import messages from './messages';
import auth from '../../auth';

function Google({ email, name, picture, responseGoogle, logout }) {
  let GoogleUserData;

  if (auth.isAuthenticated()) {
    GoogleUserData = (
      <div
        style={{
          width: '400px',
          margin: 'auto',
          background: '#f4f4f4',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <img src={picture} alt={name} />
        <h2>Welcome {name}</h2>
        Email: {email}
        <div
          style={{
            marginTop: '20px',
          }}
        >
          <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
        </div>
      </div>
    );
  } else {
    GoogleUserData = (
      <GoogleLogin
        clientId="1093351017605-lg8mndridvk2ip6uoln4k3r4lv2cnm51.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    );
  }

  return <div>{GoogleUserData}</div>;
}

Google.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  responseGoogle: PropTypes.func.isRequired,
};

export default memo(Google);
