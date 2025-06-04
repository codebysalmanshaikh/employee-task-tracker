# Employee Task Tracker

A role-based task management system built with **React** and **Tailwind CSS**, allowing admins to assign tasks and employees to track their progress. This application uses **local storage** for authentication and data persistence, making it lightweight and easy to test without a backend.

## 🔍 Project Overview

The **Employee Task Tracker** provides two dashboards — one for **Admin** and one for **Employees**. Admins can log in, create tasks for employees with detailed info (title, category, date, description), and monitor their status. Employees can log in to view tasks assigned to them and track their progress (New, Active, Completed, Failed).

This project is fully frontend-based and stores all data in the browser's local storage.

---

## 🧩 Features

### 🔐 Authentication
- Simple local storage-based login system
- Hardcoded credentials for one Admin and five Employees

### 🧑‍💼 Admin Dashboard
- Login as Admin
- Assign tasks to employees
- Input task title, category, date, and description
- View task statistics:
  - Active
  - Completed
  - Failed
  - New
- Logout functionality

### 👨‍💻 Employee Dashboard
- Login as Employee
- View tasks assigned by Admin (dummy data from local storage)
- See task breakdown by status (New, Active, Completed, Failed)
- Logout functionality

---

## 🛠 Tech Stack

- **React**
- **Tailwind CSS**
- **React Router DOM**
- **Local Storage** for persistence
- **Vite** for fast development setup

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/codebysalmanshaikh/employee-task-tracker.git
cd employee-task-tracker



🔑 Login Credentials
Admin
Email: admin@example.com
Password: 123
 

Employees
Email: employee1@example.com to employee5@example.com
Password: 123



👤 Author
Salman Shaikh
GitHub: @codebysalmanshaikh