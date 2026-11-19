import Image from "next/image"
import { Header } from "@/components/header"
import { ProductionExplorer, VillagerExplorer } from "@/components/explorers"
import { Symbol } from "@/components/symbol"

const github = "https://github.com/urosorolicki"
const repository = `${github}/bannerford-web`

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section id="top" tabIndex={-1} className="hero" aria-labelledby="game-title">
          <picture className="hero-art">
            <source media="(max-width: 600px)" srcSet="/art/bannerford-hero-mobile.webp" />
            <Image src="/art/bannerford-hero.webp" alt="A stone bridge over a river leads to a medieval village among farms and wooded hills" fill sizes="100vw" loading="eager" fetchPriority="high" />
          </picture>
          <div className="hero-scrim" />
          <div className="hero-inner wrap">
            <div className="hero-content">
              <p className="eyebrow hero-kicker"><span /> A medieval settlement builder</p>
              <h1 id="game-title">Bannerford</h1>
              <p className="hero-tagline">A town begins with a crossing.</p>
              <p className="hero-description">Build by the river, follow the people who call it home, and grow a village into a working medieval town.</p>
              <div className="hero-actions">
                <a href="#world" className="button button-gold">Explore the World</a>
                <a href="#settlement" className="button button-ghost">Discover the Game</a>
              </div>
            </div>
          </div>
          <a className="hero-scroll" href="#settlement" aria-label="Scroll to the settlement"><Symbol name="down" size={20} /></a>
          <span className="hero-credit">Concept art</span>
        </section>

        <section id="settlement" tabIndex={-1} className="section parchment">
          <div className="wrap settlement">
            <div className="settlement-intro">
              <p className="eyebrow"><span /> The living settlement</p>
              <h2>A village made<br className="desktop-break" /> of <em>working lives.</em></h2>
              <p className="section-copy">Place a home near a workshop and someone has a shorter walk to work. Lay a road to the fields and the harvest reaches storage sooner. In Bannerford, the places you build shape how people spend their days.</p>
              <a className="text-link" href="#daily-life">Meet the villagers</a>
            </div>
            <figure className="framed-art">
              <Image src="/art/lane.webp" alt="Villagers and a cart share a lane between timber cottages" width={760} height={504} sizes="(min-width: 901px) 55vw, 100vw" />
              <figcaption><span>Life along the village road</span><span>Concept art</span></figcaption>
            </figure>
          </div>
          <div className="wrap progression">
            <div className="progression-title">
              <p className="eyebrow"><span /> Construction &amp; progression</p>
              <h2>From a ford to a town.</h2>
            </div>
            <ol role="list">
              <li><h3>Find a foothold</h3><p>Lay out the first homes and connect them to food, water, and the work that keeps the village going.</p></li>
              <li><h3>Raise the frame</h3><p>Bring materials to building sites and watch foundations, timber frames, and roofs take shape.</p></li>
              <li><h3>Make room to grow</h3><p>Upgrade buildings and extend roads to serve new workshops, warehouses, and market space.</p></li>
            </ol>
          </div>
        </section>

        <section id="daily-life" tabIndex={-1} className="section dark">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow"><span /> Villagers &amp; daily life</p>
              <h2>Every villager has <em>a day’s work.</em></h2>
              <p className="section-copy">People have homes, jobs, and needs that shape where they go and what they do. Follow three trades through the places that make up their working day.</p>
            </div>
            <VillagerExplorer />
          </div>
        </section>

        <section id="economy" tabIndex={-1} className="section parchment">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow"><span /> Economy &amp; production</p>
              <h2>Follow <em>the timber.</em></h2>
              <p className="section-copy">Raw materials pass through several hands before they reach a building site or a market. Trace a load of timber from the woodland to the walls of a new home.</p>
            </div>
            <ProductionExplorer />
          </div>
        </section>

        <section id="world" tabIndex={-1} className="world" aria-labelledby="world-title">
          <Image src="/art/valley.webp" alt="Autumn mist gathers over a river, farms, and a bridge in a forested valley" fill sizes="100vw" />
          <div className="world-scrim" />
          <div className="world-content wrap">
            <p className="eyebrow"><span /> The world of Bannerford</p>
            <h2 id="world-title">The land shapes<br /> <em>the town.</em></h2>
            <p>Settlements follow the contours of the valley. Fields spread across open ground, roads seek a crossing, and timber and stone set the character of each street. The same view changes with the seasons.</p>
          </div>
          <span className="hero-credit">Concept art</span>
        </section>

        <section id="journal" tabIndex={-1} className="section parchment journal">
          <div className="wrap journal-inner">
            <div>
              <p className="eyebrow"><span /> In development</p>
              <h2>Development <em>journal.</em></h2>
              <p className="section-copy">Bannerford is being built in Godot with C#, with 3D assets made in Blender. Future journal entries will document the design of the settlement, its people, and its economy.</p>
            </div>
            <div className="journal-empty">
              <Symbol name="journal" size={34} />
              <div><h3>No entries yet</h3><p>Development notes will appear here when they’re published.</p></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer dark">
        <div className="wrap footer-inner">
          <a className="brand" href="#top" aria-label="Bannerford home"><Image src="/crest.svg" alt="" width={38} height={43} /><span>Bannerford</span></a>
          <nav aria-label="Project links">
            <a href={repository}>Website on GitHub</a>
            <a href={github}>Developer on GitHub</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
