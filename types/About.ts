import { PortableTextBlock } from "next-sanity";

export type About = {
  _id: string;
  _createdAt: Date;
  slug: string;
  name: string;
  description: PortableTextBlock[];
};
