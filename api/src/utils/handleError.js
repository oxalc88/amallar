const httpError = (res, err) => {
  console.log(err);
  res.status(500);
  res.send({ err });
};

const handleHttpError = (res, message = "Something Happened", code = 403) => {
  res.status(code);
  res.send({ error: message });
};
module.exports = { httpError, handleHttpError };
