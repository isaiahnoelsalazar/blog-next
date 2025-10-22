import '../tailwind.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="nUecYgHE8JWmOZpCj-TebHJclQ6SuYCjYv_PYcdDS6Q" />
      <body>{children}</body>
    </html>
  )
}
