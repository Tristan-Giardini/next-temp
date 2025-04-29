import { getContact } from "@/sanity/sanity-utils";

export default async function Contact() {
  const contact = await getContact();

  console.log(contact);

  return (
    <div>
      {contact.name}
      {contact.email}
      {contact.instagram}
    </div>
  );
}
