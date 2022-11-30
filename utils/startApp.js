import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';

const startApp = (user) => {
  domBuilder(user);
  // domEvents(user);
  // formEvents(user);
  // navBar();
  logoutButton();
  // navigationEvents(user);
  // getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
