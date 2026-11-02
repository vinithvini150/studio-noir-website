# Studio Noir — Photography Studio Website

A responsive five-page Indian photography studio website built with HTML, CSS, vanilla JavaScript, Node.js, Express and MongoDB.

## Pages
- `/` — Home
- `/gallery.html` — Filterable portfolio gallery
- `/services.html` — Studio services
- `/packages.html` — Package overview
- `/contact.html` — About, contact and enquiry form

## Requirements
- Node.js 18+
- MongoDB local instance or MongoDB Atlas connection string

## Run locally
1. Open this project folder in VS Code.
2. Install packages:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and set `MONGODB_URI`.
4. Start MongoDB if using a local database.
5. Run the app:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:5000`.

Check the API at `http://localhost:5000/api/health`.

## Important customisation before publishing
Search the project for `Studio Noir`, `98765 43210`, `hello@studionoir.in`, `Add your studio address`, and `wa.me/919876543210`. Replace these demo details with the real studio name, phone, email, address and WhatsApp number. Replace the sample Unsplash images with photographs you own or have permission to use. Add the real Google Maps embed on the contact page.

## Enquiry API
`POST /api/enquiries`

Example JSON:
```json
{
  "name": "Asha",
  "phone": "+919876543210",
  "email": "asha@example.com",
  "service": "Wedding photography",
  "eventDate": "2026-12-20",
  "message": "Wedding in Salem"
}
```

The API validates required fields and stores enquiries in MongoDB. Keep `.env` private and never commit it to GitHub.

## Notes
- The contact form requires a running MongoDB connection to save enquiries.
- The WhatsApp button is a direct link; update its number.
- Package prices are intentionally quote-based placeholders. Add confirmed pricing before going live.
- This starter does not include an admin dashboard, payment gateway, authentication or image-upload manager; those can be added as a second phase.
