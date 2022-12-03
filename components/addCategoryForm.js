import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addCategoryForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-category--${obj.firebaseKey}` : 'submit-category'}" class="mb-4">
   <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="categoryTitle" placeholder="Language/Tech" value="${obj.name || ''}" required>
    <button type="submit" class="btn btn-primary">Submit Category
    </button>
   </form>`;
  renderToDOM('#form-container', domString);
};

export default addCategoryForm;
