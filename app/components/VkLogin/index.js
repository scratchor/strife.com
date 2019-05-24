/**
 *
 * VkLogin
 *
 */

import React, { memo } from 'react';
import VK, { Auth } from 'react-vk';
import { OauthSender } from 'react-oauth-flow';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import $ from 'jquery';
import messages from './messages';

function Vk({ responseVk, history }) {
  const get = () => {
    // eslint-disable-next-line no-restricted-globals
    location.replace(
      'https://oauth.vk.com/authorize?client_id=6994645&redirect_uri=http://localhost:80/login&display=page&scope=email&response_type=token&v=5.95&revoke=1',
    );
  };
  const getUserInfo = () => {
    $.ajax({
      url:
        'https://api.vk.com/method/users.get?v=5.95&access_token=f20d5b9cb2606993cf3f8fb546c8c91e0238926ebbe185f5bb840e8891054194442e89ba7e6b8b8085a7d&fields=photo_200_orig',
      method: 'GET',
      dataType: 'JSONP', // type of response data
      success(data) {
        // success callback function
        console.log(data);
      },
    });
  };

  return (
    <div>
      <VK apiId={6994645}>
        <Auth
          options={{
            width: '200px',
            onAuth: responseVk,
          }}
        />
      </VK>
      {/*            <OauthSender
        authorizeUrl="https://oauth.vk.com/authorize"
        clientId={6994645}
        redirectUri="http://localhost:80/login"
        display="popup"
        response_type="token"
        v="5.95"
        scope="profile email"
        render={({ url }) => <a href={url}>Connect to vk</a>}
      />*/}
      <button onClick={get}>get</button>
      <button onClick={getUserInfo}>getUserInfo</button>
    </div>
  );
}

Vk.propTypes = {};

export default memo(Vk);
