import { getHomepage } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const homepage = await getHomepage();

  return (
    <>
      <Image
        src={homepage.image.url}
        alt={homepage.image.alt}
        width={500}
        height={500}
      ></Image>
    </>
  );
}
