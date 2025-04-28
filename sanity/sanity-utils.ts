import { Painting } from "@/types/Project";
import { Collection } from "@/types/Collection";
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

export async function getCollection(slug: string): Promise<Collection> {
  return createClient(config).fetch(
    groq`*[_type == "collection" && slug.current == $slug][0]{
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          "works": works[]{ 
                _type,
                "asset": asset->url,
                "description": asset->description,
                "alt": asset->title
          },
          description
      }`,
    { slug }
  );
}
