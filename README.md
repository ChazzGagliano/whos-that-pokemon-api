# whos-that-pokemon-api
Welcome to the Who's That Pokémon API! This project is a fun game inspired by the intermission "Who's That Pokémon?" from the 90s Pokémon series. Users are challenged to correctly type out the name of the Pokémon displayed on the screen. There are different difficulty levels to choose from:

Technologies Used
MongoDB: For database management
Express.js: For building the backend API
React: For building the frontend interface
Node.js: For running the server
PokeAPI: For retrieving Pokémon data (https://pokeapi.co/)
Installation
To run this project locally, follow these steps:

Future Plans:
- Using MongoDB, allow users to create and log into their accounts
- Allow users to save data from the api into their profile

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/whos-that-pokemon-api.git
Navigate to the project directory:

bash
Copy code
cd whos-that-pokemon-api
Install the server dependencies:

bash
Copy code
npm install
Navigate to the client directory and install the client dependencies:

bash
Copy code
cd client
npm install
Set up environment variables:

Create a .env file in the root directory with the following content:

env
Copy code
MONGO_URI=your_mongodb_connection_string
POKEAPI_BASE_URL=https://pokeapi.co/api/v2/
Start the server:

bash
Copy code
npm start
Start the client:

bash
Copy code
cd client
npm start

