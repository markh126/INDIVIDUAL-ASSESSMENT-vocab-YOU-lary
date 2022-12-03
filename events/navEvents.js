import { showVocab } from '../pages/vocab';
import { signOut } from '../utils/auth';
import {
  getVocab, vocabByCss, vocabByHtml, vocabByJavascript
} from '../api/vocabData';

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

  document.querySelector('#sort-html-btn').addEventListener('click', () => {
    vocabByHtml(user.uid).then(showVocab);
    console.warn('going home');
  });

  document.querySelector('#sort-css-btn').addEventListener('click', () => {
    vocabByCss(user.uid).then(showVocab);
    console.warn('going home');
  });

  document.querySelector('#sort-js-btn').addEventListener('click', () => {
    vocabByJavascript(user.uid).then(showVocab);
    console.warn('going home');
  });
};

export default navEvents;
