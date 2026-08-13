# Hi-Tech Server API

Backend server for the Hi-Tech admin panel and properties application. Built with Node.js, Express, and MongoDB.

## Features
- RESTful API for managing properties, categories, and enquiries.
- Admin authentication and profile management.
- File upload support using Multer for property images and category icons.
- Dashboard statistics endpoints.

## Technologies Used
- **Node.js** & **Express.js** for the backend framework.
- **MongoDB** & **Mongoose** for database and object modeling.
- **Multer** for handling multipart/form-data (file uploads).
- **CORS** for cross-origin resource sharing.
- **Dotenv** for environment variable management.

## Setup & Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Environment Variables:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

3. Start the server:
   ```bash
   npm start
   ```
   *Note: Ensure your MongoDB server is running or your MongoDB Atlas cluster is accessible.*

## API Endpoints Summary

### Admin
- `POST /api/admin/login` - Admin login authentication
- `GET /api/admin/profile` - Get admin profile details
- `PUT /api/admin/profile` - Update admin profile information

### Properties
- `GET /api/properties` - Get a list of all properties
- `POST /api/properties` - Create a new property (supports `featuredImage` and `galleryImages` uploads)
- `PUT /api/properties/:id` - Update an existing property
- `DELETE /api/properties/:id` - Delete a property

### Categories
- `GET /api/categories` - Get all property categories
- `POST /api/categories` - Create a new category (supports `image` and `icon` uploads)
- `DELETE /api/categories/:id` - Delete a category

### Enquiries
- `GET /api/enquiries` - Get all customer enquiries
- `PUT /api/enquiries/:id` - Update an enquiry status
- `DELETE /api/enquiries/:id` - Delete an enquiry

### Dashboard
- `GET /api/dashboard/stats` - Retrieve summary statistics for the admin dashboard (counts for properties, active properties, enquiries, etc.)

## Directories
- `/models`: Contains the Mongoose database models (`Admin`, `Property`, `Enquiry`, `Category`).
- `/uploads`: Automatically created directory where uploaded images and icons are served statically.
