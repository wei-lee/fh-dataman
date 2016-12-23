function message(message) {
  return { message };
}

/**
 * Add the route to create a new collection for the users App.
 * This route expects a db connection to be present on the request object.
 *
 * @param {object} server - The express server.
 */
export function createCollection(server) {
  server.post("/collection", (req, res, next) => {
    if (!req.body.name) {
      return res.status(400).send(message('name is required'));
    }

    req.db.createCollection(req.body.name, err => {
      if (err) {
        return next(err);
      }

      res.status(201).send(message('ok'));
    });
  });
}
