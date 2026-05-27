# Student Grades Web Application

## Overview
This project is a web application designed to manage student grades. It allows users to input grades for different subjects and displays them in a structured table format. The application is built using HTML, CSS, and JavaScript, with jQuery for enhanced DOM manipulation.

## Project Structure
```
student-grades-web
├── src
│   ├── index.html        # HTML structure of the web application
│   ├── css
│   │   └── styles.css    # CSS styles for layout and design
│   ├── js
│   │   └── main.js       # JavaScript for form handling and data manipulation
│   └── lib
│       └── jquery.min.js  # Minified jQuery library
├── package.json           # npm configuration file
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

## Features
- **Responsive Design**: The layout adapts to different screen sizes, providing a user-friendly experience on both desktop and mobile devices.
- **Form Validation**: Ensures that the grades entered are valid numbers between 0 and 10 and that no fields are left empty.
- **Dynamic Button Color**: The color of the submit button changes based on the last digit of the student ID (green for even, blue for odd).
- **Real-time Data Entry**: Users can add grades to the table without reloading the page, thanks to jQuery.
- **Delete Functionality**: Each entry in the table has a delete button that removes the entry with a smooth animation.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd student-grades-web
   ```
3. Install dependencies (if any):
   ```
   npm install
   ```
4. Open `src/index.html` in your web browser to view the application.

## Usage
- Fill in the form with the subject name, coefficient, and grade.
- Click the submit button to add the entry to the table.
- Use the delete button next to each entry to remove it from the table.

## Author
Người thực hiện: [Họ tên sinh viên] - [Mã sinh viên]