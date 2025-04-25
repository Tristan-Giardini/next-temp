const notFound = {
  name: "notFound",
  title: "404 Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
  ],
};

export default notFound;
