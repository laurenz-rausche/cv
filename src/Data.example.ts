import type { Data } from "./DataType";

import EmailIcon from "./Assets/email.svg";
import PhoneIcon from "./Assets/phone.svg";
import MapIcon from "./Assets/map.svg";
import CakeIcon from "./Assets/cake.svg";
import WebIcon from "./Assets/web.svg";
import GithubIcon from "./Assets/github.svg";
import LinkedInIcon from "./Assets/linkedin.svg";

export const CVData: Data = {
  //cover is optional!
  cover: {
    heading: "Heading",
    subheading: "A smaller subheading!",
  },
  sidebar: {
    data: [
      {
        type: "header",
        data: {
          heading: "Your Name",
          subheading: "Your Subheading",
        },
      },
      {
        type: "info",
        heading: "Personal Data",
        data: [
          {
            heading: "E-Mail",
            value: {
              name: "your-email@exmaple.com",
              href: "mailto:your-email@exmaple.com",
            },
            icon: EmailIcon,
          },
          {
            heading: "Telefon",
            value: {
              name: "1234567890",
            },
            icon: PhoneIcon,
          },
          {
            heading: "Address",
            value: {
              name: "Your Address",
            },
            icon: MapIcon,
          },
          {
            heading: "Geburtsdatum",
            value: {
              name: "2000-01-01",
            },
            icon: CakeIcon,
          },
          {
            heading: "Homepage",
            value: {
              name: "your-homepage.com",
              href: "https://your-homepage.com",
            },
            icon: WebIcon,
          },
          {
            heading: "GitHub",
            value: {
              name: "your-github",
              href: "https://github.com/your-github",
            },
            icon: GithubIcon,
          },
          {
            heading: "LinkedIn",
            value: {
              name: "your-linkedin",
              href: "https://linkedin.com/in/your-linkedin",
            },
            icon: LinkedInIcon,
          },
        ],
      },
      {
        type: "list",
        heading: "Qualifications",
        data: [
          {
            heading: "List 1",

            items: ["item 1", "item 2"],
          },
        ],
      },
    ],
    note: {
      name: "Made with Vite, React and TailwindCSS!",
      href: "https://lrausche.de/github-cv",
    },
  },
  content: [
    {
      heading: "Section 1",
      items: [
        [
          {
            left: "01/2000 - Today",
            right: "Lorem ipsum dolor sit amet",
          },
          {
            right: "consetetur sadipscing elitr, sed",
          },
        ],
        [
          {
            left: "01/2000 - 01/2000",
            right: "diam nonumy eirmod tempor invidunt ut",
          },
        ],
      ],
    },
    {
      heading: "Section 2",
      items: [
        [
          {
            left: "01/2000 - 01/2000",
            right: "labore et dolore magna aliquyam",
          },
          {
            right: "erat, sed diam voluptua. At vero eos et accusam",
          },
        ],
        [
          {
            left: "01/2000 - 01/2000",
            right: "no sea takimata sanctus est",
          },
          {
            right: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
          },
        ],
        [
          {
            left: "01/2000 - 01/2000",
            right: "labore et dolore magna aliquyam",
          },
          {
            right: "consetetur sadipscing elitr, sed diam nonumy eirmod",
          },
        ],
        [
          {
            left: "01/2000 - Today",
            right: "consetetur sadipscing",
          },
          {
            right: "Line 1",
          },
          {
            right: "Line 2",
          },
          {
            right: "Line 3",
          },
          {
            right: "Line 4",
          },
          {
            right: "Line 5",
          },
        ],
        [
          {
            left: "01/2000 - 01/2000",
            right: "rebum. Stet clita kasd gubergren, no sea takimata",
          },
          {
            right: " in hendrerit in vulputate velit esse",
          },
        ],
        [
          {
            left: "01/2000",
            right:
              "sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea",
          },
        ],
      ],
    },
  ],
};
