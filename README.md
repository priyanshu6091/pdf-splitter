
# 📄 PDF Splitter & Merger

![Project Banner](https://via.placeholder.com/1200x400?text=PDF+Splitter+%26+Merger)  

## 🚀 Overview
PDF Splitter & Merger is a **full-stack web application** that allows users to:
- **Split** a PDF into selected pages.
- **Merge** multiple PDFs into a single file.  
It is built using the **MERN stack (MongoDB, Express, React, Node.js)** with **pdf-lib** for handling PDFs.

## ✨ Features
✅ **Upload PDF files**  
✅ **Select specific pages to extract**  
✅ **Merge multiple PDFs into one**  
✅ **Real-time error handling & validation**  
✅ **User-friendly, modern UI with Tailwind CSS**  
✅ **Responsive Design for all devices**  

---

## 🛠️ Tech Stack
| **Technology**  | **Usage**          |
|-----------------|--------------------|
| **Frontend**    | React, Tailwind CSS, Vite, Axios |
| **Backend**     | Node.js, Express.js, Multer |
| **PDF Handling**| pdf-lib |
| **Storage**     | MongoDB (if needed for user history) |
| **Deployment**  | Vercel (Frontend), Render (Backend) |

---

## 📸 Screenshots
### 🎨 UI Preview
![PDF Tool Screenshot](https://via.placeholder.com/800x400?text=PDF+Tool+UI)  
*Minimalistic and professional design*

---

## ⚡ Installation & Setup
### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/yourusername/pdf-tool.git
cd pdf-tool
```

### 2️⃣ Install Dependencies  
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3️⃣ Start the Application  
```bash
# Run Backend
cd backend
npm start

# Run Frontend
cd ../frontend
npm run dev
```
> **Note:** Ensure `Node.js` and `MongoDB` are installed.

---

## 📡 API Endpoints

### 🔹 **Split PDF**
```http
POST /api/pdf/split
```
#### **Request**
- `multipart/form-data`
- PDF file + selected `pages` (array)

#### **Response**
- Downloadable split PDF file

---

### 🔹 **Merge PDFs**
```http
POST /api/pdf/merge
```
#### **Request**
- `multipart/form-data`
- Multiple PDF files

#### **Response**
- Merged PDF file for download

---

## 🎨 UI & Design
- Uses **Tailwind CSS** for modern and responsive UI.
- **Minimalistic design** with clean navigation.
- **Mobile & Desktop friendly**.

---

## 🤝 Contributing
Contributions are welcome! Follow these steps:  
1. **Fork** the repository  
2. Create a **new branch** (`feature-branch`)  
3. Commit & push your changes  
4. Open a **Pull Request**  

---

## 📜 License
This project is licensed under the **MIT License**.  
Feel free to use and modify it.

---

## 🌟 Support & Feedback
If you like this project, give it a ⭐ on GitHub!  
For issues & suggestions, open an [issue](https://github.com/yourusername/pdf-tool/issues).

---
🚀 **Happy Coding!** 💙
