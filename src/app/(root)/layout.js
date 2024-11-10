import Header from "@/Components/header";
import '../globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Page Title</title> {/* Consider making this dynamic */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Description of my page." />
      </head>
      <body>
        <div>
          <Header />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
