# Mailos - Restaurant Website

Mailos is a restaurant website built with React for the Advanced Web Programming project. Visitors can explore the pasta menu, learn about the restaurant, view contact information and prepare an order using an interactive shopping cart.

## Pages

- **Home:** Restaurant introduction and featured dishes.
- **Menu:** Available dishes with images, descriptions, prices and Add to Cart buttons.
- **About:** Information about the restaurant.
- **Contact:** Location, opening hours, contact details and a contact form.
- **Cart:** Selected dishes, quantity controls and the order total.

## Features

- Display dishes using reusable React components.
- Add dishes from the menu to the cart.
- Increase and decrease item quantities.
- Remove individual dishes.
- Clear the entire cart.
- Calculate the total quantity and price automatically.
- Display a message when the cart is empty.
- Navigate between pages using React Router.
- Adapt layouts using CSS media queries.

## Technologies

- React
- React Router
- JavaScript and JSX
- CSS
- Create React App

## Running the Project Locally

1. Clone or download this repository.
2. Open a terminal inside the project folder.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open http://localhost:3000 in your browser.

## Production Build

Run the following command:

```bash
npm run build
```

The production files are generated inside the `build` folder.

## Cart Behavior

The cart uses React state shared between the Menu and Cart pages through props.

Adding an existing dish increases its quantity. Decreasing its quantity to zero removes it from the cart.

The cart is stored in memory. Refreshing the page resets it.

## Project Scope

This project demonstrates a restaurant frontend and an interactive cart. Payment processing and backend order submission are outside its current scope.

## Live Website

[View Mailos](https://mailos-restaurant-zoeq.vercel.app/)

## Screenshots

Screenshots of the desktop and mobile layouts will be added after deployment.