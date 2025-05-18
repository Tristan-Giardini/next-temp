import { getAbout } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

export default async function About() {
  const about = await getAbout();

  return (
    <div className="flex px-5 sm:px-0 xl:pr-29">
      <PortableText value={about.description} />
    </div>
  );
}
