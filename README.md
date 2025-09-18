
# THE VIVID-PHOTO-APP

The Vivid Photo application is a capstone project building on the foundation of Artificial Intelligence and photo recommendations.

The project seeks to give users their power to own, tokenize their photos and even get some money for their photos when shared.
In line with users protection, users photos will be protected when sharing, tokenization will be the key feature.

## Tech Stack

- **Programming Language:** JavaScript (Backend), Python (AI/ML if needed)
- **Framework:** Node.js with Express (Backend), React.js (Frontend)
- **Database:** PostgreSQL (hosted on Supabase)
- **AI Integration:** Google Gemini, GitHub Copilot
- **Testing Framework:** Jest (Backend), pytest (if Python components)
- **Frontend Libraries:** React, Axios for API calls, Material-UI for UI components
- **Backend Libraries:** Express.js, Supabase client, JWT for authentication
- **Deployment:** Docker for containerization, AWS/GCP for cloud hosting
- **Version Control:** Git
- **IDE:** Visual Studio Code
- **Other Tools:** Postman for API testing, GitHub for repository and CI/CD

## Backend Setup

### Prerequisites
- Node.js (v16 or higher)
- npm
- Supabase account and project

### Installation
1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Running the Server
```bash
npm start
```
For development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
  - Body: `{ "email": "user@example.com", "password": "password" }`
- `POST /auth/login` - Login user
  - Body: `{ "email": "user@example.com", "password": "password" }`
- `POST /auth/logout` - Logout user
- `GET /auth/me` - Get current user (requires authentication)
- `GET /protected` - Example protected route (requires authentication)

All protected routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <access_token>
```

## AI Integration Plan

### 🧱 Code or Feature Generation

AI will be used extensively to scaffold and generate code components:
- Generate Express routes and middleware based on API requirements
- Create React components for photo upload, gallery display, and user authentication
- Scaffold Supabase database schemas and queries
- Generate utility functions for image processing and tokenization logic
- Assist in creating authentication middleware and protected routes

### 🧪 Testing Support

AI will assist in generating comprehensive test suites:
- Generate unit tests for Express routes and middleware using Jest
- Create integration tests for API endpoints to ensure proper data flow
- Generate tests for React components using Jest and React Testing Library
- Assist in writing tests for image processing functions and tokenization features
- Help create mock data and fixtures for testing photo-related functionality

### 📡 Schema-Aware or API-Aware Generation

For database and API-driven development:
- Generate Supabase table schemas and RLS policies
- Create API endpoints based on database relationships and business logic
- Generate OpenAPI/Swagger documentation from existing API specs
- Assist in creating database queries and functions based on schema changes
- Help design and implement tokenization logic based on photo metadata schema

## Plan for In-Editor/PR Review Tooling

**Tool:** GitHub Copilot (integrated in Visual Studio Code)

**Support during development:**
- **In-Editor Assistance:** Real-time code suggestions, auto-completion, and error detection
- **Code Reviews:** AI-powered suggestions for code improvements, best practices, and potential bugs
- **PR Support:** Generate detailed pull request descriptions, suggest code changes, and review diffs
- **Commit Messages:** Assist in writing clear, concise commit messages following conventional commit standards

## Prompting Strategy

Here are sample prompts planned for AI-assisted development:

1. "Generate a Django model for Photo with fields: title (CharField), description (TextField), image_file (ImageField), uploaded_at (DateTimeField), user (ForeignKey to User), and include methods for tokenization."

2. "Create a test suite for the photo upload API endpoint using pytest, including tests for successful upload, invalid file types, and authentication requirements."

3. "Generate a React component for displaying a photo gallery with pagination, filtering by user, and options to tokenize or share photos."
