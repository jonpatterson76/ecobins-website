import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Eco Bins pricing: $25 per bin every 3 months in Utah County.',
}

export default function PricingPage() {
  return (
    <section className="hero">
      <div className="container section">
        <div className="price-wrap">
          <div className="eyebrow" style={{color:'#85e69b'}}>Pricing</div>
          <h1 style={{fontSize:'3.5rem',marginTop:'10px'}}>Simple quarterly pricing</h1>
          <p style={{maxWidth:'none'}}>
            Eco Bins keeps pricing straightforward: $25 per bin every 3 months.
            No complicated packages needed for launch.
          </p>

          <div className="price-card" style={{marginTop:'30px'}}>
            <div className="eyebrow">Main Plan</div>
            <div className="price" style={{marginTop:'12px'}}>$25</div>
            <div className="price-note">per bin, every 3 months</div>

            <div className="list-stack">
              <div className="list-item">Quarterly recurring service</div>
              <div className="list-item">Simple per-bin quote model</div>
              <div className="list-item">Utah County service area focus</div>
              <div className="list-item">Request-quote flow instead of online checkout</div>
            </div>

            <Link href="/contact" className="btn btn-primary" style={{width:'100%',textAlign:'center',marginTop:'24px'}}>
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
