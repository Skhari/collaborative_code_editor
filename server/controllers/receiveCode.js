import axios from "axios";

export const receiveCode = (req, res, next) => {
  res.json({ success: true, data: { name: "sk", age: 21 } });
};

export const postCode = async (req, res, next) => {
  try {
    const { code } = req.body;
    console.log(code);
    const response = await axios.post("https://api.jdoodle.com/v1/execute", {
      script: code,
      language: "nodejs",
      stdin: "world",
      versionIndex: "0", // 0 usually means the latest version in JDoodle
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
    });

    console.log(response.data);

    await res.json({ data: response.data });
  } catch (err) {
    console.log(err);
  }
};
