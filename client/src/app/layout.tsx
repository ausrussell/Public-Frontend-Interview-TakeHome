"use client";
import ThemeRegistry from "@/styles/ThemeRegistry";
import styles from "@/styles/AnimatedBackground.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <ThemeRegistry>
        <body className={styles.animatedBg}>
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
