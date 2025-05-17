import { PortableTextBlock } from "next-sanity";

export type Collection = {
  _id: string;
  name: string;
  slug: string;
  works: Array<{
    _type: "image";
    asset: string;
    alt: string;
    description: string;
  }>;
  description: PortableTextBlock[];
  arrow: boolean;
};
