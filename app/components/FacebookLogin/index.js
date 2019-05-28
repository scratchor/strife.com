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
  return (
    <React.Fragment>
      <FacebookLogin
        appId="2683861234964156"
        fields="name,email,picture"
        redirectUri="http://localhost:80/"
        callback={responseFacebook}
      />
    </React.Fragment>
  );
}

Facebook.propTypes = {};

export default memo(Facebook);
