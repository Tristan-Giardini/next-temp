export type ImageType = {
  url: string;
  alt: string;
};

export type Homepage = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: ImageType;
};
