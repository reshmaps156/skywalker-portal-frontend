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

/src ├── /assets # Images, icons, and other assets ├── /components │ ├── Chatbot.jsx # Chatbot component │ ├── chatbot.css # Chatbot specific styles ├── /layout │ ├── Footer.jsx # Footer section │ ├── Header.jsx # Navbar section ├── /pages │ ├── about.css # Stylesheet for the About page │ ├── About.jsx # About page component │ ├── Contact.css # Stylesheet for the Contact Us page │ ├── Contact.jsx # Contact Us page component │ ├── ErrorZone.jsx # 404 Error page component │ ├── GrievanceForm.jsx # Grievance submission form component │ ├── home.css # Stylesheet for the Home page │ ├── Home.jsx # Home page component ├── /services │ ├── api.js # API calls for the app │ ├── commonApi.js # Axios configuration for API requests │ ├── serverURL.js # Server URL configuration ├── App.jsx # Main app component handling routes ├── appStyle.module.css # Global app styling using CSS modules ├── bootstrap.min.css # Bootstrap styling ├── index.css # General styling for the app ├── main.jsx # Application entry point


### Key Directories:
- **`/assets/`**: Holds static resources like images and icons.
- **`/components/`**: Contains reusable components like the `Chatbot`.
- **`/layout/`**: Contains layout components like the `Header` and `Footer`.
- **`/pages/`**: Main pages of the application such as `Home`, `Contact`, and `About`.
- **`/services/`**: Handles API calls and configuration for connecting to the server.
- **`App.jsx`**: The main app component responsible for routing.
- **`main.jsx`**: The app's entry point where the React app is initialized.
