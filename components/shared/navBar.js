import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#" id="home">vocab-YOU-lary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="vocabulary">
                All Entries <span class="sr-only">(current)</span>
              </a>
          </li>
          <li class="nav-item active">
          <a class="nav-link" href="#" id="add-vocab-btn">
            Add A Word <span class="sr-only">(current)</span>
          </a>
            <li>
            </li>
            <li class="nav-item active">
            <a class="nav-link" href="#" id="add-category-btn">
              Add A Language/Tech <span class="sr-only">(current)</span>
            </a>
              <li>
            <input
              class="form-control mr-sm-2"
              id="search-bar"
              placeholder="Search Vocabulary"
              aria-label="Search"
            </li>
          </ul>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
