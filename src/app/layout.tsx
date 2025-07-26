import './globals.css';
import NavControlsWrapper from './components/NavControlsWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavControlsWrapper />
        {children}
      </body>
    </html>
  );
}
