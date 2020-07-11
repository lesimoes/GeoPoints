const adaptRoute = (controllerRoute) => async (req, res) => {
  const httpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
  }
  const httResponse = await controllerRoute(httpRequest);
  res.status(httResponse.statusCode).json(httResponse.body);
}

module.exports = {
  adaptRoute,
};
