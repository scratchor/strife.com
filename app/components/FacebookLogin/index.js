/**
 *
 * FacebookLogin
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Facebook({ responseFacebook }) {
  const componentClicked = () => {
    console.log('clicked');
  };

  return (
    <div>
      <FacebookLogin
        appId="2683861234964156"
        fields="name,email,picture"
        onClick={componentClicked}
        redirectUri="http://localhost:80/"
        callback={responseFacebook}
      />
    </div>
  );
}

Facebook.propTypes = {};

export default memo(Facebook);
