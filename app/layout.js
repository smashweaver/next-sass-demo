import { inter, lato, openSans } from "@/ui/fonts";
import "@/ui/globals.scss";

export const metadata = {
  title: "Next Sass Demo",
  description: "Your all-in-one booking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>{children}</body>
    </html>
  );
}
