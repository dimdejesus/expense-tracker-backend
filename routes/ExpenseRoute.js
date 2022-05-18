//The purpose of this module is to isolate the routes group, in this case the expenses

import express from "express";

//Controllers
import { findAll } from "../controller/ExpenseController.js";

//Initialize Express Router
const router = express.Router();

//Get All Expenses
router.get("/expenses", findAll);
//Get One Expense
router.get("/expenses/:id");
//Create New Expense
router.post("/expenses");
//Update One Expense
router.put("/expenses/:id");
//Delete One Expense
router.delete("/expenses/:id");

export default router;
