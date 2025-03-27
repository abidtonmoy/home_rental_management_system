# House Rental Management System

## Overview

The **House Rental Management System** is a web application that simplifies the process of renting houses. It connects landlords and tenants, providing a seamless experience for listing, searching, and managing rental properties.

## Features

- User Authentication (Signup & Login for Manager, Admin, House Provider, and Customer)
- Property Listings with images and descriptions
- Search and Filter functionality for rentals
- Booking and Scheduling for property visits
- Tenant and Landlord Dashboard
- Admin Panel for managing users and properties

## Tech Stack

- **Frontend:** React.js / Next.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Tokens)

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js & npm
- MySQL (local or cloud-based)

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/house-rental-management.git
   cd house-rental-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory and add:

   ```env
   PORT=3000
   DB_HOST=your_mysql_host
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

5. Access the application at:
   ```
   http://localhost:3000
   ```

## API Endpoints

| Endpoint              | Method | Description           |
| --------------------- | ------ | --------------------- |
| `/api/auth/signup`    | POST   | Register a new user   |
| `/api/auth/login`     | POST   | Login user            |
| `/api/manager`        | GET    | Manager routes        |
| `/api/admin`          | GET    | Admin routes          |
| `/api/house-provider` | GET    | House Provider routes |
| `/api/customer`       | GET    | Customer routes       |
| `/api/properties`     | GET    | Get all properties    |
| `/api/properties/:id` | GET    | Get property details  |
| `/api/bookings`       | POST   | Book a property       |

## Contribution

Contributions are welcome! Follow these steps:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature-name`)
5. Create a pull request

## License

This project is licensed under the **MIT License**.

---

**Developed by Tonmoy**
