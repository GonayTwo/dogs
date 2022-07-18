import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext);

  return login ? props.children : <Navigate to='/login' />;
};

export default ProtectedRoute;
