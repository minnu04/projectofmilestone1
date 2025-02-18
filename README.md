# ESHOP
## MILESTONE1🎯
This project was built by using MERN Stack. Through the mentor-guided project,I learnt to build scalable APIs. I learnt to implement secure login registration functionalities. -Database Schema Design:I explored how to create structured data models using MongoDB.
Backend Development: As a part of the project, I learnt to set up robust server-side logic with Node.js and Express. 

The overall vision, goals, and key features of the e-commerce application.Get inspired by a live demonstration of the completed application. Observe the app's functionality, user interface, and backend integration.

## MILESTONE2🐣
Set Up the Development Environment: Install the required tools and dependencies for the MERN stack project.
Understand Server-Client Interaction: Learn how the frontend (client) communicates with the backend (server) using APIs.
Set Up a Simple Server: Create a basic server using Node.js and Express to lay the foundation for the project.
## Key features of milestone 2 🛠️
Project Folder Structure: Learn to organize your project files into separate frontend and backend directories.
React Frontend Setup: Initialize a React application for building the user interface.
Node.js Backend Setup: Set up a simple Node.js server to prepare for API integration in future milestones.
Tailwind CSS Configuration: Integrate and configure Tailwind CSS to enable modern, responsive, and utility-based styling.
Login Page Development: Create the first user interface of your e-commerce application, focusing on both functionality and styling.

## MILESTONE3 🌐
## Key features of Milestone 3 🛠️
Backend folder structure:
Create a structured hierarchy for organizing routes, controllers, models, and middleware.

Server Setup:
Use Node.js and Express to create a backend server.
Configure the server to listen on a designated port. Database Connection
Integrate MongoDB for efficient data storage.
Confirm the connection between the server and MongoDB.

Error Handling:
Provide clear error messages for better debugging and user feedback.

Setting up backend folders and files.
Configuring and connecting the server to MongoDB.
Writing basic error-handling code.

## MILESTONE4 🌟
## Steps for Milestone 4 📝
Explaining and creating the User Model
Creating the User Controller
Setting up Multer for file uploads

We creatwd a model 
A model is like a detailed map or plan.
When you create a User Model, you’re designing how a user’s data (like name, email, and password) will look in the database. Imagine drawing a blueprint of a house.
The model is the map of what information you need to store for each user.
In MongoDB, we use something called Schemas to create a model.
A schema is a definition of what data should look like for that model.

we created a controller
A controller is a special part of the server that decides what happens when someone interacts with your app.
For example, if someone wants to sign up for your website, the controller will handle what happens when the data is sent to the server.
Think of the controller as a "manager" of requests and responses. It’s like the teacher in a classroom—telling the students (your app) what to do and ensuring everything goes smoothly.

we created a file upload with multer
Sometimes, your users might want to upload files like profile pictures.
To help with this, we use Multer, which is a tool that makes it easy to upload files to your server.
Multer will help us store user images in the backend and keep track of them. It's like a virtual file cabinet for storing pictures!

## MILESTONE5 💡
I created the frontend UI for users to register by filling out their details.
We ensured that user inputs (like email and password) are properly validated before they’re submitted. Update the README file: Don’t forget to document what you’ve accomplished!
# THE SIGN-UP PAGE
The Sign-Up page is where users can enter their details to create an account. This page will typically include fields like:
Name
Email
Password
This page allows users to provide their information, which will be sent to the server for processing.
We createD a simple yet effective sign-up form that looks clean and is user-friendly.

## Steps for Milestone 5 📝
In this milestone, you will work on the frontend while your mentor will guide you through:
Building the Sign-Up Page with HTML and CSS.
Adding form validation to ensure users input valid data.

## MILESTONE6 💥
Understand how to encrypt the passwords before saving.
Know how to store complete user data securely in the database.
### encrypting passwords
Protect User Data: Keeps passwords safe if hackers access the database.
Privacy: Ensures user passwords aren’t visible to anyone.
Compliance: Follows security laws like GDPR and PCI-DSS.
Stops Password Theft: Encrypted passwords can’t be easily stolen or guessed

## Steps for Milestone 6 📝
Encrypt the Password:
Use bcrypt to hash the user's password during signup.
Save the hashed password in the database instead of plain text.
Store Complete User Data:
Save all the user's data (e.g., name, email, etc.) in the database while ensuring that the password remains encrypted.