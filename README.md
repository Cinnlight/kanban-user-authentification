# Kanban Board PERN App with JWT Authentication

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [Environment Variables](#environment-variables)
6. [Backend Overview](#backend-overview)
   - [Database](#database)
   - [JWT Authentication](#jwt-authentication)
7. [Frontend Overview](#frontend-overview)
8. [Usage](#usage)
9. [Future Enhancements](#future-enhancements)
10. [Contributing](#contributing)
11. [License](#license)

---

## Overview

This application is a **kanban board** built with the **PERN stack (PostgreSQL, Express, React, and Node.js)**. It allows users to manage their tasks by adding, modifying, and deleting "cards" under three categories: 
1. **Todo**
2. **In Progress**
3. **Completed**

The app features **secure user authentication** using **JSON Web Tokens (JWT)**. Each user's task data is stored in a **PostgreSQL database**, with **Sequelize** managing interactions between the app and the database.

---

## Features

- **User Authentication:**
  - User registration and login secured with JWT.
  - Continuity ensured via token validation.
- **Kanban Functionality:**
  - Add, edit, and delete task cards.
  - Organize tasks under Todo, In Progress, or Completed columns.
- **Database Management:**
  - PostgreSQL database powered by Sequelize ORM.
  - Individualized task data for users.

---

## Tech Stack

- **Frontend:** React, Vite, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL with Sequelize ORM
- **Authentication:** JWT (JSON Web Tokens)
- **Dev Environment:** Gitbash, Windows 11

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **PostgreSQL** (v12 or higher)
- **Git**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kanban-jwt-app.git
   cd kanban-jwt-app

2. Install dependencies for both backend and frontend:

# Backend
- cd backend
- npm install

# Frontend
- cd ../frontend
- npm install

3. Set up the PostgreSQL database (see [Environment Variables](#environment-variables)).

4. Run the application:
- Backend:
  ```bash
  #Backend
  cd server
  npm install
  
-Frontend:
```bash
  #Frontend
  cd client
  npm install
```
5. Access the app in your browser at ```http://localhost:3000```

## Environment Variables
- Create a ```.env``` file in the ```server``` directory with the follow:
```bash
PORT=5000
DB_HOST=localhost
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=kanban_app
JWT_SECRET=your_super_secret_key
```
## Backend Overview

### Database
- **PostgreSQL** stores user and task data.
- **Tables:**
  1. **Users**: Stores user credentials (hashed passwords).
  2. **Tasks**: Tracks tasks with columns for `title`, `description`, `status`, and `userId`.

Sequelize handles migrations, associations, and queries.

### JWT Authentication
- **User Signup**: Credentials are hashed and stored in the database.
- **Login**: On successful login, a JWT is issued.
- **Token Validation**: Protected routes validate tokens to ensure secure data access.
- **Continuity**: Tokens keep users logged in during their session.

## Frontend Overview

The React app uses a modern, responsive design with Vite for optimized performance. Core features include:

- **Drag and Drop Tasks** (Optional future enhancement).
- **CRUD Functionality:**
  - Add a new card with a title, description, and status.
  - Edit existing cards or move them between columns.
  - Delete cards when they’re no longer needed.

## Usage

1. **Register a new account** on the login screen.
2. **Log in** to gain access to your kanban board.
3. **Manage tasks:**
   - Add new tasks using the "Add Task" button.
   - Modify tasks by clicking on them.
   - Delete tasks by selecting the "Delete" option.
4. **Session Continuity**: Reopen the app to resume where you left off.

## Future Enhancements

- Implement drag-and-drop functionality for a smoother UX.
- Add user profile management.
- Enable collaborative boards with shared tasks.
- Introduce task deadlines and reminders.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. For major changes, please discuss them with us first.

## License

This project is licensed under the MIT License. See the LICENSE file for details.


