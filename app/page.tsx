import { getPaintings } from "@/sanity/sanity-utils";

export default async function Home() {
  const paintings = await getPaintings();

  return (
    <div>
      {paintings.map((painting) => (
        <div key={painting._id}>{painting.name}</div>
      ))}
    </div>
  );
}
