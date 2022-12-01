import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/logoutButton';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  // navigationEvents(user);
  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
