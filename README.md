# Node.js TypeScript Template with EJS, Jest, and MongoDB

This is a template project for creating a Node.js web application using TypeScript. It includes EJS for templating, Jest for testing, MongoDB integration for database operations, and basic routes setup.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or accessible via connection string)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lakshaykamat/nodejs_typesript_template
   ```

2. Install dependencies:

   ```bash
   cd your-repository
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGODB_URI=mongodb://localhost:27017/your-database
   PORT=3000
   ```

   Replace `your-database` with the name of your MongoDB database.

## Usage

To start the server:

```bash
npm start
```

To run tests:

```bash
npm test
```

## Directory Structure

- `src/`
  - `routes/`: Contains route handlers
  - `views/`: Contains EJS templates
  - `index.ts`: Entry point of the application
- `test/`: Contains test files
- `jest.config.js`: Jest configuration file
- `tsconfig.json`: TypeScript configuration file
- `.env`: Environment variables file (not included in the repository, create your own)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
