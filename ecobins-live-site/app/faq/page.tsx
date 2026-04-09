import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Eco Bins bin cleaning service in Utah County.',
}

const faqs = [
  {
    q: 'How much does Eco Bins cost?',
    a: 'Eco Bins costs $25 per bin every 3 months. Customers can request service for one or multiple bins through the quote form.',
  },
  {
    q: 'Do I need to be home during service?',
    a: 'No. As long as your bins are accessible on service day, Eco Bins can complete the cleaning without you being home.',
  },
  {
    q: 'What types of bins do you clean?',
    a: 'Trash, recycling, and compost bins can all be included in service.',
  },
  {
    q: 'Why clean bins every 3 months?',
    a: 'Quarterly service helps control odor, grime, bacteria, and buildup without requiring a monthly commitment.',
  },
  {
    q: 'Do you serve all of Utah County?',
    a: 'Eco Bins is built around Utah County service, including Provo, Orem, Lehi, American Fork, Pleasant Grove, Springville, Spanish Fork, and nearby communities.',
  },
]

export default function FAQPage() {
  return (
    <section className="section">
      <div className="container" style={{maxWidth:'980px'}}>
        <div className="eyebrow" style={{textAlign:'center'}}>FAQ</div>
        <h1 style={{fontSize:'3.5rem',lineHeight:'1.05',letterSpacing:'-.04em',margin:'10px 0 0',textAlign:'center'}}>Frequently asked questions</h1>
        <p className="section-lead" style={{margin:'18px auto 0',textAlign:'center'}}>
          This page is structured for customer trust and search intent around local bin cleaning questions.
        </p>

        <div className="faq-stack" style={{marginTop:'34px'}}>
          {faqs.map((item) => (
            <details className="faq" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>

        <div style={{textAlign:'center',marginTop:'26px'}}>
          <Link href="/contact" className="btn btn-primary">Still Have Questions?</Link>
        </div>
      </div>
    </section>
  )
}
