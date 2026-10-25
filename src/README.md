
@'
# Assignment 12: React UI Component Library

**Student Name:** Karanveer Singh  
**GitHub Repository:** https://github.com/karanveersingh10/singh_karanveer_ui_garden

## 1. Project Overview

This project is a reusable UI Component Library built using React,
TypeScript, Styled Components, and Storybook.

The library contains reusable components with default and disabled
states where applicable.

## 2. Components

- Button
- Label
- Text
- Dropdown
- RadioButton
- Img
- HeroImage
- Card
- Table
- TableHeader
- TableRow
- TableCell
- TableFooter

## 3. Technologies

- React and TypeScript
- Styled Components
- Storybook
- Jest and React Testing Library
- Docker and Nginx
- Git and GitHub

## 4. Install Dependencies

Run from the project folder.

```powershell
# Install the packages required by the project.
npm.cmd install
```

## 5. Run the React Application

```powershell
# Start the React development server.
npm.cmd start
```

Open http://localhost:3000.

## 6. Run Storybook

Open another terminal in the project folder.

```powershell
# Start Storybook to demonstrate the components.
npm.cmd run storybook
```

Open http://localhost:6006.

Show the Default and Disabled stories for the components.

## 7. Run Automated Tests

```powershell
# Run all tests once without watch mode.
npm.cmd test -- --watchAll=false
```

The last reported successful run passed 26 tests across 13 test suites.
Run the command again before submission to confirm the results.

## 8. Production Build

```powershell
# Build the React application for production.
npm.cmd run build
```

## 9. Docker Demonstration

Make sure Docker Desktop is running.

```powershell
# Build the Docker image from the Dockerfile in this folder.
docker build -t singh_karanveer_ui_garden .
```

```powershell
# Start the container and map computer port 8083 to container port 80.
docker run --name singh_karanveer_coding_assignment12 -p 8083:80 -d singh_karanveer_ui_garden
```

```powershell
# Check that the container is running.
docker ps
```

```powershell
# View the container logs if you need to troubleshoot.
docker logs singh_karanveer_coding_assignment12
```

Open http://localhost:8083 to view the production application.

To stop and remove the container after the demonstration:

```powershell
# Stop the container.
docker stop singh_karanveer_coding_assignment12

# Remove the stopped container.
docker rm singh_karanveer_coding_assignment12
```

## 10. Git and GitHub

Repository:
https://github.com/karanveersingh10/singh_karanveer_ui_garden

```powershell
# Check the installed Git version.
git --version

# Check the current branch and working tree.
git status

# Show the configured GitHub remote.
git remote -v

# Show the current branch name.
git branch --show-current

# Show recent commits.
git log -5 --oneline
```

### Upload Changes to GitHub

Use these commands when you have new or modified files.

```powershell
# Stage the project changes.
git add .

# Review which files are staged.
git status

# Save the staged changes in a commit.
git commit -m "Update Assignment 12 README and documentation"

# Upload the current branch to its configured GitHub remote.
git push
```

If Git reports "nothing to commit", there are no new changes to commit.

If the GitHub remote is not configured, add it once:

```powershell
# Connect this local project to the GitHub repository.
git remote add origin https://github.com/karanveersingh10/singh_karanveer_ui_garden.git
```

If your branch is named master but the assignment repository should use main:

```powershell
# Rename the current local branch to main.
git branch -M main

# Upload main and set its upstream tracking branch.
git push -u origin main
```

Do not add origin again if it already exists. Never put your GitHub password or access token in this file.

## 11. Instructor Demonstration Order

1. Introduce the project and explain its purpose.
2. Show the component folders and source files in VS Code.
3. Start Storybook and demonstrate the components.
4. Show the Default and Disabled stories.
5. Run the automated tests and show the results.
6. Show the Dockerfile and explain its build stages.
7. Build and run the Docker container.
8. Open http://localhost:8083.
9. Show the GitHub repository and recent commits.

## 12. Docker Configuration

The Dockerfile uses a multi-stage build.

The first stage builds the React application.
The second stage uses Nginx to serve the production files.

Container port 80 is mapped to port 8083 on the computer.

## Author

Karanveer Singh
