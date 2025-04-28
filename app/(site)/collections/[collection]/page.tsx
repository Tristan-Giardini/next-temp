import { getCollection } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";

type Props = {
  params: { collection: string };
};

export default async function Collection({ params }: Props) {
  const slug = params.collection;

  console.log("params", slug);

  const collection = await getCollection(slug);

  console.log("collection", collection);

  return (
    <div>
      {collection.name}
      {collection.works.map((work, index) => (
        <div key={index}>
          <Image src={work.asset} alt={work.alt} width={800} height={600} />
          <p dangerouslySetInnerHTML={{ __html: work.description }} />
        </div>
      ))}
      <div>
        <PortableText value={collection.description} />
      </div>
    </div>
  );
}
