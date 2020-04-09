import React from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <h1>SignUpPage</h1>
    <FirebaseContext.Consumer>
      {firebase => (console.log(firebase))}
    </FirebaseContext.Consumer>
  </div>
);
export default SignUpPage;