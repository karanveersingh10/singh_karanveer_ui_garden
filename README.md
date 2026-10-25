
# Karanveer Singh - UI Component Library

## Project Overview

This project is a reusable UI Component Library created using React, TypeScript, Styled Components, and Storybook for Assignment 12: Web Component Library.

The purpose of this project is to create reusable components, document their usage in Storybook, test their functionality, and build a production-ready web application using Docker.

## Technologies Used

- React
- TypeScript
- Styled Components
- Storybook
- Jest and React Testing Library
- Docker
- NGINX
- Git and GitHub

## Components

The component library includes:

1. Button
2. Label
3. Text
4. Dropdown
5. RadioButton
6. Img
7. HeroImage
8. Card
9. Table
10. TableHeader
11. TableRow
12. TableCell
13. TableFooter

## Installation

Clone the repository:

```powershell
git clone https://github.com/karanveersingh10/singh_karanveer_ui_garden.git
```

Navigate to the project folder:

```powershell
cd singh_karanveer_ui_garden
```

Install the dependencies:

```powershell
npm.cmd install
```

## Run the React Application

```powershell
npm.cmd start
```

The application will normally be available at:

http://localhost:3000

## Run Storybook

Start Storybook:

```powershell
npm.cmd run storybook
```

Open Storybook in your browser:

http://localhost:6006

Storybook documents the reusable components and allows their different states and properties to be explored.

## Run Tests

Run all tests:

```powershell
npm.cmd test -- --watchAll=false
```

## Create a Production Build

```powershell
npm.cmd run build
```

This command creates an optimized production build in the `build` directory.

## Docker Deployment

The application is packaged into a Docker image and served through NGINX.

### Build the Docker Image

```powershell
docker build -t singh_karanveer_ui_garden .
```

### Run the Docker Container

```powershell
docker run --name singh_karanveer_coding_assignment12 -p 8083:80 -d singh_karanveer_ui_garden
```

### Verify the Running Container

```powershell
docker ps
```

### Open the Dockerized Application

http://localhost:8083

The application was opened successfully in the browser, displaying:

- My UI Component Library
- Assignment 12: React and Storybook

### Stop the Container

```powershell
docker stop singh_karanveer_coding_assignment12
```

### Start the Container Again

```powershell
docker start singh_karanveer_coding_assignment12
```

### Remove the Container

Stop and remove the container when it is no longer needed:

```powershell
docker stop singh_karanveer_coding_assignment12
docker rm singh_karanveer_coding_assignment12
```

## Docker Configuration

The Dockerfile uses a multi-stage build:

1. Uses Node.js to install dependencies and build the React application.
2. Uses NGINX to serve the optimized production files.
3. Exposes port 80 inside the container.
4. Maps port 8083 on the local computer to port 80 inside the container.

The `.dockerignore` file excludes unnecessary files such as `node_modules`, `build`, and `.git` from the Docker build context.

## GitHub Repository

Repository:

https://github.com/karanveersingh10/singh_karanveer_ui_garden

## Author

**Karanveer Singh**

Assignment 12: Web Component Library
