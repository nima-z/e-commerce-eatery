This is a [Next.js] project bootstrapped with [`create-next-app`]. The Point of building this application is to clone **McDonald**'s website including it's database.
Original website ====> https://www.mcdonalds.com/us/en-us.html

## Tech Stack

This project uses the following technologies:

- Next.js
- TypeScript
- PostgreSQL
- Prisma
- React-Query
- Sass
- Mui

## Images

/public/images/home.jpg

## Description

Almost all pages use _getStaticProps_ with no revalidation, except **productDetail** page which uses _getServerSideProps_ to be able to react to any instant changes on the server or database.
The **productDetail** page is now kind of static and it's not necessary to use _getServerSideProps_, but I added it in case of having users, cart page, buying process and a limited number of products in the stack.

# Getting Started

## Install dependecies:

```bash
npm install
```

## Setup your database locally or on a remote server

you can use _Docker_ to setup postgreSQL

or

use https://www.supabase.com to run the database on a remote server.

## Run the application

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
