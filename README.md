# Warehouse Management System

This is a web application built using ReactJS, Redux, React Router DOM, and Tailwind CSS for managing warehouses. It consists of two main pages: a warehouse listing page and a warehouse details page.

## Features

### Page 1: Warehouse Listing

- Display a list of warehouses from the provided JSON file.
- Search warehouses by name.
- Filter warehouses by city, cluster, and available space limit.

### Page 2: Warehouse Details

- Clicking on a warehouse in the listing page redirects to its details page.
- Edit warehouse information such as cluster, warehouse name, city, available space, and live status.
- Additional feature to add custom fields to a warehouse.

## Tech Stack

- ReactJS: Frontend library for building user interfaces.
- Redux: State management library for managing application state.
- React Router DOM: Library for declarative routing in React applications.
- Tailwind CSS: Utility-first CSS framework for styling.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Lok-ii/Warehouse-app.git
```

```bash
cd Warehouse-app
npm i
npm run dev
```
The application should now be running on http://localhost:5173.

## Dependencies

- [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit): Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.
  - Version: ^2.2.1
  - [npm](https://www.npmjs.com/package/@reduxjs/toolkit)
- [nanoid](https://www.npmjs.com/package/nanoid): A tiny (108 bytes), secure, URL-friendly, unique string ID generator for JavaScript.
  - Version: ^5.0.6
  - [npm](https://www.npmjs.com/package/nanoid)
- [react](https://www.npmjs.com/package/react): A JavaScript library for building user interfaces.
  - Version: ^18.2.0
  - [npm](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom): This package serves as the entry point of the DOM-related rendering paths.
  - Version: ^18.2.0
  - [npm](https://www.npmjs.com/package/react-dom)
- [react-icons](https://www.npmjs.com/package/react-icons): Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
  - Version: ^5.0.1
  - [npm](https://www.npmjs.com/package/react-icons)
- [react-redux](https://www.npmjs.com/package/react-redux): Official React bindings for Redux.
  - Version: ^9.1.0
  - [npm](https://www.npmjs.com/package/react-redux)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): DOM bindings for React Router.
  - Version: ^6.22.1
  - [npm](https://www.npmjs.com/package/react-router-dom)

## Data Handling

- The provided JSON data is loaded into the Redux store for efficient data management.
- Redux selectors are used to optimize store calls and improve performance.

## Author

Lokesh Kataria

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

