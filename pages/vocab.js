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
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
    <p class="card-text">${item.definition}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <a href="#" class="btn btn-success">Edit</a>
    <a href="#" class="btn btn-danger">Delete</a>
  </div>
</div>`;
  });
  renderToDOM('#store', domString);
};

export { noVocab, showVocab };
