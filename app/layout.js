import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./Components/Header";
import NavBarPhone from "./Components/NavBarPhone";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Disney + Clone",
  description: "Développé par Dylann Xavero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={inter.className}>
          <Header />
          <NavBarPhone />
          {children}
        </body>
      </AuthContextProvider>
    </html>
  );
}
