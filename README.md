# E-Commerce Full Stack Project
## React, NodeJS, JWT and connect to Stripe Payment 
### structure of Backend:

    ├── index.js
    ├── models
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    └── routes


*   `index.js`:This file is typically the entry point of the application, which means it's the first file that gets executed when you start the server. Here's a breakdown of what each section of this file does:

    1.  Import dependencies: The first few lines of code import the necessary dependencies for your application to function. In this case, you're importing `express`, `mongoose`, `dotenv`, `cors`, and several route files that define the endpoints for your API.

    2.  Initialize the app: The next line creates a new instance of the `express` application, which you'll use to define your routes and middleware.

    3.  Load environment variables: The `dotenv.config()` function loads any environment variables defined in a `.env` file into the `process.env` object, which you can access throughout your application. This is useful for storing sensitive information like database passwords and API keys without hard-coding them into your code.

    4.  Connect to the database: The `mongoose.connect()` function connects to a MongoDB database using the `MONGO_URL` environment variable. If the connection is successful, the `connected MongoDB successfully` message is logged to the console. If there's an error, the `error connecting MongoDB` message is logged instead.

    5.  Start the server: The `app.listen()` function starts the server and listens for incoming requests on the specified port. If the `PORT` environment variable is defined, it will use that value; otherwise, it will default to port 5000\. Once the server is running, the `Backend server is running on port 5000` message is logged to the console.

    6.  Set up middleware: The `app.use()` function is used to set up middleware for your application. In this case, you're using the `cors` middleware to allow cross-origin requests, and the `express.json()` middleware to parse incoming JSON data.

    7.  Define routes: The `app.use()` function is also used to define your API endpoints. Each route is defined using a separate file that exports a router object, which you then attach to the appropriate path using `app.use()`. For example, the `/api/products` endpoint is defined in the `productRoute` file, which is attached to the `'/api/products'` path using `app.use('/api/products', productRoute)`.


*   `models`: This folder is where you can define your data models for your application. These models typically represent the structure of your data and can be used to interact with your database.

            E-Commerce-backend/models
            ├── Cart.js
            ├── Order.js
            ├── Product.js
            └── User.js


    This directory contains the models for your application, which define the structure and behavior of your data.

    Here's a brief explanation of each file:

    *   `Cart.js`: This file defines the `Cart` model, which represents a user's shopping cart. It likely includes fields like the user ID, the product ID, and the quantity of each item in the cart.

    *   `Order.js`: This file defines the `Order` model, which represents a user's order. It likely includes fields like the user ID, the product ID, the quantity of each item in the order, and the total cost.

    *   `Product.js`: This file defines the `Product` model, which represents a product in your application's inventory. It likely includes fields like the name, description, price, and image URL.

    *   `User.js`: This file defines the `User` model, which represents a user in your application. It likely includes fields like the username, email, password, and any other relevant user information.

    Each model file contains a schema definition for the corresponding data type, as well as any relevant methods or functions for interacting with that data. These models are used throughout the application to perform database operations, like creating new users or products, updating cart quantities, or generating order summaries.

    Overall, the models directory is an important part of this application's architecture, as it defines the structure and behavior of your data.



*   `routes`: 

    This directory contains the routes for your application, which define the various endpoints that clients can use to interact with your API.

    Here's a brief explanation of each file:

    *   `auth.js`: This file defines the authentication routes for your application, such as registering new users, logging in, and logging out.
      ``` NOTE: more information in README_Security.md```

    *   `cart.js`: This file defines the routes for managing a user's shopping cart, such as adding or removing items from the cart.

    *   `order.js`: This file defines the routes for managing orders, such as creating new orders, retrieving order history, and updating the status of an order.

    *   `product.js`: This file defines the routes for managing products, such as retrieving a list of all products, creating new products, and updating or deleting existing products.

    *   `stripe.js`: This file defines the routes for integrating with the Stripe payment API, which allows users to make purchases using their credit card or other payment methods.

    *   `user.js`: This file defines the routes for managing user accounts, such as updating a user's profile information or deleting a user's account.

    *   `verifyToken.js`: This file contains middleware functions for verifying user authentication tokens, which are used to ensure that only authorized users can access certain routes.

Each route file likely defines multiple endpoints for performing different operations on the corresponding data type, such as GET, POST, PUT, and DELETE requests. These routes are used by clients to interact with your API and perform operations like adding items to a cart, submitting an order, or updating a user's account information.

Overall, the routes directory is an important part of this application's architecture, as it defines the various endpoints that clients can use to interact with your API and perform operations on your data.

## Stripe :
Stripe is a popular payment processing platform that allows you to accept payments online. Here are the basic steps for integrating Stripe into your React.

NOTE : more information in STRIPE readme. 



