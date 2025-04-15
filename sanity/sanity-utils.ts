import { createClient, groq } from "next-sanity";

export async function getPaintings() {
  const client = createClient({
    projectId: "hdddslj8",
    dataset: "production",
    apiVersion: "2025-04-15",
  });

  return client.fetch(
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
