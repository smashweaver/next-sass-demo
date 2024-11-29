import { openSans } from "./ui/fonts";
import "./ui/styles/globals.scss";

export const metadata = {
  title: "Next Sass Demo",
  description: "Your all-in-one booking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
