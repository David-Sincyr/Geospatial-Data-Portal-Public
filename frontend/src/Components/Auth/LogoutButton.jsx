/* Imports for React and other content. */
import './Auth.css';
import Button from '../Button/Button';
import { AuthConsumer } from './AuthContext';

/* Returns a logout button that queries the logout API endpoint. */
function LogoutButton() {
  const logout = async updateState => {
    let response = null;
    const token = localStorage.getItem('access');
    response = await fetch('http://127.0.0.1:8000/api/logout/', {
      method: 'POST',
      headers: { Accept: 'application/json', Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    });

    // This checks the reponse, logging out user if API call is successful
    if (response.status === 205) {
      console.log('Logout confirmed with server');
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    } else {
      console.log('Logout UNCONFIRMED with server.');
    }
    updateState(0);
    return response;
  };

  return (
    <AuthConsumer>
      {({ setIsLoggedIn }) => <Button link='/' name='Logout' handleClick={() => logout(setIsLoggedIn)} />}
    </AuthConsumer>
  );
}

export default LogoutButton;
