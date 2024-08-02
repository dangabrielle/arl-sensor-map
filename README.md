# ARL SENSOR MAP

Applied Research Laboratory, University of Hawai'i <br />
P3I Summer Internship 2024

### Goal:

Create a Common Operating Picture software prototype designed for situational awareness and use by the Applied Research Laboratory, Hawai'i. This will consist of a map displaying sensor data updates in real-time, and is aimed to provide critical information for the Department of Defense, in order to make accurate decisions.

### View deployed ARL Sensor Map:

[ARL Sensor Map](https://arl-sensor-map.vercel.app/), or click on the link on the top right corner.

![](/client/public/demo.gif)

### Technologies used:

NextJS, React, Javascript, Typescript, Tailwind, CSS, HTML, Nodejs, WebsocketIO, MQTT, HTTP, Prisma, Postgres, Vercel, Heroku, Framer Motion, MagicUI, Google Auth0/NextJS SDK, VSCode

### Installation:

Clone repository: `git clone https://github.com/dangabrielle/arl-sensor-map.git` <br />
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

### Future Enhancements

- Draggable timeline bar displaying sensor locations within the past 12 hours
- Chat box for real time communication between users
- Search bar when viewing a long list of sensors
