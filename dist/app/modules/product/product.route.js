"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/', product_controller_1.ProductController.InsertIntoDB);
router.get('/', product_controller_1.ProductController.GetAllFromDB);
router.patch('/:id', product_controller_1.ProductController.UpdateIntoDB);
router.delete('/:id', product_controller_1.ProductController.DeleteFromDB);
exports.ProductRoutes = router;
