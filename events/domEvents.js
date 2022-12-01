import { deleteVocab, getVocab, getSingleVocab } from '../api/vocabData';
import addVocabForm from '../components/addVocabForm';
import { showVocab } from '../pages/vocab';
import viewVocab from '../pages/viewVocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-vocab-btn')) {
      // console.warn('add');
      addVocabForm({}, user);
    }
    if (e.target.id.includes('delete-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteVocab(firebaseKey).then(() => {
        getVocab(user.uid).then(showVocab);
        // console.warn('delete');
      });
    }
    if (e.target.id.includes('edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj, user));
      // console.warn('editing');
    }
    if (e.target.id.includes('view-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then(viewVocab);
      // console.warn('viewing');
    }
  });
};

export default domEvents;
