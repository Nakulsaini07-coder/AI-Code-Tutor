# 🚀 AI Code Tutor

> 🤖 "Explain this code like I'm five!" — Now your wish is our AI's command.

Welcome to **AI Code Tutor** – a smart, sleek, and fully AI-powered code explainer. Paste any code, click a button, and boom 💥 – instant, beginner-friendly explanation powered by **Gemini 1.5 Flash**. Whether you're debugging, learning, or just curious — this tool has your back!

---

## 🎯 Features

✅ **Explain Code Instantly** — Paste your code, get AI-generated explanations in seconds  
🌗 **Dark / Light Mode** — Your eyes deserve the choice  
💡 **Auto-Resizing Editor** — Because scrolling inside scrollbars is a crime  
⚡ **Fast & Lightweight UI** — Built with React + Tailwind + Vite  
🔒 **Secure Backend API** — Node.js + Express with Gemini integration  
📜 **Ready for Expansion** — Modular structure & history feature coming soon!

---

## 🧠 How It Works

1. ✍️ You paste code into the frontend.
2. 🚀 A POST request is sent to the backend.
3. 🧠 The backend sends your code as a prompt to **Gemini 1.5 Flash** API.
4. 💬 Gemini replies with a beginner-friendly explanation.
5. 🖼️ The frontend displays the explanation with formatting magic.

---

## 🧰 Tech Stack

| Layer        | Tools & Libraries                          |
|--------------|---------------------------------------------|
| Frontend     | React, Tailwind CSS, Vite                  |
| Backend      | Node.js, Express                           |
| AI Integration | Google Generative AI (Gemini 1.5 Flash)  |
| Styling      | Custom themes, animations, responsive UI   |
| Version Control | Git + GitHub                             |

---

## 📸 Preview

![AI Code Tutor UI](docs\Screenshot.png) <!-- Replace with actual screenshot -->

---

## 🛠️ Local Setup

```bash
# Clone the repository
git clone https://github.com/your-username/AI-Code-Tutor.git
cd AI-Code-Tutor

# Install dependencies
cd frontend/front-end
npm install

cd ../../backend
npm install

# Add your Gemini API key in a .env file
# .env
GEMINI_API_KEY=your_key_here

# Run the servers
cd backend && node server.js
cd frontend/front-end && npm run dev
