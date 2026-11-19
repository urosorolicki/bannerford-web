"use client"

import Image from "next/image"
import { useState } from "react"
import { Symbol } from "./symbol"

const villagers = [
  {
    name: "Woodcutter", icon: "tree", title: "From the treeline to town",
    art: "woodcutter", alt: "A woodcutter carries a log beside stacked timber near the river",
    copy: "A woodcutter heads for the trees and hauls timber back along the road. The distance between the woodland, the yard, and home helps shape the rhythm of the workday.",
  },
  {
    name: "Farmer", icon: "grain", title: "The work of the season",
    art: "farmer", alt: "A farmer gathers grain in a strip field beside a timber farmstead",
    copy: "A farmer tends the fields, brings in the harvest, and carries it to storage. Nearby homes and granaries leave less of the day to walking and more for work in the fields.",
  },
  {
    name: "Builder", icon: "hammer", title: "A frame becomes a home",
    art: "builder", alt: "Builders fit oak beams into the timber frame of a medieval house",
    copy: "A builder raises a home in stages. Bringing timber and stone to the site keeps the work moving, from laying the foundations to setting the beams in place.",
  },
] as const

export function VillagerExplorer() {
  const [selected, setSelected] = useState(0)
  const villager = villagers[selected]

  return (
    <div className="villager-explorer">
      <div className="villager-choices" role="group" aria-label="Villager occupations">
        {villagers.map(({ name, icon }, index) => (
          <button type="button" key={name} aria-pressed={index === selected} onClick={() => setSelected(index)}>
            <Symbol name={icon} size={22} />{name}
          </button>
        ))}
      </div>
      <div className="villager-detail">
        <figure className="villager-art">
          <Image src={`/art/${villager.art}.webp`} alt={villager.alt} width={760} height={504} />
          <figcaption>Concept art</figcaption>
        </figure>
        <div className="villager-copy" aria-live="polite">
          <span className="eyebrow">{villager.name}</span>
          <h3>{villager.title}</h3>
          <p>{villager.copy}</p>
        </div>
      </div>
    </div>
  )
}

const production = [
  { name: "Gather", place: "Woodland", icon: "tree", copy: "Woodcutters harvest trees near the settlement and carry raw timber back from the woodland. A short route to the yard keeps timber moving." },
  { name: "Process", place: "Workshop", icon: "saw", copy: "Workers turn raw timber into boards at a workshop. Its supply depends on what arrives from the woods and how much the workshop can handle." },
  { name: "Store", place: "Warehouse", icon: "box", copy: "Boards wait in storage until a construction site needs them. A warehouse close to both the workshop and the road helps keep deliveries moving." },
  { name: "Deliver", place: "Building site", icon: "house", copy: "Boards travel from storage to a building site. When supplies arrive, builders can move from the frame toward a finished home." },
] as const

export function ProductionExplorer() {
  const [selected, setSelected] = useState(0)
  const step = production[selected]

  return (
    <div className="production">
      <div className="production-choices" role="group" aria-label="Timber production stages">
        {production.map(({ name, place, icon }, index) => (
          <button type="button" key={name} aria-pressed={index === selected} onClick={() => setSelected(index)}>
            <Symbol name={icon} size={27} />
            <span className="step-name">{name}</span>
            <span className="step-place">{place}</span>
          </button>
        ))}
      </div>
      <div className="production-detail" aria-live="polite">
        <h3>{step.place}</h3>
        <p>{step.copy}</p>
      </div>
    </div>
  )
}
