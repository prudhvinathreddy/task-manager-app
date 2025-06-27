## Task Manager App

This is a simple full-stack task manager application I built as part of a coding assignment. It allows users to:
- Add tasks with a title and optional description  
- View all tasks  
- Mark tasks as completed  
- Delete tasks

##  Tech Stack

- **Backend:** Java 17, Spring Boot 3, Spring Web, Spring Data JPA, H2 in-memory database  
- **Frontend:** React.js (functional components + hooks), Bootstrap for styling, Axios for HTTP requests  


##  How to Run the App?

### Backend (Spring Boot)

1. Go to the backend folder: Open the project in terminal got o backend folder
   cd backend
2. Run the Spring Boot app:
    On Windows: Open terminal and run
        mvnw spring-boot:run
    The backend runs on: http://localhost:8080

    You can test it by hitting: http://localhost:8080/api/tasks (It’ll return an empty list if no tasks exist)

💻 Frontend (React)
1. Open a new terminal window and go to the frontend folder:
    cd frontend
2. Install the dependencies:
    npm install
3. Start the React app:
    npm start
   its starts and automatically opens this url or manually open it: http://localhost:3000

That’s it — you should see the Task Manager UI.

Now in the UI, you can:
* Add a new task 
* Mark tasks as completed
* Delete tasks (The task list updates automatically)
