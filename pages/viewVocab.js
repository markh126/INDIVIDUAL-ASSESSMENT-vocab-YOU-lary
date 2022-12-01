import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocab = (obj) => {
  clearDom();

  const domString = `
  <div class="card">
  <h5 class="card-header">${obj.title}</h5>
  <div class="card-body">
    <h5 class="card-category">${obj.category}</h5>
    <p class="card-text">${obj.definition}</p>
    <i id="edit-vocab-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
    <i id="delete-vocab-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
</div>`;

  renderToDOM('#view', domString);
};

export default viewVocab;
