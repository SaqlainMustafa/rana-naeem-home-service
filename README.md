# RTS Services Website

A modern, professional website for RTS Technical Services built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Service Pages**: Individual pages for each service with detailed information
- **Contact Integration**: Prominent contact information and contact form
- **SEO Optimized**: Built with Next.js for optimal SEO performance
- **Fast Loading**: Optimized for speed and performance

## Services Included

- Electrical Services
- Plumbing Services
- Tile Installation
- Glass Fixing
- Aluminium Works
- Painting Services
- Tabook Services
- Plastering Services
- Gypsum Works
- False Ceiling

## Contact Information

- **Phone**: +971 50 157 4612
- **Email**: njannaeemangel@gmail.com
- **Location**: Dubai, UAE

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   │   └── [serviceId]/   # Dynamic service detail pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Home page hero
│   ├── ServicesOverview.tsx # Services grid
│   └── ContactHighlights.tsx # Contact section
├── data/                  # Data files
│   └── services.ts        # Services and contact data
└── types/                 # TypeScript types
    └── index.ts           # Type definitions
```

## Customization

### Adding New Services

1. Edit `src/data/services.ts`
2. Add your service to the `services` array
3. Include all required fields: id, name, description, shortDescription, icon, features

### Updating Contact Information

Edit the `contactInfo` object in `src/data/services.ts`:

```typescript
export const contactInfo = {
  phone: '+971 50 157 4612',
  email: 'njannaeemangel@gmail.com',
  whatsapp: '+971501574612',
  address: 'Dubai, UAE'
};
```

### Styling

The website uses Tailwind CSS for styling. All components are designed to be:
- Professional and clean
- Fully responsive
- Accessible
- Fast loading

### Adding Images

1. Place service images in the `public/` directory
2. Update the service data to include image paths
3. The website is ready to display service images

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Support

For any questions or support, please contact:
- **Phone**: +971 50 157 4612
- **Email**: njannaeemangel@gmail.com

## License

This project is proprietary and confidential.