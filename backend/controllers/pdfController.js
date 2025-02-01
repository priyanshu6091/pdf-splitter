const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

const splitPDF = async (req, res) => {
    try {
        const { pages } = req.body;
        const pdfPath = req.file.path;
        const pdfDoc = await PDFDocument.load(fs.readFileSync(pdfPath));
        const newPdf = await PDFDocument.create();

        for (let page of pages) {
            const [copiedPage] = await newPdf.copyPages(pdfDoc, [page - 1]);
            newPdf.addPage(copiedPage);
        }

        const pdfBytes = await newPdf.save();
        const outputPath = `uploads/split_${Date.now()}.pdf`;
        fs.writeFileSync(outputPath, pdfBytes);

        res.download(outputPath, "split.pdf", () => {
            fs.unlinkSync(pdfPath);
            fs.unlinkSync(outputPath);
        });
    } catch (error) {
        res.status(500).json({ message: "Error processing PDF" });
    }
};

const mergePDFs = async (req, res) => {
    try {
        const newPdf = await PDFDocument.create();
        for (let file of req.files) {
            const pdfBytes = fs.readFileSync(file.path);
            const pdfDoc = await PDFDocument.load(pdfBytes);
            const copiedPages = await newPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
            copiedPages.forEach((page) => newPdf.addPage(page));
        }

        const outputPath = `uploads/merged_${Date.now()}.pdf`;
        fs.writeFileSync(outputPath, await newPdf.save());

        res.download(outputPath, "merged.pdf", () => {
            req.files.forEach((file) => fs.unlinkSync(file.path));
            fs.unlinkSync(outputPath);
        });
    } catch (error) {
        res.status(500).json({ message: "Error merging PDFs" });
    }
};

// Export functions using CommonJS
module.exports = { splitPDF, mergePDFs };
