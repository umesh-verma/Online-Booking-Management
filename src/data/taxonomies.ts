import __taxonomies from "./jsons/__taxonomies.json";
import { TaxonomyType } from "./types";
import { Route } from "@/routers/types";

const DEMO_CATEGORIES: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
  href: item.href as Route,
}));

const DEMO_TAGS: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "tag",
  href: item.href as Route,
}));

// Car categories for CG Rental
const DEMO_CAR_CATEGORIES: TaxonomyType[] = __taxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
  listingType: "car" as const,
  href: item.href as Route,
}));

export {
  DEMO_CATEGORIES,
  DEMO_TAGS,
  DEMO_CAR_CATEGORIES,
};
