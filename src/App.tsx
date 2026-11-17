import './App.css'

const steps = [
  ['Prepare your draft', 'Open a vehicle in ACV MAX and select Post to Facebook. Fire Lister fills the draft with inventory details and adds up to 20 photos. Review the draft before you publish.'],
  ['Connect the listing', 'Open Facebook Marketplace Selling and use Smart Match to link the listing to the correct vehicle in your dealership inventory.'],
  ['Keep it current', 'Review price changes and vehicles that are no longer available. Start a price update or mark a listing sold from the alert.'],
]

function App() {
  return (
    <>
      <header className="site-header shell">
        <a className="brand" href="/"><img src="/firelister.png" alt="" width="40" height="40" />Fire Lister</a>
        <nav aria-label="Main navigation">
          <a href="#workflow">How it works</a>
          <a href="/privacy/">Privacy</a>
        </nav>
      </header>
      <main>
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Chrome extension for dealership sales teams</p>
            <h1 id="hero-title">From MAX inventory to Marketplace<span>.</span></h1>
            <p className="lede">Turn ACV MAX inventory into Facebook Marketplace drafts. Connect your listings and stay on top of price changes and sold vehicles.</p>
            <a className="button" href="#workflow">See how it works <span aria-hidden="true">↓</span></a>
          </div>
          <figure className="preview">
            <div className="preview-window">
              <div className="preview-header">
                <div className="brand"><img src="/firelister.png" alt="" width="36" height="36" />Fire Lister</div>
                <span className="connected"><i /> Connected</span>
              </div>
              <div className="preview-body">
                <p className="eyebrow">Price intelligence</p>
                <h2>Price alerts<span>.</span></h2>
                <div className="alert">
                  <div className="alert-title"><strong>2023 Honda CR-V EX</strong><span>Price change</span></div>
                  <div className="prices"><div><small>Listed price</small><b>$29,995</b></div><span aria-hidden="true">→</span><div><small>New inventory price</small><b>$28,995</b></div></div>
                  <span className="preview-action">Review price update <span aria-hidden="true">↗</span></span>
                </div>
              </div>
            </div>
            <figcaption>Fire Lister alert shown with sample inventory.</figcaption>
          </figure>
        </section>
        <section className="workflow shell" id="workflow" aria-labelledby="workflow-title">
          <p className="eyebrow">How it works</p>
          <h2 id="workflow-title">From first draft to last update<span>.</span></h2>
          <div className="steps">
            {steps.map(([title, description], index) => (
              <article key={title}>
                <span className="step-number" aria-hidden="true">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a className="brand" href="/"><img src="/firelister.png" alt="" width="32" height="32" />Fire Lister</a>
        <nav aria-label="Footer navigation">
          <a href="/privacy/">Privacy Policy</a>
          <a href="mailto:support@firelister.app">Support</a>
        </nav>
      </footer>
    </>
  )
}

export default App
