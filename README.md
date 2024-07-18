# Parking Lot by Devansh Dalmia

![Parking Lot Logo](./parking-lot-frontend.webp)

# Overview

The Parking Lot Frontend is a user-friendly web application developed using Next.js, Tailwind CSS, and TypeScript. It provides an interactive interface for managing parking lots, parking and unparking vehicles, and viewing free and occupied slots.

# Features

- **Parking Lot Creation**: Initialize parking lots with multiple floors and slots.
- **Vehicle Management**: Park and unpark vehicles, ensuring optimal slot usage.
- **Slot Display**: View free and occupied slots for different vehicle types.
- **Interactive UI**: User-friendly interface with easy navigation.

# Special Features

- **Automated Slot Allocation**: Automatically assigns the best available slot based on the vehicle type and slot availability.
- **Comprehensive Reporting**: Displays detailed information about free and occupied slots.

# Table of Contents

1. [Demo](#demo)
2. [Installation](#installation)
3. [Usage Guide](#usage-guide)
4. [Edge Cases](#edge-cases)
5. [Future Scope](#future-scope)
6. [Dependencies And Technology Stack](#dependencies-and-technology-stack)
7. [Contribution](#contribution)
8. [Authors](#authors)
9. [License](#license)

# Demo

[Live Demo](https://parkinglot-devansh.vercel.app/)

Please Note:

1. Use of Google Chrome is recommended.
2. Use on laptop/desktop for the best possible experience as of now.

# Installation

## Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.22.x or later)
- A modern web browser (Chrome, Firefox, Edge, or Safari)

1. Clone the repo

    ```sh
    git clone https://github.com/devanshdalmia01/parking-lot-frontend.git
    ```

2. Navigate to the project directory

    ```sh
    cd parking-lot-frontend && npm install
    ```

3. Run

    ```sh
    npm run dev
    ```

4. Open http://localhost:3000/ to view it in the browser

# Usage Guide

## Navigating the Application

- **Home**: Access the main interface by navigating to the root URL `/`.
- **Parking**: Park a vehicle by providing its type, registration number, and color.
- **Unparking**: Unpark a vehicle using its ticket ID.
- **Slot Display**: View free and occupied slots for different vehicle types.

## Managing Parking Lots

### **Creating Parking Lot**

Use the "Create Parking Lot" form to initialize a parking lot with a specified number of floors and slots per floor.

### **Parking Vehicles**

Use the "Park Vehicle" form to park a vehicle. Select the vehicle type, and provide the registration number and color.

### **Unparking Vehicles**

Use the "Unpark Vehicle" form to unpark a vehicle using its ticket ID.

### **Viewing Slot Information**

Select the vehicle type and display type (free count, free slots, occupied slots) to view detailed slot information.

# Edge Cases Handled

1. **Invalid Ticket Handling**: Ensures that only valid tickets can be used to unpark vehicles, preventing unauthorized operations.
2. **Full Parking Lot Handling**: Provides clear messages when no slots are available for parking.
3. **Concurrent Operations**: Manages simultaneous parking and unparking operations without data inconsistencies.

# Future Scope

1. **Advanced Search**: Implement advanced search functionality to locate vehicles by registration number or color.
2. **Mobile Optimization**: Optimize the application for mobile devices to enhance usability on smaller screens.
3. **Admin Dashboard**: Develop an admin dashboard for managing multiple parking lots and viewing detailed reports.
4. **Real-time Updates**: Implement real-time updates to reflect parking lot status without refreshing the page.

# Dependencies And Technology Stack

- **Next.js** - For building the user interface and handling server-side rendering.
- **Tailwind CSS** - For styling the application.
- **TypeScript** - For type-safe JavaScript code.

# Contribution

Contributions are welcome! Please fork the repository and submit pull requests to the main branch. For major changes, please open an issue first to discuss what you would like to change.

# Authors

## Devansh Dalmia

- [LinkedIn](https://www.linkedin.com/in/devanshdalmia1/)
- [GitHub](https://github.com/devanshdalmia01/)
- [Email](mailto:devanshdalmia1@gmail.com)

# License

[MIT](https://opensource.org/licenses/MIT)
