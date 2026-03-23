export const receiveCode = (req, res, next) => {
  res.json({ success: true, data: { name: "sk", age: 21 } });
};

export const postCode = (req, res, next) => {
  const code = req.body;
  console.log(code);
  res.json({ data: code });
};
