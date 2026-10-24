import React, { useState } from 'react'

const products = [
  { name: 'Rainbow Pick & Mix', price: '£4.95', emoji: '🌈', tag: 'Bestseller', tone: 'pink' },
  { name: 'Strawberry Laces', price: '£2.50', emoji: '🍓', tag: 'Sweet & sour', tone: 'red' },
  { name: 'Fizzy Cola Bottles', price: '£2.75', emoji: '🥤', tag: 'Fizzy', tone: 'purple' },
  { name: 'Giant Gummy Bear', price: '£5.50', emoji: '🧸', tag: 'Fun size? Never.', tone: 'yellow' },
  { name: 'Chocolate Party Box', price: '£8.95', emoji: '🍫', tag: 'Gift idea', tone: 'brown' },
  { name: 'Candy Floss Cloud', price: '£3.95', emoji: '☁️', tag: 'Fresh today', tone: 'blue' },
]

const categories = [
  ['🍭', 'Pick & Mix'],
  ['🍫', 'Chocolate'],
  ['🍬', 'Hard Candy'],
  ['🧸', 'Gummy Sweets'],
  ['🎁', 'Gifts'],
]

function Icon({ name }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="6.5"/><path d="m16 16 5 5"/></>,
    bag: <><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

export default function App() {
  const [cart, setCart] = useState(0)
  const [menu, setMenu] = useState(false)
  const [toast, setToast] = useState('')

  const addToCart = (product) => {
    setCart(v => v + 1)
    setToast(`${product.name} added to your bag 🍬`)
    window.setTimeout(() => setToast(''), 2200)
  }

  return (
    <div className="site">
      <div className="announcement">
        <span>🍭</span>
        <b>FREE LOCAL DELIVERY</b> on orders over £25
        <span className="announcement-dot">•</span>
        Fresh sweets, big smiles.
      </div>

      <header className="nav-wrap">
        <nav className="nav">
          <button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label="Menu">
            <Icon name={menu ? 'close' : 'menu'} />
          </button>

          <a className="logo" href="#top" aria-label="Candy Town home">
            <span className="logo-candy">Candy</span>
            <span className="logo-town">Town</span>
            <span className="logo-sparkle">✦</span>
          </a>

          <div className={`links ${menu ? 'open' : ''}`}>
            <a href="#shop" onClick={() => setMenu(false)}>Shop</a>
            <a href="#about" onClick={() => setMenu(false)}>Our Story</a>
            <a href="#gifts" onClick={() => setMenu(false)}>Gifts</a>
            <a href="#visit" onClick={() => setMenu(false)}>Visit Us</a>
          </div>

          <div className="nav-actions">
            <button className="icon-btn" aria-label="Search"><Icon name="search" /></button>
            <button className="bag-btn" onClick={() => setToast(cart ? `${cart} sweet ${cart === 1 ? 'treat' : 'treats'} in your bag 🛍️` : 'Your bag is waiting for something sweet 🍬')}>
              <Icon name="bag" />
              <span>Bag</span>
              {cart > 0 && <b className="cart-count">{cart}</b>}
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span>★</span> A little shop with a lot of sweetness</div>
            <h1>Life is better<br/><em>with sweets.</em></h1>
            <p>Pick your favourites, build your dream pick & mix and send a little sweetness to someone you love.</p>
            <div className="hero-buttons">
              <a className="primary-btn" href="#shop">Shop the sweets <Icon name="arrow" /></a>
              <a className="text-btn" href="#visit">Come say hello <span>↗</span></a>
            </div>
            <div className="hero-note">
              <div className="faces"><span>😊</span><span>😋</span><span>🥰</span></div>
              <div><b>Made for sweet moments</b><small>Local favourites & nostalgic treats</small></div>
            </div>
          </div>

          <div className="hero-art" aria-label="Colourful candy display">
            <div className="blob blob-one"></div>
            <div className="blob blob-two"></div>
            <div className="hero-card">
              <div className="sticker">YUM!</div>
              <div className="candy-bowl">
                <div className="candy candy-1">🍓</div>
                <div className="candy candy-2">🍬</div>
                <div className="candy candy-3">🍭</div>
                <div className="candy candy-4">🍫</div>
                <div className="candy candy-5">🧸</div>
                <div className="candy candy-6">🌈</div>
                <div className="bowl-rim"></div>
                <div className="bowl"></div>
              </div>
              <div className="hero-label">PICK<br/><strong>YOUR</strong><br/>SWEET</div>
            </div>
            <span className="float-shape shape-star">✦</span>
            <span className="float-shape shape-heart">♥</span>
            <span className="float-shape shape-dot">●</span>
          </div>
        </section>

        <section className="ticker" aria-label="Store highlights">
          <div>🍬 HAND-PICKED SWEETS</div>
          <div>★ GOOD VIBES ONLY</div>
          <div>🍭 PICK & MIX YOUR WAY</div>
          <div>♡ GIFTS FOR SWEET PEOPLE</div>
        </section>

        <section className="categories section-pad">
          <div className="section-heading">
            <div><span className="mini-kicker">WHAT'S YOUR FANCY?</span><h2>Shop by sweet tooth</h2></div>
            <a href="#shop" className="see-all">See all <span>→</span></a>
          </div>
          <div className="category-grid">
            {categories.map(([emoji, label]) => (
              <a href="#shop" className="category-card" key={label}>
                <span className="category-emoji">{emoji}</span>
                <span>{label}</span>
                <small>Explore →</small>
              </a>
            ))}
          </div>
        </section>

        <section className="products section-pad" id="shop">
          <div className="section-heading">
            <div><span className="mini-kicker">THE GOOD STUFF</span><h2>Sweet favourites</h2></div>
            <p>Things that disappear suspiciously quickly.</p>
          </div>
          <div className="product-grid">
            {products.map(product => (
              <article className={`product-card ${product.tone}`} key={product.name}>
                <div className="product-image">
                  <span className="product-tag">{product.tag}</span>
                  <span className="big-emoji">{product.emoji}</span>
                  <button className="quick-add" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to bag`}>+</button>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div><b>{product.price}</b><button onClick={() => addToCart(product)}>Add to bag</button></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story" id="about">
          <div className="story-art">
            <div className="story-sticker">SINCE<br/><b>2019</b></div>
            <div className="story-circle"><span>🍬</span><span>🍭</span><span>🧸</span><span>🍫</span></div>
          </div>
          <div className="story-copy">
            <span className="mini-kicker">A SWEET LITTLE STORY</span>
            <h2>Your local happy place.</h2>
            <p>We believe a great sweet shop should feel like stepping into a childhood memory — colourful, cheerful and impossible to leave empty-handed.</p>
            <p>From classic favourites to fun new finds, Candy Town is here for pick & mix adventures, last-minute gifts and those “I deserve a treat” moments.</p>
            <a className="outline-btn" href="#visit">Discover our story <Icon name="arrow" /></a>
          </div>
        </section>

        <section className="gift-banner" id="gifts">
          <div><span className="mini-kicker">SEND A LITTLE JOY</span><h2>Sweet gifts,<br/><em>made easy.</em></h2></div>
          <p>Build a box, add a handwritten note and make someone's day a little more delicious.</p>
          <a className="primary-btn light" href="#shop">Explore gifts <Icon name="arrow" /></a>
        </section>

        <section className="visit section-pad" id="visit">
          <div>
            <span className="mini-kicker">COME FIND US</span>
            <h2>Pop in for a<br/><em>little happiness.</em></h2>
            <p>Chalk Farm Rd, London<br/>Come hungry. Leave smiling.</p>
            <a className="outline-btn" href="https://www.google.com/maps/search/?api=1&query=Chalk+Farm+Road+London" target="_blank" rel="noreferrer">Get directions <Icon name="arrow" /></a>
          </div>
          <div className="hours-card">
            <span>OPENING HOURS</span>
            <div><b>Mon – Sat</b><strong>10:00 — 19:00</strong></div>
            <div><b>Sunday</b><strong>11:00 — 17:00</strong></div>
            <small>Hours shown are demo content — replace with the shop's confirmed hours.</small>
          </div>
        </section>

        <section className="newsletter">
          <div className="newsletter-candy">🍭</div>
          <div><span className="mini-kicker">THE SWEET LIST</span><h2>Deals, new drops & good news.</h2></div>
          <form onSubmit={e => { e.preventDefault(); setToast('You’re on the sweet list! 🍬') }}>
            <input type="email" required placeholder="Your email address" aria-label="Email address" />
            <button type="submit">Join <span>→</span></button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><a className="logo" href="#top"><span className="logo-candy">Candy</span><span className="logo-town">Town</span></a><p>Sweet treats. Big smiles.<br/>Your happy little candy shop.</p></div>
          <div><b>Explore</b><a href="#shop">Shop sweets</a><a href="#gifts">Gifts</a><a href="#about">Our story</a></div>
          <div><b>Visit</b><a href="#visit">Find us</a><a href="#visit">Opening hours</a><a href="#visit">Contact</a></div>
          <div><b>Follow the fun</b><p className="socials">Instagram&nbsp;&nbsp; TikTok&nbsp;&nbsp; Facebook</p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Candy Town</span><span>Made with sugar & love ♡</span></div>
      </footer>

      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}