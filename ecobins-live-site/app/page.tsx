import Link from 'next/link'
import CTA from '@/components/cta'
import { cities } from '@/components/cities'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">Utah County quote-request service</div>
            <h1>Bin cleaning that feels simple, local, and professional.</h1>
            <p>
              Eco Bins provides quarterly trash bin cleaning across Utah County for $25 per bin.
              Clear pricing, simple quote requests, and a site structure built for a real local business.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
              <Link href="/pricing" className="btn btn-secondary">View Pricing</Link>
            </div>
            <div className="pill-grid">
              <div className="pill">$25 per bin</div>
              <div className="pill">Every 3 months</div>
              <div className="pill">Utah County service</div>
            </div>
          </div>

          <div className="card hero-card">
            <div className="eyebrow">Why this version</div>
            <h3>Built like a real local business website</h3>
            <div className="metric-grid">
              <div className="metric">
                <div style={{color:'#666'}}>Main offer</div>
                <strong>$25</strong>
                <div style={{color:'#666'}}>per bin every 3 months</div>
              </div>
              <div className="metric">
                <div style={{color:'#666'}}>Conversion path</div>
                <strong>Quote</strong>
                <div style={{color:'#666'}}>Simple lead capture first</div>
              </div>
            </div>
            <div className="card" style={{padding:'20px',marginTop:'18px',boxShadow:'none'}}>
              <div style={{fontWeight:800}}>Included in the structure</div>
              <ul style={{margin:'14px 0 0',paddingLeft:'18px',lineHeight:'1.9',color:'#444'}}>
                <li>Homepage with clear hero and offer</li>
                <li>Dedicated pricing page</li>
                <li>Utah County service area page</li>
                <li>FAQ page for trust and SEO</li>
                <li>Contact page with detailed quote form</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">How it works</div>
          <h2 className="section-title">A cleaner, higher-converting local-service layout</h2>
          <div className="grid-3" style={{marginTop:'34px'}}>
            {[
              ['1. Request a quote', 'Customers submit address, city, and number of bins through a clean form built for local lead capture.'],
              ['2. Confirm service', 'Eco Bins follows up directly and schedules quarterly service for homes across Utah County.'],
              ['3. Keep bins clean', 'Quarterly recurring service helps reduce odor, buildup, bacteria, and grime over time.'],
            ].map(([title, text]) => (
              <div className="card feature" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">Why Eco Bins</div>
              <h2 className="section-title">Designed to look established from day one</h2>
              <p className="section-lead" style={{marginTop:'18px'}}>
                This version is structured like a deployable local-service site, with clear page hierarchy,
                focused CTA flow, and service-area content that can later expand into city-specific pages.
              </p>
              <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginTop:'24px'}}>
                <Link href="/service-area" className="btn btn-primary">View Service Area</Link>
                <Link href="/contact" className="btn btn-secondary">Contact Eco Bins</Link>
              </div>
            </div>
            <div className="grid-2">
              {['Odor reduction','Cleaner curb appeal','Quarterly convenience','Simple per-bin pricing','Utah County focused','Quote-first launch model'].map((item) => (
                <div key={item} className="card" style={{fontWeight:800,fontSize:'1.12rem'}}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Cities served</div>
          <h2 className="section-title">Built around Utah County</h2>
          <p className="section-lead" style={{marginTop:'16px'}}>
            Eco Bins is positioned to serve Utah County homeowners, including the cities below.
          </p>
          <div className="city-grid" style={{marginTop:'28px'}}>
            {cities.slice(0, 9).map((city) => (
              <div key={city} className="city-card">{city}</div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
