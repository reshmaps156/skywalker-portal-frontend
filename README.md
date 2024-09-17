## Skywalker Portal

Skywalker portal is a web application that allows users to submit their complaints to the legendary superhero Alden Skywalker, who resolves the issues and provides updates. This app uses a dark, sleek design to reflect the heroic yet mysterious persona of Skywalker.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Code Structure](#code-structure)
- [External Libraries](#external-libraries)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Features

- **Modern homepage**: The homepage uses storytelling techniques to introduce users to the app's purpose.
- **Grievance Form**: Users can submit their complaints via a form.
- **Admin Dashboard**: Skywalker (admin) can view and manage the grievances.
- **Dynamic UI**: Modern UI components and transitions make the app visually appealing and responsive.
- **Email Notifications**: Sends an email notification to the admin when a user logs grievances.
- **Chatbot**: A virtual assistant to handle queries.
- **Charts and Analytics**: The admin dashboard features data visualization with charts to track grievances.

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
/src
├── /assets                    # Images, icons, and other assets
├── /components                
│   ├── Chatbot.jsx            # Chatbot
│   ├── chatbot.css
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
├── App.jsx                    # Main app component
├── appStyle.module.css                  
├── bootstrap.min.css
├── index.css  
├── main.jsx
