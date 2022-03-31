import React from 'react';
import PropTypes from 'prop-types';

const AuthContext = React.createContext({});

function AuthProvider(props) {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = React.useState(0);
  const value = React.useMemo(() => ({ isLoggedIn, setIsLoggedIn }));
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function AuthConsumer(props) {
  const { children } = props;
  return <AuthContext.Consumer>{context => children(context)}</AuthContext.Consumer>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

AuthConsumer.propTypes = {
  children: PropTypes.func.isRequired,
};

export { AuthProvider, AuthConsumer };
