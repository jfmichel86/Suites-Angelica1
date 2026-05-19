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
    summary: "Easy ground-floor access, close to the pool and common area.",
    description: "Suite 101 is a simple ground-floor apartment for guests who want convenience above all else. It works well for a longer Bucerias stay because it keeps daily life easy: quick access to the building entrance, the shared pool, and the walkable Golden Zone.",
    features: ["Ground-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Walkable Golden Zone location"]
  },
  {
    slug: "suite-102",
    name: "Suite 102",
    image: "/images/apartments/suite-2.svg",
    floor: "Ground floor",
    bedrooms: "1 bedroom",
    summary: "A practical ground-floor suite for seasonal living in Bucerias.",
    description: "Suite 102 offers a modest, comfortable setting for guests spending several weeks or months in Bucerias. It is a good fit for people who prefer a straightforward apartment, a small building, and the ability to walk to restaurants, cafes, and the beach.",
    features: ["Ground-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "About 3 blocks from the beach"]
  },
  {
    slug: "suite-201",
    name: "Suite 201",
    image: "/images/apartments/suite-3.svg",
    floor: "Second floor",
    bedrooms: "1 bedroom",
    summary: "A bright, comfortable option for guests settling in for the season.",
    description: "Suite 201 is designed for guests who want a dependable home base in Bucerias without paying for unnecessary luxury. It is simple, manageable, and well located for enjoying the Golden Zone at an easy pace.",
    features: ["Second-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Close to restaurants and cafes"]
  },
  {
    slug: "suite-202",
    name: "Suite 202",
    image: "/images/apartments/suite-4.svg",
    floor: "Second floor",
    bedrooms: "1 bedroom",
    summary: "A relaxed suite near Bucerias restaurants, cafes, and the beach.",
    description: "Suite 202 gives long-stay visitors a comfortable place to enjoy Bucerias without needing a car for everyday plans. It is especially convenient for snowbirds who value location, simplicity, and a friendly residential feel.",
    features: ["Second-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Golden Zone location"]
  },
  {
    slug: "suite-301",
    name: "Suite 301",
    image: "/images/apartments/suite-5.svg",
    floor: "Third floor",
    bedrooms: "1 bedroom",
    summary: "A simple seasonal rental in one of Bucerias’ most attractive areas.",
    description: "Suite 301 is ideal for guests who want a quiet, practical apartment for an extended stay. The building is small, the pool is shared, and the neighborhood is one of the most appealing areas for Canadian visitors who return to Bucerias each year.",
    features: ["Third-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Walk to the beach"]
  },
  {
    slug: "suite-302",
    name: "Suite 302",
    image: "/images/apartments/suite-6.svg",
    floor: "Third floor",
    bedrooms: "1 bedroom",
    summary: "A modest apartment for a relaxed, longer Bucerias stay.",
    description: "Suite 302 focuses on what matters most for a long visit: a comfortable place to rest, easy access to the Golden Zone, and a simple building environment. It is a practical option for guests who plan to spend most of their time enjoying Bucerias.",
    features: ["Third-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Central Bucerias area"]
  },
  {
    slug: "suite-401",
    name: "Suite 401",
    image: "/images/apartments/suite-7.svg",
    floor: "Fourth floor",
    bedrooms: "1 bedroom",
    summary: "A straightforward apartment for guests who want to feel settled in Bucerias.",
    description: "Suite 401 is suited for snowbirds, retirees, and long-stay visitors who want a simple apartment in a convenient part of town. It is not a luxury condo, but it gives guests a comfortable and well-located place to enjoy the season.",
    features: ["Fourth-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Near cafes and dining"]
  },
  {
    slug: "suite-402",
    name: "Suite 402",
    image: "/images/apartments/suite-8.svg",
    floor: "Fourth floor",
    bedrooms: "1 bedroom",
    summary: "A convenient home base for enjoying Bucerias for weeks or months.",
    description: "Suite 402 is a simple, manageable apartment for guests planning a longer stay in Bucerias. It works well for people who want a friendly neighborhood, beach access, restaurants nearby, and a practical monthly rental setup.",
    features: ["Fourth-floor location", "Air conditioning", "Kitchen basics", "Wi-Fi", "Shared pool", "Golden Zone location"]
  }
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
