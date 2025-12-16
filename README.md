# Exam Seating Arrangement

## Project Purpose
This project is a **React-based Exam Seating Arrangement system** designed for admins to manage classrooms, students, and teachers efficiently. The admin can assign students and teachers to classrooms while enforcing seat limits and preventing duplicate assignments.

---

## Key Features

- **Admin Login** (no backend authentication, simple login check)
- **6 Classrooms** available for seating
- **Student Allocation**: Each room can have **up to 10 students**
- **Teacher Allocation**: Each room can have **up to 2 teachers**
- **Selection Constraints**: Once a student or teacher is assigned, they cannot be assigned to another room
- **Visual Feedback**:
  - Selected students/teachers turn **red** and are disabled
  - Toast notifications alert admins when room limits are reached or a selection is successful
- **Responsive UI** using **Tailwind CSS** and **DaisyUI**
- **Routing** handled with **React Router DOM**
- **Data Management**: Loads **fake student and teacher data** from JSON files in the `public` folder
- **User-Friendly Alerts** with **React Hot Toast**

---

## Technologies & NPM Packages Used

- **React** - Frontend library for building UI components
- **Vite** - Fast React build tool
- **React Router DOM** - For routing and page navigation
- **Tailwind CSS** - Utility-first CSS framework for styling
- **DaisyUI** - Tailwind CSS component library
- **React Hot Toast** - For toast notifications
- **JSON** - Used for storing fake student and teacher data

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd exam-seating
