# ARL SENSOR MAP

### This project is still in development.

### Goal:

Create a Common Operating Picture software prototype designed for situational awareness and use by the Applied Research Laboratory, Hawai'i. This will consist of a map displaying sensor data updates in real-time, and is aimed to provide critical information for the Department of Defense, in order to make accurate decisions.

### View Deployed ARL Sensor Map:

[ARL Sensor Map](https://arl-sensor-map.vercel.app/), or click on the link on the top right corner.

### Map Overview

![](/client/public/demo.gif)

### Installation:

Clone repository: `git clone` <br />
Enter client directory: `cd client` <br />
Install dependencies: `npm install` or `yarn install` <br />
Set up environment variables:

- In `.env.example`, enter environment variables as directed
- Omit auth0 env variables if authentication will not be used

Start dev server: `npm run dev` on `localhost:3000`

Enter server directory: `cd ../server` <br />
Install dependencies: `npm install` or `yarn install` <br />
Set up environment variables:

- In `.env.example`, enter environment variables as directed
- Omit API_KEY if not querying from an external server

Start dev server: `npm start` on `localhost:3001`

### Project Wireframe

![](/client/public/ARL-Sensor-Map-Wireframe.png)
