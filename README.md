# 🎓 Student Management System

A complete **Full-Stack Web Application** to register, manage, and explore student records. Built with **React (Frontend)**, **Spring Boot (Backend)**, and **MySQL (Database)**, this system includes features like student registration, pagination, search, and time zone API integration with modern UI/UX.

🙋‍♂️ Admin Info
👨‍💼 Malipeddi Sekhar

📍 Java Full Stack Developer

🔗 GitHub

🔗 LinkedIn

## 📌 Key Features

- ✅ Register new students with validation
- ✅ Paginated view of all student data
- ✅ Search students by name
- ✅ Get current time by region using external API
- ✅ Responsive UI using clean CSS
- ✅ Scrollbars, hover effects, cards layout for realistic design
- ✅ Role: Admin - Malipeddi Sekhar

---

## 🧰 Technologies Used

### 🌐 Frontend (React)
- **React JS** - Component-based UI
- **Axios** - API integration
- **React Router DOM** - Navigation
- **Custom CSS** - All UI/UX styled manually
- **Vite** - Build tool
- **Assets Folder** - For storing images/icons

### 🔧 Backend (Spring Boot)
- **Spring Boot** - RESTful API
- **Spring Web** - Web layer
- **Spring Data JPA** - DB interactions
- **MySQL** - Database
- **Lombok** *(optional)* - Boilerplate reduction
- **RestTemplate / Feign** - Time API integration

---

## 📦 Modules and Components

### 🖥️ Frontend - `React`

| File/Component         | Description |
|------------------------|-------------|
| `Home.jsx`             | Home page with navbar, links, and admin intro |
| `Register.jsx`         | Form for student registration |
| `AdminView.jsx`        | View all students with pagination |
| `AdminDashboard.jsx`   | Search students by name |
| `TimeZone.jsx`         | Fetch time based on region |
| `Navbar/Footer.jsx`    | Shared layout elements |
| `assets/`              | Admin image, icons |
| `Css/`                 | All `.css` files for styling each component |

### 💻 Backend - `Spring Boot`

| Package/File                  | Description |
|------------------------------|-------------|
| `Student.java`               | Entity class |
| `StudentController.java`     | All REST API endpoints |
| `StudentRepository.java`     | JPA repository |
| `StudentService.java`        | Logic for save/search/time |
| `TimeController.java`        | Time API fetch endpoint |
| `application.properties`     | DB config, port |
| `pom.xml`                    | Spring Boot dependencies |

---

## 📂 Project Folder Structure

### React (Frontend)
/src
├── Components/
│ ├── Home.jsx
│ ├── Register.jsx
│ ├── AdminDashboard.jsx
│ ├── AdminView.jsx
│ ├── TimeZone.jsx
│ └── Css/
│ ├── Home.css
│ ├── Register.css
│ ├── AdminDashboard.css
│ ├── AdminView.css
│ ├── TimeZone.css
├── assets/
│ └── Administration.webp
└── App.jsx

### Springboot(backend)
/src/main/java/com/example/ccspring/
├── controller/
│ ├── StudentController.java
│ ├── TimeController.java
├── model/
│ └── Student.java
├── repository/
│ └── StudentRepository.java
├── service/
│ └── StudentService.java
└── CcSpringApplication.java
