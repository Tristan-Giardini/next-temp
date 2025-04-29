import { getCollection } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Fancybox from "@/app/components/Fancybox";

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
      <Fancybox
        options={{
          Carousel: {
            infinite: true,
            defaultDisplay: "flex",
            wheel: false,
            modal: false,
            closeButton: true,
          },
        }}
      >
        {collection.works.map((work, index) => {
          return (
            <a
              key={index}
              data-fancybox="gallery"
              data-caption={`<i>${work.alt}</i>, ${work.description}`}
              href={work.asset}
            >
              <Image src={work.asset} alt={work.alt} width={800} height={600} />
            </a>
          );
        })}
      </Fancybox>
      {/* {collection.works.map((work, index) => (
        <div key={index}>
          <Image src={work.asset} alt={work.alt} width={800} height={600} />
          <p dangerouslySetInnerHTML={{ __html: work.description }} />
        </div>
      ))} */}
      <div>
        <PortableText value={collection.description} />
      </div>
    </div>
  );
}
