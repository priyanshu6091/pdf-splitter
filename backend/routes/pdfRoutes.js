const express=require("express")
const multer = require("multer");
const { splitPDF, mergePDFs } = require("../controllers/pdfController.js");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/split", upload.single("pdf"), splitPDF);
router.post("/merge", upload.array("pdfs"), mergePDFs);

module.exports= router;
