import React from "react";
import NextHead from "next/head";
import { MetaHeadEmbed } from "@phntms/react-share";

const Head = ({ pageTitle = "Home", description = "", pagePath = "home" }) => {
  return (
    <MetaHeadEmbed
      render={(meta) => <NextHead>{meta}</NextHead>}
      siteTitle="Cuartero NHS - SPA"
      pageTitle={pageTitle}
      titleTemplate="[siteTitle] | [pageTitle]"
      description={description}
      baseSiteUrl=""
      pagePath={pagePath}
      keywords={["creative-agency", "phantom", "work"]}
      imageUrl="/public/favicon.ico"
      imageAlt="Jed Logo"
      twitter={{
        cardSize: "large",
        siteUsername: "",
        creatorUsername: "",
      }}
    />
  );
};

export default Head;
