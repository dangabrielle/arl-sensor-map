"use client";
import React from "react";
import Particles from "../components/Particles";
import GradualSpacing from "../components/GradualSpacingText";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <Particles className="h-full w-full absolute z-0" />
      <div className="flex flex-col absolute z-50 items-center h-full w-full overflow-y-auto overflow-x-hidden">
        <div className="mt-10 mr-10 ml-10 mb-4">
          <GradualSpacing
            text="Project Summary"
            duration={0.6}
            delayMultiple={0.05}
            className="text-center text-4xl font-bold tracking-[-0.1em] text-slate-200 md:text-6xl md:leading-[5rem]"
          />
        </div>
        <div className="mb-4 -mt-1 flex flex-col items-center text-sm md:text-base italic text-zinc-900">
          <h1>Created by: Gabrielle Dang</h1>
          <h3>Applied Research Laboratory Summer 2024 P3I Intern</h3>
        </div>
        <nav className="flex items-center justify-evenly ml-10 mr-10 mb-2 w-full text-sm md:text-lg font-bold">
          <div className="hover:bg-slate-300 hover:scale-105 p-1 pr-3 pl-3 rounded">
            <a href="https://github.com/dangabrielle" target="_blank">
              Github
            </a>
          </div>
          <div className="hover:bg-slate-300 hover:scale-105 p-1 pr-3 pl-3 rounded">
            <a
              href="https://www.linkedin.com/in/gabrielle-dang/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="hover:bg-slate-300 hover:scale-105 p-1 pr-3 pl-3 rounded">
            <a href="/map">Map</a>
          </div>
          <div className="hover:bg-slate-300 hover:scale-105 p-1 pr-3 pl-3 rounded">
            <a href="/api/auth/logout" target="_blank">
              Logout
            </a>
          </div>
        </nav>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: [0.25, 0.1, 0.05, 1.1], duration: 1 }}
          className="bg-slate-200 bg-opacity-40 md:ml-10 md:mr-10 ml-5 mr-5 p-4 md:p-6 rounded-lg shadow-md shadow-slate-700"
        >
          <h1 className="font-bold text-lg md:text-2xl">PURPOSE</h1>

          <h3 className="text-sm md:text-base">
            Sensor data visualization is a critical requirement for common
            operations at the Applied Research Laboratory (ARL). Currently, ARL
            utilizes open source software for real-time visualization, such as
            <a
              href="https://github.com/brian7704/OpenTAKServer"
              target="_blank "
              className="font-bold text-blue-800 hover:bg-slate-300 rounded p-1 px-1"
            >
              OpenTak.
            </a>
            This past summer, I developed a customized implementation of OpenTak
            using current emerging web technologies. To do this, I utilized the
            <a
              href="https://leafletjs.com/index.html"
              target="_blank "
              className="font-bold text-blue-800  hover:bg-slate-300 rounded p-1 px-1"
            >
              NextJS
            </a>
            frontend framework and the React
            <a
              href="https://nextjs.org/docs"
              target="_blank "
              className="font-bold text-blue-800  hover:bg-slate-300 rounded p-1 px-1"
            >
              Leaflet
            </a>
            library to render an interactive map displaying real-time sensor
            locations. As sensors typically communicate using various
            transmission protocols, I incorporated 3 of the most common:
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP"
              target="_blank "
              className="font-bold text-blue-800  hover:bg-slate-300 rounded p-1 px-1"
            >
              HTTP
            </a>
            /
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP"
              target="_blank "
              className="font-bold text-blue-800 hover:bg-slate-300 rounded p-1 px-1"
            >
              Websocket
            </a>
            /
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP"
              target="_blank "
              className="font-bold text-blue-800 hover:bg-slate-300 rounded p-1 px-1"
            >
              MQTT
            </a>
            via a custom Nodejs server. Other technologies used include Prisma
            Postgres for data storage, Google Auth0/NextJS SDK for
            authentication, and MagicUI/Framer Motion/Tailwind for an
            interactive user interface.
          </h3>
          <h1 className="font-bold text-lg md:text-2xl mt-5">NEXT STEPS</h1>
          <h3 className="text-sm md:text-base">
            This prototype serves as both an initial implementation and
            potential proof of concept for future use by the ARL. As this idea
            is still in the early stages of the software development life cycle,
            future refinements and features include:
          </h3>
          <ul className="text-sm md:text-base ml-5 mt-2">
            <li>
              • Draggable timeline bar displaying sensor locations within the
              past 12 hours
            </li>
            <li>• Chat box for real time communication between users </li>
            <li>• Search bar when viewing a long list of sensors</li>
          </ul>
          <h1 className="font-bold text-lg md:text-2xl mt-5">
            Protocol Support
          </h1>
          <ul className="text-sm md:text-base ml-5">
            <li>
              •
              <a
                href="https://socket.io/docs/v4/troubleshooting-connection-issues/"
                target="_blank"
                className="font-bold text-blue-800 hover:bg-slate-100 rounded p-1 px-1"
              >
                Websocket IO
              </a>
            </li>
            <li>
              •
              <a
                href="https://www.emqx.com/en/blog/how-to-use-mqtt-in-nodejs"
                target="_blank"
                className="font-bold text-blue-800 hover:bg-slate-100 rounded p-1 px-1"
              >
                Message Queuing Telemetry Transport (MQTT)
              </a>
              : Utilized HiveMQ Public Broker and MQTTX for testing
            </li>
            <li>
              •
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP"
                target="_blank"
                className="font-bold text-blue-800 hover:bg-slate-100 rounded p-1 px-1"
              >
                HyperText Transfer Protocol (HTTP)
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default page;
