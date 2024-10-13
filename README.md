# Distinction

# Smart Room IoT Dashboard

## Project Overview
This project involves creating a scalable IoT solution for monitoring and controlling the temperature of a smart room. The solution comprises an API server built using Node.js, a MongoDB database for storing temperature data, a web dashboard for real-time visualization, and an MQTT client for publishing sensor data. The system also provides a user interface to control a heater based on temperature readings.

## Components

### 1. Server (Backend API)
- **Technologies Used**: Node.js, Express, MongoDB
- **File**: `server.js`
- **Functionality**:
  - Connects to a MongoDB database to store temperature and heater status data.
  - Serves a static HTML file (`index.html`) as the main dashboard.
  - Provides an API endpoint (`/fetchTemperatures`) to fetch the last 10 temperature records from the database.

### 2. Frontend (Web Dashboard)
- **Technologies Used**: HTML, CSS, JavaScript, Chart.js
- **File**: `index.html`
- **Functionality**:
  - Displays a real-time temperature chart and a table with temperature and heater status information.
  - Provides an interactive toggle to control the heater.
  - Allows users to switch between light and dark modes.

### 3. MQTT Client (Data Publisher)
- **Technologies Used**: Node.js, MQTT.js
- **File**: `client.js`
- **Functionality**:
  - Connects to an MQTT broker (`broker.hivemq.com`) to publish temperature data.
  - Randomly generates temperature values between 10°C and 25°C.
  - Publishes temperature readings every 5 seconds to the topic `/smartroom/heater100`.

### 4. Node-RED Flow
- **Technologies Used**: Node-RED, MongoDB
- **Functionality**:
  - Manages the flow of sensor data and controls the heater.
  - Processes incoming temperature data, stores it in MongoDB, and communicates with the heater control system.

## Features
- **Temperature Visualization**: The real-time temperature chart provides visual insight into the current environment conditions.
- **Heater Control**: The heater can be manually turned on or off using the web dashboard toggle.
- **Dark/Light Mode**: A theme toggle for dark or light mode enhances user experience.
- **MQTT Communication**: The system uses MQTT to simulate real-time temperature sensor data publishing, making it scalable for IoT environments.

## Setup and Usage
1. **Clone the Repository**: Clone the project repository to your local machine.
2. **Install Dependencies**:
   - Run `npm install` to install all the necessary dependencies for both `server.js` and `client.js`.
3. **Start the Backend Server**:
   - Run `node server.js` to start the backend server on port 3000.
4. **Run the MQTT Client**:
   - Run `node client.js` to start publishing temperature data.
5. **Open the Dashboard**:
   - Visit `http://localhost:3000` in your browser to view the Smart Room Dashboard.
6. **Node-RED Flow**:
   - Import the Node-RED flow to connect to the MQTT broker and MongoDB.

## Project Goals
- **Scalability**: The system is designed to be scalable, handling more rooms or temperature sensors with minimal modification.
- **User Control**: Provides manual control for the heater and real-time monitoring for user comfort.
- **Data Persistence**: Temperature readings are stored in MongoDB for historical analysis.

## Future Improvements
- **Automated Heater Control**: Implement logic to automatically turn the heater on or off based on temperature thresholds.
- **Add More Sensors**: Integrate additional sensors like humidity and CO2 to enhance the smart room capabilities.
- **Mobile Interface**: Develop a mobile version of the dashboard for easier access and control.
