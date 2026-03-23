import express from "express";
import { receiveCode, postCode } from "../controllers/receiveCode.js";

const codeRoutes = express.Router();

codeRoutes.get("/receiveCode", receiveCode);
codeRoutes.post("/receiveCode", postCode);

export default codeRoutes;
