import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showCategory = (array) => {
  clearDom();

  /* const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add A Word</button>';
  renderToDOM('#add-button', btnString); */

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">${item.title}</h4>
        <i id="edit-category-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-category-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
        </div>`;
  });
  renderToDOM('#store', domString);
};

export default showCategory;
