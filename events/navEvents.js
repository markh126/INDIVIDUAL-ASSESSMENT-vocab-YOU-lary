import { showVocab } from '../pages/vocab';
import { signOut } from '../utils/auth';
import {
  getVocab, vocabAz, vocabByCss, vocabByHtml, vocabByJavascript, vocabNew, vocabOld
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

  document.querySelector('#sort-az-btn').addEventListener('click', () => {
    vocabAz(user.uid).then(showVocab);
  });

  document.querySelector('#sort-old-btn').addEventListener('click', () => {
    vocabNew(user.uid).then(showVocab);
  });

  document.querySelector('#sort-new-btn').addEventListener('click', () => {
    vocabOld(user.uid).then(showVocab);
  });
};

export default navEvents;
