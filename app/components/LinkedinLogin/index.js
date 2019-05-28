/**
 *
 * LinkedinLogin
 *
 */

import React, { memo } from 'react';

// import PropTypes from 'prop-types';
// import styled from 'styled-components'
import axios from 'axios';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';

function LinkedinLogin() {
  const responseLinkedin = () => {
    location.replace(
      'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77ejgl2sw2nzan&redirect_uri=http://localhost:80/login&state=vlad&scope=r_liteprofile%20r_emailaddress%20w_member_social',
    );
    axios
      .post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div>
      <button type="button" onClick={responseLinkedin}>
        Log In With LinkedIn
      </button>
    </div>
  );
}

LinkedinLogin.propTypes = {
  responseLinkedin: PropTypes.func.isRequired,
};

export default memo(LinkedinLogin);
