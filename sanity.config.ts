import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "hdddslj8",
  dataset: "production",
  title: "Rebecca Storm",
  apiVersion: "2025-04-15",
  basePath: "/admin",
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title("Content")
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({
              type: "collection",
              title: "Collections",
              S,
              context,
            }),
            // Regular folder for 'Projects'
            S.listItem()
              .title("Homepage")
              .child(S.documentTypeList("homepage").title("Homepage")),
            S.listItem()
              .title("About")
              .child(S.documentTypeList("about").title("About")),
            S.listItem()
              .title("Contact")
              .child(S.documentTypeList("contact").title("Contact")),
            S.listItem()
              .title("404 Page")
              .child(S.documentTypeList("notFound").title("404 Page")),
          ]);
      },
    }),
    visionTool(),
    media(),
  ],
  schema: { types: schemas },
});

export default config;
