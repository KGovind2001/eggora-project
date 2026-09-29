# Eggora ERP - Full Starter

## Backend
1. Install Java 21, Maven and MySQL.
2. Create database: `CREATE DATABASE eggora;`
3. Update `backend/src/main/resources/application.yml` if your MySQL password differs.
4. Run:
   `cd backend`
   `mvn clean spring-boot:run`

Backend: http://localhost:8080

## Frontend
1. Install Node.js 20+.
2. Run:
   `cd frontend`
   `npm install`
   `npm run dev`

Frontend: http://localhost:5173

## First user
Use Postman/curl:
POST http://localhost:8080/api/auth/register
Content-Type: application/json
{
  "username":"admin",
  "email":"admin@eggora.com",
  "password":"admin123",
  "role":"ADMIN"
}

Then open http://localhost:5173 and login.

## Included
Authentication, dashboard, products, customers, suppliers, expenses, MySQL/JPA, React/Vite/Tailwind, REST APIs.

This is a working foundation. Sales, purchase orders, inventory transactions, payments, reports, PDF invoices, audit logs, and production JWT enforcement should be added as the next modules.
# eggora-project
