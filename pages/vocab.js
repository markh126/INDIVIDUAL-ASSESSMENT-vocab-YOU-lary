import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const noVocab = () => {
  const domString = '<h1>No Vocabulary</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add A Word</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">${item.title}</h4>
         <h5 class="card-subtitle mb-2 text-muted">${item.category}</h5>
         <p class="card-text">${item.definition}</p>
          <hr>
          <i id="view-vocab-btn--${item.firebaseKey}" class="btn btn-success fas fa-eye"></i>
          <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
          <h6 class="card-subtitle mb-2"><small class="text-muted">Last Updated 3 mins ago</small></h6>
      </div>
    </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, noVocab };
