# QuickShow 🎬

A full-stack movie ticket booking platform where users can browse movies, select shows, and book tickets — with an admin panel for managing show listings.

🔗 **Live Demo:** [quickshow-ten-xi.vercel.app](https://quickshow-ten-xi.vercel.app/)

---

## Features

**User**
- Browse movies fetched live from the TMDB API
- View available shows for each movie
- Book tickets with Stripe-powered payments
- Receive booking confirmation emails via Brevo / Nodemailer
- Secure authentication via Clerk

**Admin**
- Add and manage shows for any movie
- Role-based access control (admin vs. user)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Tailwind CSS, Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | Clerk |
| Payments | Stripe |
| Background Jobs | Inngest |
| Email | Brevo (SMTP) + Nodemailer |
| Movie Data | TMDB API |
| Deployment | Vercel |

---

## Project Structure

```
quickshow/
├── client/          # React frontend (Vite + Tailwind)
└── server/          # Node.js + Express backend
```

---

## Local Setup

### Prerequisites

- Node.js v18+
- MongoDB instance (local or Atlas)
- Accounts for: Clerk, Stripe, TMDB, Inngest, Brevo

---

### 1. Clone the repository

```bash
git clone https://github.com/imraj071/quickshow.git
cd quickshow
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```dotenv
MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

TMDB_API_KEY=your_tmdb_api_key

STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

SENDER_EMAIL=your_sender_email
SMTP_USER=your_smtp_username
SMTP_PASSWORD=your_smtp_password
```

Start the backend server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file in `/client`:

```dotenv
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CURRENCY=INR
VITE_BASE_URL=http://localhost:5000
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
```

Start the frontend:

```bash
npm run dev
```

---

### 4. Stripe Webhook (local testing)

To test Stripe payments locally, forward webhook events using the Stripe CLI:

```bash
stripe listen --forward-to localhost:5000/api/webhook/stripe
```

Copy the printed webhook signing secret and update `STRIPE_WEBHOOK_SECRET` in your backend `.env`.

---

## Deployment

This project is deployed on **Vercel** (both frontend and backend).

Make sure all environment variables listed above are configured in your Vercel project settings under **Settings → Environment Variables**.

---
