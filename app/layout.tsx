import './globals.css'
import MajorNav from '../components/MajorNav';


// font family is:  bulo
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MajorNav />
        {children}
      </body>
    </html>
  )
}
