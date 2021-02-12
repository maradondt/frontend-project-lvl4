import Cookies from 'js-cookie';
import UsernameGenerator from 'username-generator';

const getName = () => {
  const userName = Cookies.get('userName');
  if (userName) {
    return userName;
  }
  const newUserName = UsernameGenerator.generateUsername();
  Cookies.set('userName', newUserName);
  return newUserName;
};

export default getName;
