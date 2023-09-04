import Provider from "./Provider";
import HeaderNavbar from "./components/HeaderNavbar";
import "./globals.css";
import { Dosis } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant-Finder",
  description: "Help People to find Restaurants nearby",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Provider>
          <HeaderNavbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
