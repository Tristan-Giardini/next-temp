import { getPaintings } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const paintings = await getPaintings();
  console.log(paintings);

  return (
    <div>
      {paintings.map((painting) => (
        <div key={painting._id}>
          <h1 className="text-3xl font-bold underline">{painting.name}</h1>
          <Image
            src={painting.image}
            alt={painting.name}
            width={500}
            height={500}
          ></Image>
        </div>
      ))}
    </div>
  );
}
