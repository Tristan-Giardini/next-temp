const contact = {
  name: "contact",
  title: "Contact",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
    },
  ],
};

export default contact;
