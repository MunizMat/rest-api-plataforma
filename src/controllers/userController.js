class UserController {
  index(req, res) {
    res.send('index');
  }

  store(req, res) {
    res.send('store');
  }

  update(req, res) {
    res.send('update');
  }

  delete(req, res) {
    res.send('delete');
  }
}

export default new UserController();
