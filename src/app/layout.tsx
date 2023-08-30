import "./globals.css";

import Wrapper from "./wrapper";

export const metadata = {
  title: "Themes",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
          <Wrapper>
            {children}
          </Wrapper>
      </body>
    </html>
  );
}
