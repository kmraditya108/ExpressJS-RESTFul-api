# ExpressJS RESTful API (Learning & Practice Lab) 🚀

A dedicated practice environment built to master backend development fundamentals using **Node.js** and **Express.js**. The core focus of this repository is understanding architectural routing, HTTP request lifecycles, and REST principles.

## 🧠 Core Learning Objectives & Milestones

### 1. HTTP Method Implementation
* **GET Requests:** Serving static text and structured JSON payloads.
* **POST Requests:** Processing incoming client data using `express.json()` middleware.
* **PUT** — Replacing or fully updating an existing resource with a completely new payload.
* **PATCH** — Applying partial modifications or minor updates to an existing resource.
* **DELETE** — Removing a specific resource from the server.

### 2. Request Handling & Routing
* **Route Parameters:** Extracting variables from URLs (e.g., `/api/users/:id`).
* **Query Strings:** Filtering data using URL query parameters.

### 3. Middleware & Security Basics
* Setting up custom logging middleware to track incoming server requests.
* Implementing environmental configurations and dependency isolation using `.gitignore`.


### 4. Request-Response Lifecycle
* **Request Object (`req`):** Extracting client headers, bodies, cookies, and parameters.
* **Response Object (`res`):** Structuring server outputs using `.send()`, `.json()`, and explicit status codes (e.g., `200 OK`, `201 Created`, `404 Not Found`).
* **Global Error Handling:** Implementing dedicated error-catching middleware to gracefully manage server crashes.


---

## 🛠️ Tech Stack & Tools
* **Runtime Environment:** Node.js
* **Backend Framework:** Express.js
* **API Testing:** Web Browser / Postman

---

## 💻 How to Run This Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd ExpressJS-RESTFul-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   node index.js
   ```
   The server will spin up locally at `http://localhost:3000`.


---

### Updated Package.json devDependencies
   **$ npm i nodemon**
   ```bash
      dependencies": {
         "express": "^5.2.1",
         "nodemon": "^3.1.14"
      }
  ```

  ****"nodemon": "^3.1.14"** (after installing this no need to run $node index.js everytime after any update, instead run once $ nodemon index.js)
