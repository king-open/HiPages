import { z as createAstro, s as createComponent, t as renderTemplate, v as maybeRenderHead, x as addAttribute } from './astro/server_XwhvHJDT.mjs';

const $$Astro = createAstro("https://example.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/bujack/Desktop/Jack/funny/blue-bar/ab/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
