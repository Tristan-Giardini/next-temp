import { Painting } from "@/types/Project";
import { Collection } from "@/types/Collection";
import { Contact } from "@/types/Contact";
import { About } from "@/types/About";
import { Homepage } from "@/types/Homepage";
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

export async function getHomepage(): Promise<Homepage> {
  return createClient(config).fetch(
    groq`*[_type == "homepage"][0]{
          _id,
          _createdAt,
          name,
          "image": {
            "url": image.asset->url,
            "alt": image.alt
          },
    }`
  );
}

export async function getContact(): Promise<Contact> {
  return createClient(config).fetch(
    groq`*[_type == "contact"][0]{
          _id,
          _createdAt,
          "slug": slug.current,
          name,
          email,
          instagram
    }`
  );
}

export async function getAbout(): Promise<About> {
  return createClient(config).fetch(
    groq`*[_type == "about"][0]{
          _id,
          _createdAt,
          "slug": slug.current,
          name,
          description
    }`
  );
}

export async function getCollections(): Promise<Collection[]> {
  return createClient(config).fetch(
    groq`*[_type == "collection"]|order(orderRank){
            _id,
            _createdAt,
            "slug": slug.current,
            name
        }`
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
