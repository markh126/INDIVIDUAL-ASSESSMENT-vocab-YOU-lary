import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import { signOut } from '../utils/auth';

const navEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#vocabulary').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
    console.warn('showing all');
  });

  document.querySelector('#home').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
    console.warn('going home');
  });
};

export default navEvents;
