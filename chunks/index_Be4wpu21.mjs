import { s as createComponent, t as renderTemplate, u as renderComponent, w as renderHead, x as addAttribute } from './astro/server_XwhvHJDT.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Footer_C4hjT2Ii.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './consts_BuHq6iFx.mjs';
import { g as getCollection } from './_astro_content_p3BI81Db.mjs';
import { $ as $$FormattedDate } from './FormattedDate_K2fWSpT1.mjs';
/* empty css                         */

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-5tznm7mj> <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "/Users/bujack/Desktop/Jack/funny/blue-bar/ab/src/pages/blog/index.astro", void 0);

const $$file = "/Users/bujack/Desktop/Jack/funny/blue-bar/ab/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
