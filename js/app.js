const { createApp } = Vue;

createApp({
  data() {
    return {
      navLink: [
        {
          linkName: "Home",
          linkHref: "",
          sublink: [
            {
              sub: "Home 1",
              subHref: "#1",
            },
            {
              sub: "Home 2",
              subHref: "#2",
            },
            {
              sub: "Home 3",
              subHref: "#3",
            },
            {
              sub: "Home 4",
              subHref: "#4",
            },
          ],
        },
        {
          linkName: "Celebrity",
          linkHref: "",
          sublink: [
            {
              sub: "Celebrity 1",
              subHref: "#1",
            },
            {
              sub: "Celebrity 2",
              subHref: "#2",
            },
            {
              sub: "Celebrity 3",
              subHref: "#3",
            },
            {
              sub: "Celebrity 4",
              subHref: "#4",
            },
          ],
        },
        {
          linkName: "Movie",
          linkHref: "",
          sublink: [
            {
              sub: "Movie 1",
              subHref: "#1",
            },
            {
              sub: "Movie 2",
              subHref: "#2",
            },
            {
              sub: "Movie 3",
              subHref: "#3",
            },
            {
              sub: "Movie 4",
              subHref: "#4",
            },
          ],
        },
        {
          linkName: "Page",
          linkHref: "",
          sublink: [
            {
              sub: "Page 1",
              subHref: "#1",
            },
            {
              sub: "Page 2",
              subHref: "#2",
            },
            {
              sub: "Page 3",
              subHref: "#3",
            },
            {
              sub: "Page 4",
              subHref: "#4",
            },
          ],
        },
        {
          linkName: "Shop",
          linkHref: "",
          sublink: [
            {
              sub: "Shop 1",
              subHref: "#1",
            },
            {
              sub: "Shop 2",
              subHref: "#2",
            },
            {
              sub: "Shop 3",
              subHref: "#3",
            },
            {
              sub: "Shop 4",
              subHref: "#4",
            },
          ],
        },
        {
          linkName: "Blog",
          linkHref: "",
          sublink: [
            {
              sub: "Blog 1",
              subHref: "#1",
            },
            {
              sub: "Blog 2",
              subHref: "#2",
            },
            {
              sub: "Blog 3",
              subHref: "#3",
            },
            {
              sub: "Blog 4",
              subHref: "#4",
            },
          ],
        },
        {
          linkName: "Contact Us",
          linkHref: "#contact",
          sublink: [],
        },
      ],

      footerCategoryLink: [
        {
          linkName: "English New Movie",
          linkHref: "#1",
        },
        {
          linkName: "Hindi All Movie",
          linkHref: "#2",
        },
        {
          linkName: "Latest Tamil Movie",
          linkHref: "#3",
        },
        {
          linkName: "New Top Rating Movie",
          linkHref: "#4",
        },
        {
          linkName: "Hornn New Movie",
          linkHref: "#5",
        },
        {
          linkName: "Animation New Movie",
          linkHref: "#6",
        },
      ],

      footerInformationLink: [
        {
          linkName: "Youtube Video Post",
          linkHref: "#1",
        },
        {
          linkName: "Actor Information",
          linkHref: "#2",
        },
        {
          linkName: "New Promotion",
          linkHref: "#3",
        },
        {
          linkName: "Latest Movie In English",
          linkHref: "#4",
        },
        {
          linkName: "Latest Film Product",
          linkHref: "#5",
        },
        {
          linkName: "Youtube New Video",
          linkHref: "#6",
        },
      ],
    };
  },

  methods: {
    hasSublinks(navlink) {
      return navlink.sublink.length > 0;
    },
  },
}).mount("#app");
