import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase: new URL('https://ecobinsutah.com'),
  title: {
    default: 'Eco Bins | Utah County Bin Cleaning',
    template: '%s | Eco Bins',
  },
  description: 'Quarterly trash bin cleaning in Utah County for $25 per bin. Request a quote from Eco Bins.',
  keywords: ['bin cleaning utah county', 'trash bin cleaning provo', 'eco bins utah', 'garbage can cleaning utah county'],
  openGraph: {
    title: 'Eco Bins | Utah County Bin Cleaning',
    description: 'Quarterly trash bin cleaning in Utah County for $25 per bin.',
    type: 'website',
    url: 'https://ecobinsutah.com',
  },
}

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link href="/" className="brand">
          <Image src="/logo.png" alt="Eco Bins logo" width={52} height={52} />
          <div>
            <div className="brand-name">Eco Bins</div>
            <div className="brand-sub">Utah County Bin Cleaning</div>
          </div>
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/service-area">Service Area</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="btn btn-primary">Request Quote</Link>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <Image src="/logo.png" alt="Eco Bins logo" width={52} height={52} />
            <div>
              <div className="brand-name" style={{fontSize:'1.25rem'}}>Eco Bins</div>
              <div style={{color:'#666'}}>Quarterly bin cleaning for Utah County</div>
            </div>
          </div>
          <p className="local-schema-note" style={{marginTop:'14px',maxWidth:'500px',lineHeight:'1.8'}}>
            Eco Bins provides straightforward curbside bin cleaning for homeowners across Utah County.
            Clean bins, less odor, and simple quote-based signup.
          </p>
        </div>

        <div>
          <div className="footer-title">Pages</div>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/service-area">Service Area</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <div className="footer-title">Contact</div>
          <div className="footer-links">
            <div>385-304-4521</div>
            <div>ecobinsutah@gmail.com</div>
            <div>Utah County, Utah</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Eco Bins',
  image: 'https://ecobinsutah.com/logo.png',
  telephone: '385-304-4521',
  email: 'ecobinsutah@gmail.com',
  areaServed: 'Utah County, Utah',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'UT',
    addressCountry: 'US',
  },
  url: 'https://ecobinsutah.com',
  description: 'Quarterly bin cleaning in Utah County for $25 per bin.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
