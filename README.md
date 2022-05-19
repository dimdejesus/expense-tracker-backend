# expense-tracker-backend

A Backend for Expense Tracker App that is made through node js and prisma.

## Libraries/Frameworks used

-   Express - [Express - Node.js web application framework (expressjs.com)](http://expressjs.com/)
-   Prisma - [Prisma - Next-generation Node.js and TypeScript ORM for Databases](https://www.prisma.io/)

## File Structure

This is the File Structure of the server with their corresponding usage

-   controller - where the logic of my backend placed.
-   prisma - folder for the functioning of prisma
-   routes - where the routes of my backend placed
-   utils - my constants and initializations to avoid initializing objects repeatedly.

## How to set this up locally

Note: Run this before the [Expense Tracker Frontend](https://github.com/dimdejesus/expense-tracker-frontend)`

1. Clone this repository

```bash
git clone https://github.com/dimdejesus/expense-tracker-backend.git
```

2. create a .env variable (use .env.example as an example)
3. Install the dependencies

```bash
npm install
```

4. Migrate the migration for primsa ORM

```bash
npx prisma migrate dev
```

5. Run the seed for dummy data (optional)

```bash
npx prisma db seed
```

7. Run this web app

```bash
npm run serverStart
```
