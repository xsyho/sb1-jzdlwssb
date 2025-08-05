import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: "DeJvitsu - Profesjonalne Strony Internetowe",
  description: "Tworzymy nowoczesne, responsywne strony internetowe i sklepy online. Profesjonalne usługi web developmentu dla Twojego biznesu.",
  keywords: 'ochraniacze na zęby, sporty walki, MMA, boks, kickboxing, BJJ, ochrona zębów',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}