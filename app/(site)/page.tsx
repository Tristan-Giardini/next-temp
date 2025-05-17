import { getHomepage } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const homepage = await getHomepage();

  return (
    <div className="flex items-center justify-center">
      <Image
        src={homepage.image.url}
        alt={homepage.image.alt}
        width={700}
        height={600}
      ></Image>
    </div>
  );
}
