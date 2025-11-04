## TechNotes Backend

Node.js/Express API for the TechNotes MERN project. Connects to MongoDB via Mongoose, handles auth, users, notes, and dashboard features.

### Prerequisites
- Node.js 16+
- MongoDB (local or hosted)

### Installation
```bash
npm install
```

### Environment Variables
Create a `.env` in `backend/` with at least:
```env
NODE_ENV=development
PORT=3500
MONGO_URI=mongodb://localhost:27017/technotes

# JWT secrets (examples; use strong random values in production)
ACCESS_TOKEN_SECRET=replace_with_strong_secret
REFRESH_TOKEN_SECRET=replace_with_strong_secret

# Optional CORS allowlist (comma-separated origins)
ALLOWED_ORIGINS=http://localhost:3000
```

### Scripts
Defined in `package.json`:
```json
{
  "start": "node server",
  "dev": "nodemon server"
}
```

- `npm run dev`: start API with Nodemon (auto-restart on changes)
- `npm start`: start API with Node

### Run
```bash
# from backend/
npm run dev
# or
npm start
```
Server listens on `PORT` (default 3500) after MongoDB connects.

### Routes (mounted paths)
From `server.js` the following route modules are mounted:
- `/` static files from `public/` and root routes in `routes/root`
- `/auth` authentication routes in `routes/authRoutes`
- `/users` user routes in `routes/userRoutes`
- `/notes` note routes in `routes/noteRoutes`
- `/dashboard` dashboard routes in `routes/dashboardRoutes`

Note: See files in `routes/` and `controllers/` for specific endpoints and request/response shapes.

### Middleware & Utilities
- Custom logger: `middleware/logger`
- Error handler: `middleware/errorHandler`
- CORS: `config/corsOptions` (used with `cors`)
- Cookie parsing: `cookie-parser`
- Async error handling: `express-async-errors`
- Mongo connection: `config/dbConn`

### 404 Handling
All unmatched requests return 404:
- HTML: `views/404.html`
- JSON: `{ "message": "404 Not Found" }`
- Text: `404 Not Found`

### Logs
Mongo connection errors are recorded via `logEvents` into `logs/mongoErrLog.log`.

### Project Structure (key parts)
```
backend/
  config/
  controllers/
  middleware/
  models/
  routes/
  public/
  views/
  logs/
  server.js
```

### Tech Stack
- Express 4, Mongoose 6
- JWT (`jsonwebtoken`), `bcrypt`
- `cors`, `cookie-parser`, `date-fns`

