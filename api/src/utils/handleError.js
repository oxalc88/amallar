const httpError = (res, err) => {
  console.log(err);
  res.status(500);
  res.send({ err });
};

module.exports = { httpError };
