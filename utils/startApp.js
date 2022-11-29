const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
