import { getAbout } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

export default async function About() {
  const about = await getAbout();

  return (
    <div>
      <div>
        <PortableText value={about.description} />
      </div>
    </div>
  );
}
