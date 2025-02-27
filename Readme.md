# To-Do Tracker

A simple full-stack To-Do application built with **PostgreSQL**, **Express.js**, and **React**. The project is containerized using **Docker** to streamline development and deployment.


## 📦 **Tech Stack**
- **Frontend:** React.js  
- **Backend:** Express.js (Node.js)  
- **Database:** PostgreSQL  
- **Containerization:** Docker & Docker Compose  

---

### 📁 **Project Structure**
```plaintext
├── backend/           # Express.js server
    └── test           # test files
    └── .env           # Environment variables 
    └── Docker         # Container configuration
    └──...    
    └── src/ 
      └── config/       # Database configurations
      └── controllers/  # Controllers 
      └── models/       # models
      └── routes/       # API routes
      └── ...
├── ui/                # React frontend
      └── src 
         └── components/ 
         └── pages/
         └── repositories/
         └── index.js
         └── ...
      └── cypress/     # End To End Testing
      └── Docker       # Front end Container Configuration 
├── init.sql           # SQL script to initialize the PostgreSQL database
├── docker-compose.yml # Docker orchestration file
└── README.md          # Project documentation
└── ...
```


---

## 💻 **API Endpoints** *(Example)*
| Method | Endpoint   | Description       |
|--------|------------|-------------------|
| GET    | /tasks     | Fetch all tasks   |
| POST   | /tasks     | Create a new task |
| PUT    | /tasks/:id | Update a task     |



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



## 🚀 **Getting Started**

### ⚙️ **Prerequisites**
- install Docker :[https://www.docker.com/get-started] (https://www.docker.com/get-started)  
- Docker Compose : [https://docs.docker.com/compose/](https://docs.docker.com/compose/)


1. **Clone the repository:**
   ```bash
   git clone https://github.com/mirosh-kavinda/todoPERNStack.git
   cd todoPERNStack
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

##  **Testing  **

#Front End Unit Test

```bash
  cd ui
  npm test
```


#Back  End Unit Test

```bash
  cd ui
  npm test
```

##  **Colloborator  **
@mirosh-kavinda
