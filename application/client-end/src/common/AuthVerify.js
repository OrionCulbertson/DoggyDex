import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  const dispatch = useDispatch();

  props.history.listen(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      const decodedJwt = parseJwt(user.token);
      // console.log("TEST",decodedJwt.exp);
      if (decodedJwt.exp * 1000 < Date.now()) {
        // console.log('THING');
        dispatch(props.logOut());
      }
    }
  });

  return <div></div>;
};

export default withRouter(AuthVerify);
