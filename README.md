# SARAVANAN — Portfolio

Personal developer portfolio showcasing full-stack Java, Spring Boot, MySQL, and React applications.

**Live site:** https://YOUR-SITE-URL/

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

## Tech Stack

- **Frontend & UI:** React 19, Vite, Tailwind CSS 4, Framer Motion, AOS
- **Graphics & Fluid FX:** WebGL, React Bits SplashCursor
- **Forms & Mailing:** EmailJS Browser SDK
- **Typography:** Inter, Caveat, Impact

## Run Locally

1. Clone or extract the repository:
   ```bash
   git clone https://github.com/saravanan-r-dev/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

For the contact form to deliver messages through EmailJS, create a `.env.local` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(If these variables are omitted, the form automatically falls back to opening your local email client with a pre-filled message).*
