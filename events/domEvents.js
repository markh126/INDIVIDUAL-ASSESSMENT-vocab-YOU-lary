// import { getVocab } from '../api/vocabData';
import addVocabForm from '../components/addVocabForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-vocab-btn')) {
      // console.warn('Add');
      addVocabForm({}, user);
    }
  });
};

export default domEvents;
