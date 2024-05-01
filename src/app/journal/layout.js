import Navbar from "../components/Navbar";
import "../globals.css";

export const metadata = {
  title: "Lexardi Lab | Journal",
  description: "Lexardi Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
