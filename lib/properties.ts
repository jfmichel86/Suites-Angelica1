export type Property = {
  slug: string;
  name: string;
  image: string;
  floor: string;
  bedrooms: string;
  summary: string;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  {
    slug: "suite-101",
    name: "Suite 101",
    image: "/images/apartments/suite-1.svg",
    floor: "Ground floor",
    bedrooms: "1 bedroom",
    summary: "Ground-floor comfort with easy access to the pool and common area.",
    description: "Suite 101 is a welcoming ground-floor apartment with a simple rustic feel and easy access to the building entrance, shared pool, and common area. It is a good option for guests who want a comfortable Bucerias base they can settle into, whether for an annual lease, a winter season, or a shorter stay when available.",
    features: ["Ground-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Walkable Golden Zone location"]
  },
  {
    slug: "suite-102",
    name: "Suite 102",
    image: "/images/apartments/suite-2.svg",
    floor: "Ground floor",
    bedrooms: "1 bedroom",
    summary: "A comfortable ground-floor apartment in a very walkable Bucerias location.",
    description: "Suite 102 offers an easy, comfortable setting for guests who want to enjoy Bucerias without depending on a car. With a warm, simple style and access to the shared pool, it works well for guests looking for a familiar place to return to each year.",
    features: ["Ground-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "About 3 blocks from the beach"]
  },
  {
    slug: "suite-201",
    name: "Suite 201",
    image: "/images/apartments/suite-3.svg",
    floor: "Second floor",
    bedrooms: "1 bedroom",
    summary: "A bright apartment for settling into the Bucerias lifestyle.",
    description: "Suite 201 is a bright, manageable apartment for guests who want a well-located place in Bucerias at a reasonable value. It is especially appealing for people who care more about walkability, comfort, and neighborhood feel than unnecessary extras.",
    features: ["Second-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Close to restaurants and cafes"]
  },
  {
    slug: "suite-202",
    name: "Suite 202",
    image: "/images/apartments/suite-4.svg",
    floor: "Second floor",
    bedrooms: "1 bedroom",
    summary: "A relaxed apartment close to restaurants, cafes, shops, and the beach.",
    description: "Suite 202 gives guests a relaxed home base in one of the most convenient areas of Bucerias. It is a good fit for expats and seasonal residents who want a comfortable apartment, a small-building atmosphere, and the freedom to walk to many of their favorite places.",
    features: ["Second-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Golden Zone location"]
  },
  {
    slug: "suite-301",
    name: "Suite 301",
    image: "/images/apartments/suite-5.svg",
    floor: "Third floor",
    bedrooms: "1 bedroom",
    summary: "A well-located apartment in one of Bucerias’ most attractive areas.",
    description: "Suite 301 offers a comfortable, rustic-style space in the Golden Zone, one of the areas most appreciated by Canadian visitors and residents. It is a practical option for guests who want to spend more time enjoying Bucerias and less time worrying about transportation.",
    features: ["Third-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Walk to the beach"]
  },
  {
    slug: "suite-302",
    name: "Suite 302",
    image: "/images/apartments/suite-6.svg",
    floor: "Third floor",
    bedrooms: "1 bedroom",
    summary: "A cozy apartment for enjoying Bucerias at an easy pace.",
    description: "Suite 302 focuses on the things that matter most for everyday living in Bucerias: comfort, location, affordability, and a relaxed building environment. It is a good option for guests who want a place that feels easy to maintain and easy to return to.",
    features: ["Third-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Central Bucerias area"]
  },
  {
    slug: "suite-401",
    name: "Suite 401",
    image: "/images/apartments/suite-7.svg",
    floor: "Fourth floor",
    bedrooms: "1 bedroom",
    summary: "A comfortable apartment for guests who want to feel settled in Bucerias.",
    description: "Suite 401 is suited for guests who want an affordable place in a strong location, with the possibility of returning to the same familiar setting year after year. The apartment keeps daily life simple while putting you close to the beach, dining, cafes, and the Golden Zone lifestyle.",
    features: ["Fourth-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Near cafes and dining"]
  },
  {
    slug: "suite-402",
    name: "Suite 402",
    image: "/images/apartments/suite-8.svg",
    floor: "Fourth floor",
    bedrooms: "1 bedroom",
    summary: "A convenient home base for enjoying Bucerias year after year.",
    description: "Suite 402 is a comfortable, easygoing apartment for guests who want a Bucerias base they can enjoy for longer stays or return to regularly. With the Golden Zone location, shared pool, and walkable surroundings, it offers strong value in a desirable area.",
    features: ["Fourth-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Golden Zone location"]
  }
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
