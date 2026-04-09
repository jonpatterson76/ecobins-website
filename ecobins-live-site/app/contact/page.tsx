import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Request a quote from Eco Bins for quarterly bin cleaning in Utah County.',
}

export default function ContactPage() {
  return (
    <section className="hero">
      <div className="container section">
        <div className="contact-grid">
          <div className="contact-copy">
            <div className="eyebrow" style={{color:'#85e69b'}}>Contact</div>
            <h1 style={{fontSize:'3.5rem',lineHeight:'1.05',letterSpacing:'-.04em',margin:'10px 0 0'}}>Request a quote from Eco Bins</h1>
            <p>
              Use this quote form for quarterly service at $25 per bin. This is intentionally built as lead capture first so the business can launch quickly.
            </p>

            <div className="contact-panel" style={{marginTop:'26px'}}>
              <div><strong>Phone:</strong> 385-304-4521</div>
              <div style={{marginTop:'10px'}}><strong>Email:</strong> ecobinsutah@gmail.com</div>
              <div style={{marginTop:'10px'}}><strong>Service Area:</strong> Utah County, Utah</div>
              <div style={{marginTop:'10px'}}><strong>Pricing:</strong> $25 per bin every 3 months</div>
            </div>
          </div>

          <form className="form-card">
            <div className="form-grid">
              <input placeholder="Full name" />
              <input placeholder="Phone number" />
              <input placeholder="Email address" />
              <input placeholder="Street address" />
              <div className="form-row">
                <input placeholder="City" />
                <input placeholder="ZIP code" />
              </div>
              <input placeholder="Number of bins" />
              <textarea placeholder="Anything else we should know?" />
              <button type="button" className="btn btn-primary" style={{width:'100%'}}>Request Quote</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
