import type { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '@/components/cities'

export const metadata: Metadata = {
  title: 'Service Area',
  description: 'Eco Bins serves Utah County, including Provo, Orem, Lehi, American Fork, Pleasant Grove, and surrounding cities.',
}

export default function ServiceAreaPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Service Area</div>
        <h1 style={{fontSize:'3.5rem',lineHeight:'1.05',letterSpacing:'-.04em',margin:'10px 0 0'}}>Utah County bin cleaning service</h1>
        <p className="section-lead" style={{marginTop:'18px'}}>
          Eco Bins is positioned as a Utah County service business. This page supports trust with local customers
          and can later expand into city-specific SEO pages.
        </p>

        <div className="grid-2" style={{marginTop:'34px'}}>
          <div className="card">
            <div className="footer-title">Primary Market</div>
            <div style={{fontSize:'2rem',fontWeight:900,marginTop:'10px'}}>Utah County, Utah</div>
            <p style={{color:'#666',lineHeight:'1.8'}}>
              The page copy can later be localized further for neighborhood targeting,
              Google Business Profile support, and city landing pages.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{marginTop:'10px'}}>Check My Address</Link>
          </div>

          <div className="city-grid">
            {cities.map((city) => (
              <div key={city} className="city-card">{city}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
