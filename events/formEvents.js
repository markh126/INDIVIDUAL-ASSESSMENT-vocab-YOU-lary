import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import { createCategory, getCategory, updateCategory } from '../api/categoryData';
import showCategory from '../pages/category';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-vocab')) {
      console.warn('new vocab');
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#language').value,
        // category_id: document.querySelector('#category_id').value,
        definition: document.querySelector('#description').value,
        time_submitted: new Date().toLocaleString(),
        uid: user.uid,
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#language').value,
        // category_id: document.querySelector('#category_id').value,
        definition: document.querySelector('#description').value,
        firebaseKey,
      };
      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }

    if (e.target.id.includes('submit-category')) {
      console.warn('new cat');
      const payload = {
        name: document.querySelector('#title').value,
        uid: user.uid,
      };
      createCategory(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCategory(patchPayload).then(() => {
          getCategory(user.uid).then(showCategory);
        });
      });
    }

    if (e.target.id.includes('update-category')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#title').value,
        firebaseKey,
      };
      updateCategory(payload).then(() => {
        getCategory(user.uid).then(showCategory);
      });
    }
  });
};

export default formEvents;
