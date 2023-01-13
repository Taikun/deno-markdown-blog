/** @jsx h */

import blog, { h } from "blog";
import { Section } from './components/Section.jsx';
import "https://deno.land/x/dotenv@v3.2.0/load.ts";


blog({
  author: "Taikun Corner",
  title: "Hello, my name is Taikun Corner",
  description: "Nice to meet you",
  avatar:`${Deno.env.get("URL")}assets/logos/profile.png`,
  avatarClass: "rounded-full",
  coverTextColor:"white",
  links: [
    { title: "Email", url: "mailto:taikunchannel@gmail.com" },
    { title: "GitHub", url: "https://github.com/Taikun" },
    { title: "Twitter", url: "https://twitter.com/TaikunChannel" },
    { title: "Linkedin", url: "https://www.linkedin.com/in/daniel-lara-2b091011/" },
  ],
  lang: "en",
  favicon: `${Deno.env.get("URL")}favicon.ico`,
  section: <Section/>,
  theme:"auto",
  cover:`${Deno.env.get("URL")}assets/logos/gradient-dark-blue-futuristic-digital-grid-background.jpg`,
  ogImage: {
    url: `${Deno.env.get("URL")}assets/logos/Frame.png`,
    twitterCard:"summary_large_image" 
  },
  style:".markdown-body ul, .markdown-body ol { list-style: disc !important;}"
});
