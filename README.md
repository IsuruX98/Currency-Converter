# Currency Converter and Transfer Management Application

## Overview

This project provides a user-friendly currency converter and transfer management system. Users can convert amounts between specified currencies, create transfer records, and manage their transfer history. Authentication is required for transferring funds and viewing transaction history.

## Live Demo

- **Frontend**: [Vercel Live Demo](https://your-vercel-app-url.vercel.app)
- **Backend**: [Render API Endpoint](https://your-render-app-url.render.com)

## Screenshots

![Screenshot_30-6-2024_185427_localhost](https://github.com/IsuruX98/Currency-Converter/assets/104721314/f0ace66b-f525-4d37-a709-7766b2a18eda)

![Screenshot_30-6-2024_18533_localhost](https://github.com/IsuruX98/Currency-Converter/assets/104721314/5413e5f0-3467-455e-a6d8-ee459cfe92ac)

![Screenshot_30-6-2024_185318_localhost](https://github.com/IsuruX98/Currency-Converter/assets/104721314/c6d3f0de-5796-4f4e-98cb-663d41809a44)

![Screenshot 2024-06-30 185542](https://github.com/IsuruX98/Currency-Converter/assets/104721314/2fd18901-1c21-4368-876b-772ab40ac8ac)


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
Currency-Converter/
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
   git clone https://github.com/IsuruX98/Currency-Converter.git
   cd Currency-Converter/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your environment variables:
   ```plaintext
   PORT=5000
   MONGO_URI=mongodb+srv://isuru:1234@currencyconverter.fzwgrls.mongodb.net/?retryWrites=true&w=majority&appName=CurrencyConverter
   NODE_ENV=development
   JWT_SECRET=mekarahasak
   EXCHANGERATE_API_KEY=f2016171eae115082f4d8ebd
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

3. Start the frontend development server:
   ```bash
   npm start
   ```

> **Note**: No `.env` file is required for the frontend setup as all configurations are managed through the backend.

## Usage

1. Access the application via the frontend live demo link or localhost if running locally.
2. Convert currency by selecting `From Country`, `To Country`, and entering the `Transfer Amount`.
3. Log in to create a transfer record.
4. View and manage your transfer history.

## Environment Variables

Create a `.env` file in the `backend` directory and add the following variables:

### Backend

```plaintext
PORT=5000
MONGO_URI=mongodb+srv://isuru:1234@currencyconverter.fzwgrls.mongodb.net/?retryWrites=true&w=majority&appName=CurrencyConverter
NODE_ENV=development
JWT_SECRET=mekarahasak
EXCHANGERATE_API_KEY=f2016171eae115082f4d8ebd
```

### Frontend

> **No `.env` file is required for the frontend**.
