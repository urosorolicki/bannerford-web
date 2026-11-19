import {
  BookOpenText, Buildings, GithubLogo, Hammer, HouseLine, Package,
  Path, Star, TreeEvergreen, Users, Plant,
} from "@phosphor-icons/react/ssr"

const icons = {
  tree: TreeEvergreen,
  grain: Plant,
  hammer: Hammer,
  saw: Hammer,
  box: Package,
  house: HouseLine,
  journal: BookOpenText,
  build: Buildings,
  manage: Users,
  expand: Path,
  github: GithubLogo,
  star: Star,
}

export function Symbol({ name, size = 24 }: { name: keyof typeof icons; size?: number }) {
  const Icon = icons[name]
  return <Icon aria-hidden="true" size={size} weight="regular" />
}
