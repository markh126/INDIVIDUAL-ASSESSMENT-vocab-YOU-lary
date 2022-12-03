import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
// import selectCategory from '../events/selectCategory';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
   <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Vocabulary Name" value="${obj.title || ''}" required>
   </div>
   <div class="form-group" id="select-category">
   </div>
   <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" placeholder="Vocabulary Description" id="description" style="height: 100px">${obj.definition || ''}</textarea>
   </div>

   <label for="language">Choose a Language</label>
   <select name="languages" id="language">
     <option value="html" ${obj.category === 'html' ? 'selected' : ''}>HTML</option>
     <option value="css" ${obj.category === 'css' ? 'selected' : ''}>CSS</option>
     <option value="javascript" ${obj.category === 'javascript' ? 'selected' : ''}>JavaScript</option>
   </select>

   <button type="submit" class="btn btn-primary">Submit Vocab
   </button>
  </form>`;

  renderToDOM('#form-container', domString);
  // selectCategory(`${obj.categoryId || ''}`, user);
};

export default addVocabForm;
