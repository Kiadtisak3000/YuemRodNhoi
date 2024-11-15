# YuemRodNhoi

## Installation

To clone this repository to your local machine, open your terminal and run the following command:
```bash
git clone https://github.com/WebApp2563/YuemRodNhoi.git
```

## Set up dotenv
This project utilizes dotenv to manage environment variables. Follow these steps to set it up:
1. Create a .env file   In the Backend directory of your project, create a file named .env.
2. Populate the .env file
  Add the following content to your .env file, replacing the placeholder values with your actual configuration:
```
port=3000        # Listening port (e.g., 3000)
secret_key=your_secret_key   # Your secret key
db=your_mongodb_url      # Your MongoDB connection URL
frontendUrl=Url # Front-end URL with port (e.g., http://localhost:8080)
```

## Setting up MongoDB:
    Database:rentalcars

    collection:

        users

        cars

        reservation

## Install All Dependencies

Navigate to both the ./Backend and ./Frontend directories and run the following command in each:
```bash
npm i
```
## start Frontend Application:
Navigate to ./Frontend/ 
```bash
npm start
```
## start Backend Application:
Navigate to ./Backend/ 
```bash 
node ./rentalcars.js
```
