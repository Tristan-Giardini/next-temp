import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

const collection = {
  name: "collection",
  title: "Collection",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "collection" }),
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default collection;
