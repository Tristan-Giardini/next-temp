import { PortableTextBlock } from "next-sanity";

export type Painting = {
  _id: string;
  _createdAt: Date;
  slug: string;
  name: string;
  image: string;
  description: PortableTextBlock[];
};
