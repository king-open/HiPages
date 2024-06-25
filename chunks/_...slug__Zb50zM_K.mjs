import { z as createAstro, s as createComponent, t as renderTemplate, u as renderComponent } from './astro/server_XwhvHJDT.mjs';
import { g as getCollection } from './_astro_content_p3BI81Db.mjs';
import { $ as $$BlogPost } from './BlogPost_B2bbtGY4.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/bujack/Desktop/Jack/funny/blue-bar/ab/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/bujack/Desktop/Jack/funny/blue-bar/ab/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
