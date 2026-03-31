# MongoDB Atlas Setup Guide

The error `querySrv ENOTFOUND _mongodb._tcp.cluster0.mongodb.net` means the MongoDB connection string is not working. You need to set up MongoDB Atlas (free) or use a local MongoDB instance.

## Option 1: MongoDB Atlas (Recommended - Free)

### Step 1: Create MongoDB Atlas Account
1. Go to **https://www.mongodb.com/atlas**
2. Click **"Try Free"**
3. Sign up with your email
4. Verify your email

### Step 2: Create a Cluster
1. After login, click **"Build a Database"**
2. Choose **"M0 Sandbox"** (FREE tier)
3. Select a cloud provider (AWS recommended)
4. Choose a region close to you
5. Name your cluster (e.g., "vtmsc-cluster")
6. Click **"Create"**

### Step 3: Create Database User
1. Go to **"Database Access"** in left sidebar
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Username: `vtmsc_admin`
5. Password: `VoiceTabernacle2024!` (or create your own)
6. Database User Privileges: **"Read and write to any database"**
7. Click **"Add User"**

### Step 4: Configure Network Access
1. Go to **"Network Access"** in left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development)
4. Click **"Confirm"**

### Step 5: Get Connection String
1. Go to **"Database"** in left sidebar
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Select **"Node.js"** and version **"4.1 or later"**
5. Copy the connection string
6. Replace `<password>` with your actual password
7. Replace `<dbname>` with `vtmsc_database`

### Step 6: Update .env.local
Replace the MONGODB_URI in your `.env.local` file:
```
MONGODB_URI=mongodb+srv://vtmsc_admin:VoiceTabernacle2024!@your-cluster-name.xxxxx.mongodb.net/vtmsc_database?retryWrites=true&w=majority
```

## Option 2: Local MongoDB (Alternative)

### Step 1: Install MongoDB
1. Download MongoDB Community Server from **https://www.mongodb.com/try/download/community**
2. Install it on your system
3. Start MongoDB service

### Step 2: Update .env.local
```
MONGODB_URI=mongodb://localhost:27017/vtmsc_database
```

## Testing the Connection

After updating your `.env.local`, restart your Next.js server:
```bash
npm run dev
```

Then test the connection by visiting:
```
http://localhost:3000/api/test-connection
```

You should see a success message with database information.

## Troubleshooting

- **Still getting connection errors?** Double-check your username, password, and cluster name in the connection string
- **Network issues?** Make sure you've allowed access from anywhere in Network Access
- **Authentication failed?** Verify your database user credentials are correct
- **Database not found?** The database will be created automatically when you first insert data

Once connected, you can create blogs and events, and they'll be stored in your MongoDB database!
