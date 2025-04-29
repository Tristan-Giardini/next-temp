import Link from "next/link";
import { getCollections } from "@/sanity/sanity-utils";

export default async function Nav() {
  const collections = await getCollections();

  return (
    <nav className="">
      <ul className="flex space-x-4">
        {collections.map((collection) => (
          <li key={collection._id}>
            <Link href={`/collection/${collection.slug}`}>
              {collection.name}
            </Link>
          </li>
        ))}
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
