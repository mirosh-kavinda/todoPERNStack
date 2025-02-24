# To-Do Application

A simple full-stack To-Do application built with **PostgreSQL**, **Express.js**, and **React**. The project is containerized using **Docker** to streamline development and deployment.


## 📝 **Features**
- Add, edit, and delete tasks  
- Mark tasks as completed  
- View tasks with real-time updates  
- Responsive and user-friendly interface  

---

## 📦 **Tech Stack**
- **Frontend:** React.js  
- **Backend:** Express.js (Node.js)  
- **Database:** PostgreSQL  
- **Containerization:** Docker & Docker Compose  

---

## 🚀 **Getting Started**

### 📁 **Project Structure**
```plaintext
├── backend/           # Express.js server
│   └── .env           # Environment variables for the backend
├── ui/                # React frontend
├── init.sql           # SQL script to initialize the PostgreSQL database
├── docker-compose.yml # Docker orchestration file
└── README.md          # Project documentation
```

---

### ⚙️ **Prerequisites**
- [Docker](https://www.docker.com/get-started) & [Docker Compose](https://docs.docker.com/compose/) installed.

---

### 🏗️ **Setup Instructions**
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-project-directory>
   ```
2. **Run the application:**
   ```bash
   docker-compose up --build
   ```
3. **Access the services:**
   - Frontend: [http://localhost:3000](http://localhost:3000)  
   - Backend: [http://localhost:5000](http://localhost:5000)  
   - PostgreSQL: Accessible on port `5432`  
4. **Database Initialization:**
   - The `init.sql` script initializes the `task` table when the PostgreSQL container is first created.
   - To manually run the script:
     ```bash
     docker exec -i todo-db psql -U admin -d todo_db < init.sql
     ```

---

## 🗄️ **Database Schema**
```sql
CREATE TABLE IF NOT EXISTS task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 💻 **API Endpoints** *(Example)*
| Method | Endpoint   | Description       |
|--------|------------|-------------------|
| GET    | /tasks     | Fetch all tasks   |
| POST   | /tasks     | Create a new task |
| PUT    | /tasks/:id | Update a task     |



