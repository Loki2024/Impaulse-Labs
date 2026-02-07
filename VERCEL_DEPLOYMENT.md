# Deploying Impaulse Labs to Vercel

## Prerequisites
- Vercel account (https://vercel.com)
- PostgreSQL database (we recommend Vercel Postgres or any cloud DB like Neon, RDS, etc.)
- Environment variables ready

## Step 1: Push to GitHub
Make sure your code is pushed to GitHub:
```bash
git add .
git commit -m "ready for vercel deployment"
git push origin main
```

## Step 2: Connect to Vercel
1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Find and import your GitHub repository
4. Click "Continue"

## Step 3: Configure Environment Variables
In the Vercel dashboard, add these environment variables:

**Frontend Variables:**
- `VITE_GEMINI_API_KEY` - Your Gemini API key
- `VITE_ALPHA_VANTAGE_API_KEY` - Your Alpha Vantage API key
- `REACT_APP_API_URL` - Set to your Vercel deployment URL (e.g., https://your-app.vercel.app)

**Backend Database Variables:**
- `DB_USER` - PostgreSQL username
- `DB_PASSWORD` - PostgreSQL password
- `DB_HOST` - PostgreSQL host
- `DB_PORT` - PostgreSQL port (usually 5432)
- `DB_NAME` - PostgreSQL database name
- `DB_SSL` - Set to "true" if using cloud database

## Step 4: Deploy
1. Click "Deploy"
2. Wait for the build to complete
3. Your app will be live at `https://your-app.vercel.app`

## Step 5: Update Your Frontend API URL
After deployment, update your frontend to point to your Vercel domain:

In your `.env`:
```
REACT_APP_API_URL=https://your-app.vercel.app/api
```

Or update it in Vercel dashboard environment variables.

## Database Setup on Vercel
If using **Vercel Postgres**:
1. Go to Storage in Vercel dashboard
2. Create a new Postgres database
3. Copy the connection details and add them as environment variables

If using **External Database** (Neon, RDS, etc.):
1. Get your connection string
2. Extract the connection details (user, password, host, etc.)
3. Add them as environment variables in Vercel

## Running Database Migrations
To set up your database tables, run the SQL from `server/db.sql` in your PostgreSQL client:

```bash
psql -U your_user -d your_database -f server/db.sql
```

## Project Structure
- `/` - Frontend (Vite + React)
- `/api` - Backend (Express.js serverless functions)
- `/server` - Original backend files (for reference)

## Troubleshooting
- **API calls failing**: Check that `REACT_APP_API_URL` matches your Vercel domain
- **Database connection error**: Verify database credentials and ensure firewall allows Vercel IPs
- **Build failing**: Check that all dependencies are in `package.json`

## Support
For questions about Vercel: https://vercel.com/docs
For questions about the app: Contact the development team
