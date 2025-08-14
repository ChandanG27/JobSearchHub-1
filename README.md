# Job Search Hub

A modern website that generates instant search links for LinkedIn, Indeed, and Naukri based on user input.

## Features

- **Multi-Platform Search**: Generate search URLs for LinkedIn, Indeed, and Naukri with a single form
- **Instant Results**: Get immediate access to job search links without manual navigation
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Clean UI**: Modern, professional interface with platform-specific branding
- **Form Validation**: Input validation to ensure proper job title and location entries

## How It Works

1. Enter your desired job title (e.g., "Software Engineer", "Marketing Manager")
2. Enter your preferred location (e.g., "New York", "Remote", "San Francisco")
3. Click "Generate Job Search Links"
4. Click on any platform button to open job search results in a new tab

## Tech Stack

- **Frontend**: React with TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Routing**: Wouter for lightweight client-side routing

## Development

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application ScreenShot :https://bit.ly/45A72T6

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/ui/    # Reusable UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   ├── pages/           # Page components
│   │   └── App.tsx          # Main app component
│   └── index.html
├── server/                  # Express.js backend
├── shared/                  # Shared types and schemas
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial purposes.
