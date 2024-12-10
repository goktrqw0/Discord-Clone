# Discord Clone

A full-stack Discord clone built with modern web technologies.

## Tech Stack

### Frontend
- Next.js 14 (React Framework)
- Tailwind CSS (Styling)
- Shadcn UI (Component Library)
- Redux Toolkit (State Management)
- Clerk (Authentication)

### Backend
- Nest.js (Node.js Framework)
- GraphQL (API)
- Socket.IO (Real-time Communication)
- Prisma (ORM)
- MongoDB Atlas (Database)

## Features (Coming Soon)
- Real-time messaging
- Server creation and management
- Channel system
- Voice channels
- Direct messaging
- User profiles and settings
- Friend system
- Role-based permissions
- File sharing
- Rich text formatting

## Installation

1. Clone the repository
```bash
git clone https://github.com/goktrqw0/Discord-Clone.git
```

2. Install dependencies for frontend
```bash
cd discord-clone
npm install
```

3. Install dependencies for backend
```bash
cd server
npm install
```

4. Set up environment variables
- Create `.env` file in root directory for frontend
- Create `.env` file in server directory for backend

5. Run the development servers

Frontend:
```bash
npm run dev
```

Backend:
```bash
cd server
npm run start:dev
```

## Environment Variables

### Frontend (.env)
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Backend (server/.env)
```
DATABASE_URL=your_mongodb_atlas_url
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
