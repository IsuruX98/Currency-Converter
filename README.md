# Currency Converter and Transfer Management Application

## Overview

This project is a user-friendly currency converter and transfer management application. Users can convert amounts between specified currencies, create transfer records, and manage their transfer history. Authentication is required for transferring funds and viewing transaction history.

## Live Demo

- **Frontend**: [Vercel Live Demo](https://your-vercel-app-url.vercel.app)
- **Backend**: [Render API Endpoint](https://your-render-app-url.render.com)

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, Ant Design
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Hosting**: Vercel (Frontend), Render (Backend)
- **API**: ExchangeRate-API for currency conversion rates

## Features

- **Currency Conversion**:
  - Users can select `From Country`, `To Country`, and enter a `Transfer Amount`.
  - The application displays the converted amount in the `To Country`’s currency.

- **Transfer Management**:
  - `Transfer` button allows users to create a record of the money transfer.
  - Transfer history displays all transfers made by the user.
  - `Revoke` button to delete each transfer record.

- **Authentication**:
  - Users must log in to transfer funds or view the transaction history.

## Assumptions

- The application accommodates transfers between the following countries:
  - Sri Lanka: LKR
  - USA: USD
  - Australia: AUD
  - India: INR

## Project Structure

```
project-root/
│
├── backend/                 # Backend code (Express.js)
│   ├── models/              # Mongoose models
│   ├── routes/              # Express routes
│   ├── .env                 # Environment variables (excluded in .gitignore)
│   └── server.js            # Main server file
│
├── frontend/                # Frontend code (React.js)
│   ├── src/                 # Source files
│   │   ├── components/      # React components
│   │   ├── pages/           # Pages
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   └── .env                 # Environment variables (excluded in .gitignore)
│
├── README.md                # Project documentation
└── .gitignore               # Git ignore rules
```

## Installation and Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- ExchangeRate-API key

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your environment variables:
   ```plaintext
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   EXCHANGE_RATE_API_KEY=your_exchange_rate_api_key
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` directory and add your environment variables:
   ```plaintext
   REACT_APP_API_URL=https://your-render-app-url.render.com
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

1. Access the application via the frontend live demo link or localhost if running locally.
2. Convert currency by selecting `From Country`, `To Country`, and entering the `Transfer Amount`.
3. Log in to create a transfer record.
4. View and manage your transfer history.

## API Endpoints

### Currency Conversion

- **GET** `/api/rates`: Fetch conversion rates from ExchangeRate-API.

### Transfers

- **GET** `/api/transfers`: Retrieve transfer history.
- **POST** `/api/transfer`: Create a new transfer.
- **DELETE** `/api/transfer/:id`: Revoke a transfer.

### Authentication

- **POST** `/api/auth/login`: Log in a user.
- **POST** `/api/auth/register`: Register a new user.

## Environment Variables

Create `.env` files in both `frontend` and `backend` directories. Add the following variables:

### Backend

```plaintext
PORT=5000
MONGODB_URI=your_mongodb_uri
EXCHANGE_RATE_API_KEY=your_exchange_rate_api_key
JWT_SECRET=your_jwt_secret
```

### Frontend

```plaintext
REACT_APP_API_URL=https://your-render-app-url.render.com
```

## Commit History

Ensure your commit history is meaningful and descriptive. Use commit messages that reflect the changes made.

## .gitignore

Add `.env` and any sensitive files to `.gitignore` to prevent them from being committed to the repository.

## Screenshots
