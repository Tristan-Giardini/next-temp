import { getCollection } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Fancybox from "@/app/components/Fancybox";
import ScrollToTop from "@/app/components/ScrollToTop";

export default async function Collection({
  params,
}: {
  params: { collection: string };
}) {
  const collection = await getCollection(params.collection);

  return (
    <div className="flex flex-col items-center gap-10">
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
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:align-center max-width-[900px]">
          {collection.works.map((work, index) => {
            return (
              <a
                key={index}
                data-fancybox="gallery"
                data-caption={`<i>${work.alt}</i>, ${work.description}`}
                href={work.asset}
              >
                <Image
                  src={work.asset}
                  alt={work.alt}
                  width={800}
                  height={600}
                  className="carousel-image"
                />
              </a>
            );
          })}
        </div>
      </Fancybox>
      {collection.description && (
        <div className="flex flex-col gap-8 px-5 sm:px-0  xl:pr-29">
          <PortableText value={collection.description} />
        </div>
      )}
      {collection.arrow && (
        <div className="sm:hidden">
          <ScrollToTop />
        </div>
      )}
    </div>
  );
}
