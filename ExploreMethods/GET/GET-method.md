# HTTP GET Method & Express Router Lab 🔍

The `GET` method is used to retrieve data from a server. This file documents how to implement `GET` routes cleanly using isolated **Express Routers** to maintain a modular architecture.

---

## 🏗️ Architecture Design (Separation of Concerns)

Instead of cluttering the main server file (`index.js`), endpoints are grouped inside an isolated routing container. This container handles its own path logic independently and is then exported to the main engine.

```mermaid
graph LR
  A[GetMethod.js: Router] -->|module.exports| B[index.js: App Server]
```