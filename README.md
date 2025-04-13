# 🧠 Code Explainer

An AI-powered tool that takes a code snippet and explains it in simple terms. Built with the **React** frontend and powered by a backend API for detailed code analysis and explanation.

---

## 🚀 Features

- 🔥 **AI-powered explanations** of code snippets
- 🌐 Built with **React.js** on the frontend
- 🎨 **UI** with **Tailwind CSS**
- ⚡ **Axios** for API calls to fetch code explanations
- ✨ Dynamic loading state while waiting for explanations
- 📦 **Environment variable support** for backend integration

---

## 🧠 Tech Stack

| Tech        | Description                                    |
|-------------|------------------------------------------------|
| **Frontend** | React.js, Vite, Axios, Tailwind CSS            |
| **Backend**  | Node.js, Express.js (for API)                  |
| **AI API**   | Custom API for generating code explanations     |

---

## 📂 Project Structure

code_explainer/
├── client/          # Frontend - React + Tailwind
│   ├── public/      # Public assets (e.g., images, favicon, etc.)
│   ├── src/         # React components and assets
│   │   ├── components/  # Reusable React components
│   │   ├── App.jsx   # Main component
│   │   └── index.js  # Entry point for React
│   ├── vite.config.js  # Vite configuration file
│   └── .env          # Environment variables for frontend
│
├── server/          # Backend - Express + Code explanation service
│   ├── src/
│   │   ├── controllers/  # Logic for API request handling
│   │   ├── routes/       # API route definitions (e.g., /api/explain/code)
│   │   └── services/     # Services to process code and generate explanations
│   ├── app.js           # Main backend application file
│   └── .env             # Environment variables (API keys, etc.)
│
├── README.md        # Project documentation