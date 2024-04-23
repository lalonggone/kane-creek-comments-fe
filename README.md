# Kane Creek Comments

This is a web application designed to display comments from a survey regarding the Kane Creek development in Grand County, Utah. It serves as a platform for anyone interested in the conversation to view and participate. My goal with this app is to help promote transparency, foster more engagement, and improve decision-making regarding this complex issue in Moab. For more info, visit kanecreekwatch.org

## Features
- user-friendly and intuitive interface allowing for easy navigation through thousands of comments on the development
- dynamic search allows users to find specific details quickly based on keywords
- ability to filter comments based on Moab residency

## Demo
(coming soon)

## Installation and Setup
1. Clone this repository to your local machine:
```git@github.com:lalonggone/kane-creek-comments-fe.git```

2. Navigate to the project directory:
```cd kane-creek-comments-fe```

3. Install the necessary dependencies:
```npm install```

4. Start the application:
```npm run dev```

5. Open the app at http://localhost:5173/ in your browser.


## Usage
Once the frontend is running, you can use the app just like the deployed version. Search keywords such as "grew up in moab", "mountain biking", or "local business" to filter comments. You can select "Moab residents" to filter by that as well. 

## Testing

1. Install Cypress:
```npm install cypress --save-dev```

2. Open Cypress Test Runner: ```npm test```

If that command doesnt work, check the .package-json file and make sure yout have ```"test": "cypress open"``` in "scripts". 

3. In the Cypress Test runner, you'll want to select the E2E Testing type and then your preferred browser (Google Chrome for most probably). 

## Technologies Used
- HTML
- CSS/SCSS
- JSX / React
- End-to-end testing with Cypress
- Vite

Questions? Comments? Feedback? Thanks for looking! 
