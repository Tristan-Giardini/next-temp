import { Painting } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

export async function getPaintings(): Promise<Painting[]> {
  return createClient(config).fetch(
    groq`*[_type == "paintings"]{
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          description
      }`
  );
}

export async function getPainting(slug: string): Promise<Painting> {
  return createClient(config).fetch(
    groq`*[_type == "paintings" && slug.current == $slug][0]{
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          description
      }`,
    { slug }
  );
}
