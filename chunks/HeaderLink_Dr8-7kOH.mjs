import { z as createAstro, s as createComponent, t as renderTemplate, v as maybeRenderHead, x as addAttribute, I as spreadAttributes, B as renderSlot } from './astro/server_XwhvHJDT.mjs';
/* empty css                                                                  */

const $$Astro = createAstro("https://example.com");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/bujack/Desktop/Jack/funny/blue-bar/ab/src/components/HeaderLink.astro", void 0);

export { $$HeaderLink as $ };
