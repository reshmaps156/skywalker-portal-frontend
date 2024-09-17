## Skywalker Portal

Skywalker portal is a web application that allows users to submit their complaints to the legendary superhero Alden Skywalker, who resolves the issues and provides updates. This app uses a dark, sleek design to reflect the heroic yet mysterious persona of Skywalker.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Code Structure](#code-structure)
- [External Libraries](#external-libraries)
- [Screenshots](#screenshots)


## Overview

The Skywalker-portal  Grievance App is designed for users to file complaints that will be resolved by the superhero Alden Skywalker. The app is built with React.js and Node.js (MERN Stack) and leverages a modern, minimalist design.


## Features

- **Modern homepage**: The homepage uses storytelling techniques to introduce users to the app's purpose.
- **Grievance Form**: Users can submit their complaints via a form.
- **Dynamic UI**: Modern UI components and transitions make the app visually appealing and responsive.
- **Email Notifications**: Sends an email notification to the admin when a user logs grievances.
- **Chatbot**: A virtual assistant to handle queries.


## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/reshmaps156/skywalker-portal-frontend.git
2. Install the required dependencies
   ```bash
   npm install
3. Start the application
   ```bash
   npm run dev

## Code structure

```bash
/src
├── /assets                    # Images, icons, and other assets
├── /components                
│   ├── Chatbot.jsx            # Chatbot
│   ├── chatbot.css            # style sheet for chatbot 
├── /layout
│   ├── Footer.jsx             # Footer section
│   ├── Header.jsx             # Navbar
├── /pages
│   ├── about.css              # style sheet for About page
│   ├── About.jsx              # About page
│   ├── Contact.css            # stylesheet for Contact us
│   ├── Contact.jsx            # Contact us
│   ├── ErrorZone.jsx          # 404 Page not found
│   ├── GrievanceForm.jsx      # grievance submission page
│   ├── home.css               # style sheet for Home page
│   ├── Home.jsx               # Home page
├── /services
│   ├── api.js                 # API calls
│   ├── commonApi.js           # Axios configuration  
│   ├── serverURL.js           # server url link
├── App.jsx                    # Main app component handling routes 
├── appStyle.module.css        # Global app styling using CSS modules          
├── bootstrap.min.css          # Bootstrap styling  
├── index.css                  # General styling for the app 
├── main.jsx                   # Application entry point
```

## External libraries

  - Bootstrap 
  - React Bootstrap
  - Mui Material
  - Framer Motion for animations
  - FontAwesome
  - Axios
  - React toastify
  - React Router DOM
  - React Pro Sidebar
  - React-circular-progressbar

## Screen shots
![Homepage Screenshot](assets/home.png)





Developed with ❤️ by Reshama PS