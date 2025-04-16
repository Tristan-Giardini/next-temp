import { getPainting } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: { collection: string };
};

export default async function Collection({ params }: Props) {
  const slug = params.collection;

  console.log("params", slug);

  const painting = await getPainting(slug);

  return (
    <div>
      {painting.name}
      <div>
        <PortableText value={painting.description} />
      </div>
    </div>
  );
}
