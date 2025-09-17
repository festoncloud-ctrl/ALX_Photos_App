
# THE VIVID-PHOTO-APP

The Vivid Photo application is a capstone project building on the foundation of Artificial Intelligence and photo recommendations.

The project seeks to give users their power to own, tokenize their photos and even get some money for their photos when shared.
In line with users protection, users photos will be protected when sharing, tokenization will be the key feature.

## Tech Stack

- **Programming Language:** Python (Backend)
- **Framework:** Django (Backend), React.js (Frontend)
- **Database:** MySQL (hosted on Supabase)
- **AI Integration:** Google Gemini, GitHub Copilot
- **Testing Framework:** pytest
- **Frontend Libraries:** React, Axios for API calls, Material-UI for UI components
- **Backend Libraries:** Django REST Framework for API, Pillow for image processing, JWT for authentication
- **Deployment:** Docker for containerization, AWS/GCP for cloud hosting
- **Version Control:** Git
- **IDE:** Visual Studio Code
- **Other Tools:** Postman for API testing, GitHub for repository and CI/CD

## AI Integration Plan

### 🧱 Code or Feature Generation

AI will be used extensively to scaffold and generate code components:
- Generate Django models based on database schema requirements
- Create REST API views and serializers using Django REST Framework
- Scaffold React components for photo upload, gallery display, and user authentication
- Generate utility functions for image processing and tokenization logic
- Assist in creating middleware for user authentication and photo protection

### 🧪 Testing Support

AI will assist in generating comprehensive test suites:
- Generate unit tests for Django models and views using pytest
- Create integration tests for API endpoints to ensure proper data flow
- Generate tests for React components using Jest and React Testing Library
- Assist in writing tests for image processing functions and tokenization features
- Help create mock data and fixtures for testing photo-related functionality

### 📡 Schema-Aware or API-Aware Generation

For database and API-driven development:
- Generate Django models automatically from MySQL schema definitions
- Create API endpoints based on model relationships and business logic
- Generate OpenAPI/Swagger documentation from existing API specs
- Assist in creating database queries and migrations based on schema changes
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
