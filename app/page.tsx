import Image from "next/image"
import { Header } from "@/components/header"
import { ProductionExplorer, VillagerExplorer } from "@/components/explorers"
import { Symbol } from "@/components/symbol"

const github = "https://github.com/urosorolicki"
const repository = `${github}/bannerford-web`

const features = [
  { title: "Build", preview: "Your settlement", icon: "build", href: "#construction", art: "feature-build", copy: "From simple houses to a thriving town." },
  { title: "Produce", preview: "Your resources", icon: "grain", href: "#economy", art: "feature-produce", copy: "Gather, farm, and craft what your town needs." },
  { title: "Manage", preview: "Your people", icon: "manage", href: "#daily-life", art: "feature-manage", copy: "Assign jobs, meet needs, and help the village grow." },
  { title: "Expand", preview: "Your town", icon: "expand", href: "#world", art: "feature-expand", copy: "Find room for new roads, fields, and neighborhoods." },
] as const

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header repository={repository} />
      <main id="main-content" tabIndex={-1}>
        <div className="opening" id="top" tabIndex={-1}>
          <picture className="hero-art">
            <source media="(max-width: 600px)" srcSet="/art/bannerford-hero-mobile.webp" />
            <Image src="/art/bannerford-hero.webp" alt="An alpine village with a watermill, a stone bridge, and a red banner at the edge of the forest" fill sizes="100vw" loading="eager" fetchPriority="high" />
          </picture>
          <div className="hero-scrim" />
          <section className="hero editorial-wrap" aria-labelledby="game-title">
            <div className="hero-content">
              <p className="eyebrow hero-kicker">A medieval city-builder</p>
              <h1 id="game-title">Build. Grow. <span>Thrive.</span></h1>
              <p className="hero-description">Shape a living settlement, manage your people, and build a strong economy in Bannerford.</p>
              <div className="hero-actions">
                <a href="#settlement" className="button button-gold">Explore the Game</a>
                <a href="#journal" className="button button-ghost">Development Journal</a>
              </div>
              <nav className="hero-topics" aria-label="Explore game features">
                {features.map(({ title, preview, href, icon }) => (
                  <a href={href} key={href}><Symbol name={icon} size={24} /><span>{title}<small>{preview}</small></span></a>
                ))}
              </nav>
            </div>
            <span className="hero-credit">Concept art</span>
          </section>

          <section className="feature-deck wrap" id="features" tabIndex={-1} aria-label="Game features">
            {features.map(({ title, href, art, icon, copy }) => (
              <a href={href} className="feature-tile" key={href}>
                <Image src={`/art/${art}.webp`} alt="" fill sizes="(max-width: 900px) 50vw, 25vw" />
                <div className="feature-tile-copy"><Symbol name={icon} size={23} /><div><h2>{title}</h2><p>{copy}</p></div></div>
              </a>
            ))}
            <span className="sr-only">Feature illustrations are concept art.</span>
          </section>
        </div>

        <section className="vision" aria-labelledby="vision-title">
          <div className="vision-scroll">
            <Image className="vision-paper" src="/art/vision-parchment.webp" fill sizes="100vw" alt="" />
            <Image className="vision-sketch" src="/art/vision-sketch.webp" width={800} height={312} alt="" />
            <div className="vision-copy">
              <p className="eyebrow">The vision</p>
              <h2 id="vision-title">A Living, Breathing Settlement</h2>
              <p>Bannerford is a medieval city-builder about people, trade, and the story of a growing settlement. Build at your own pace.</p>
            </div>
            <Image className="vision-seal" src="/art/vision-seal.webp" width={305} height={320} alt="" />
          </div>
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
          <div className="wrap progression" id="construction" tabIndex={-1}>
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
      <footer className="site-footer dark" id="community" tabIndex={-1}>
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
