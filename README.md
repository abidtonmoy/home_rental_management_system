# House Rental Management System

## Overview

The **House Rental Management System** is a web application that simplifies the process of renting houses. It connects landlords and tenants, providing a seamless experience for listing, searching, and managing rental properties.

## Features

- User Authentication (Landlord & Tenant accounts)
- Property Listings with images and descriptions
- Search and Filter functionality for rentals
- Online Rent Payment System
- Booking and Scheduling for property visits
- Tenant and Landlord Dashboard
- Secure Payment Gateway Integration
- Reviews and Ratings System
- Admin Panel for managing users and properties

## Tech Stack

- **Frontend:** React.js / Next.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Payment Gateway:** Stripe / PayPal
- **Deployment:** Vercel / AWS / Heroku

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js & npm
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

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
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET=your_stripe_secret_key
   ```

4. Start the backend server:

   ```bash
   npm run server
   ```

5. Start the frontend:

   ```bash
   cd client
   npm install
   npm start
   ```

6. Access the application at:
   ```
   http://localhost:3000
   ```

## API Endpoints

| Endpoint              | Method | Description          |
| --------------------- | ------ | -------------------- |
| `/api/auth/register`  | POST   | Register a new user  |
| `/api/auth/login`     | POST   | Login user           |
| `/api/properties`     | GET    | Get all properties   |
| `/api/properties/:id` | GET    | Get property details |
| `/api/bookings`       | POST   | Book a property      |
| `/api/payments`       | POST   | Process payment      |

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

**Developed by Your Name**
