import React from "react";

const Sitemap = () => {
  const pages = [
    { url: "/index.js" },
    { url: "/home.js" },
    { url: "/register.js" },
    { url: "/login.js" },
    { url: "/questionnaire.js" },
    { url: "/updateUser.js" },
    { url: "/profil.js" },
  ];

  const generateSitemapXml = () => {
    let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemapXml +=
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pages.forEach((page) => {
      const url = `https://www.teameal.fr${page.url}`;
      sitemapXml += `  <url>\n    <loc>${url}</loc>\n  </url>\n`;
    });

    sitemapXml += "</urlset>";

    return sitemapXml;
  };

  return <pre>{generateSitemapXml()}</pre>;
};

export default Sitemap;
