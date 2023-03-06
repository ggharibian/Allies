import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '599544277603-0c2eulbcoado0mput59it2hvbmabbque.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout (UCLA)"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
