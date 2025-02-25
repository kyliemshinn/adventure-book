import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    //setTimeout(function() {
    localStorage.setItem('id_token', idToken);
    //window.location.assign('/explore'); // Incompatible with React Router
    //}, 3000)
  }
  

  logout() {
    localStorage.removeItem('id_token');
    //alert("Redirect: logout");
    // window.location.assign('/'); // Incompatible with React Router
  }
}

export default new AuthService();
