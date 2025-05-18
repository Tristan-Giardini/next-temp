import { getContact } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Contact() {
  const contact = await getContact();

  return (
    <div className="flex flex-col gap-10 px-5 sm:px-0">
      <p>{contact.email}</p>
      <Link
        href={`https://instagram.com/${contact.instagram.substring(1)}`}
        target="_blank"
      >
        {contact.instagram}
      </Link>
    </div>
  );
}
