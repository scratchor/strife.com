/**
 *
 * Login
 *
 */

import React, { Component, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Google from '../../components/Google-Login/index';
import VkLogin from '../../components/VkLogin/index';
import FacebookLogin from '../../components/FacebookLogin/index';
import auth from '../../auth';
import { logintAction } from './actions';
import { logoutAction } from './actions';

export function Login({ login, history, OnlogintAction, OnlogoutAction }) {
  const responseGoogle = response => {
    console.log(response);

    OnlogintAction(
      response.userID,
      response.profileObj.name,
      response.profileObj.email,
      response.profileObj.imageUrl,
    );
    auth.login(() => {
      history.push(
        `${
          history.location.state
            ? history.location.state.from.pathname
            : history.location.pathname
        }`,
      );
    });
  };

  const responseVk = response => {
    console.log(response);
  };

  const responseFacebook = response => {
    console.log(response);
    history.push('/');
  };

  const logout = () => {
    OnlogoutAction('', '', '', '');
    auth.logout(() => {
      history.push('/');
    });
  };

  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  console.log(login);
  console.log(arguments);

  const { name, email, picture } = login;

  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <Google
        responseGoogle={responseGoogle}
        logout={logout}
        name={name}
        email={email}
        picture={picture}
      />
      <VkLogin responseVk={responseVk} history={history} />
      <FacebookLogin responseFacebook={responseFacebook} />
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  OnlogintAction: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    OnlogintAction: (userID, name, email, picture) =>
      dispatch(logintAction(userID, name, email, picture)),
    OnlogoutAction: (userID, name, email, picture) =>
      dispatch(logoutAction(userID, name, email, picture)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Login);
