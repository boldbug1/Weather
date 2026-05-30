# Modular Weather Dashboard

A lightweight, client-side weather dashboard built using vanilla JavaScript, ES6 modules, and Tailwind CSS. The project demonstrates clean code practices by decoupling data fetching, structural formatting, and DOM rendering into isolated modules.

🔗 **[Visit Live Site](https://www.google.com/search?q=https://boldbug1.github.io/weather/)**

---

### 📱 Preview
![Sample](https://github.com/boldbug1/Weather/blob/main/sample/sample.png "Sample V1")


---

## 🏗️ Architecture & Modules

The application is built around the **Single Responsibility Principle (SRP)**, ensuring that each file has exactly one job:

* **`index.html`** — The presentation layer, structured using modern Tailwind CSS components for a high-contrast, glassmorphism design.
* **`app.js`** — The controller. It coordinates the execution flow, initializes the application, handles DOM selection, and updates the user interface once data is resolved.
* **`api.js`** — The data ingestion layer. Responsible strictly for making asynchronous network calls to the external API, validating HTTP response statuses, and passing raw data down the chain.
* **`object.js`** — The data modeling layer. It features a factory function (`weatherObjectBuilder`) that maps incoming API payloads into a consistent, predictable internal object structure, protecting the frontend from unexpected API schema changes.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, Tailwind CSS (via browser CDN)
* **Scripting:** Vanilla JavaScript (ES6+ Features)
* **API Provider:** OpenWeatherMap (Current Weather Data API)

---

## 🚀 Local Setup & Installation

Since this project leverages native ES6 Modules, opening the `index.html` file directly in a browser via the `file://` protocol will cause CORS errors. You must run it using a local development server.

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

```


2. **Add your API Key:**
Locate the fetch URL inside `api.js` and append your personal OpenWeatherMap API key to the `APPID=` parameter:
```javascript
const url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=YOUR_API_KEY_HERE&units=metric";

```


3. **Run a local server:**
* If using VS Code, right-click `index.html` and select **Open with Live Server**.
* Alternatively, using Python in your terminal:
```bash
python -m http.server 8000

```


* Open `http://localhost:8000` in your browser.



---

## ⚠️ Security & Deployment Note

> [!IMPORTANT]
> This is a client-side portfolio application running entirely in the browser. For demonstration purposes on static hosting environments like GitHub Pages, the API key must be accessible to the client machine making the request. In a production environment, these requests should be proxied through a secure backend server (such as Vercel/Netlify serverless functions) to safely hide environment variables (`.env`) from the public network tab.
