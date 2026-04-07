import "./globals.css";

export const metadata = {
  title: "KillZero LATAM | DayZ Server",
  description:
    "Pagina oficial del servidor KillZero LATAM con informacion, ranking, tienda y novedades."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
