import Cookies from 'js-cookie';
import faker from 'faker';

const getName = () => {
  const userName = Cookies.get('userName');
  if (userName) {
    return userName;
  }
  const newUserName = faker.name.findName();
  Cookies.set('userName', newUserName);
  return newUserName;
};

export default getName;
