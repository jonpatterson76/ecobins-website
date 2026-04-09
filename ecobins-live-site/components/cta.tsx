import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section gray">
      <div className="container">
        <div className="card" style={{display:'grid',gap:'18px',alignItems:'center'}}>
          <div className="eyebrow">Get Started</div>
          <h2 className="section-title" style={{marginTop:0}}>Request a quote from Eco Bins</h2>
          <p className="section-lead">
            Quarterly bin cleaning in Utah County for $25 per bin. Use the contact page to send your address and number of bins.
          </p>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <Link href="/contact" className="btn btn-primary">Request Quote</Link>
            <Link href="/pricing" className="btn btn-secondary">See Pricing</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
