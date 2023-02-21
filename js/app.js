const { createApp } = Vue;

createApp({
  data() {
    return {
      navLink: [
        {
          linkName: "Home",
          sublink: [
            {
              sub: "Home 1",
            },
            {
              sub: "Home 2",
            },
            {
              sub: "Home 3",
            },
            {
              sub: "Home 4",
            },
          ],
        },
        {
          linkName: "Celebrity",
          sublink: [
            {
              sub: "Celebrity 1",
            },
            {
              sub: "Celebrity 2",
            },
            {
              sub: "Celebrity 3",
            },
            {
              sub: "Celebrity 4",
            },
          ],
        },
        {
          linkName: "Movie",
          sublink: [
            {
              sub: "Movie 1",
            },
            {
              sub: "Movie 2",
            },
            {
              sub: "Movie 3",
            },
            {
              sub: "Movie 4",
            },
          ],
        },
        {
          linkName: "Page",
          sublink: [
            {
              sub: "Page 1",
            },
            {
              sub: "Page 2",
            },
            {
              sub: "Page 3",
            },
            {
              sub: "Page 4",
            },
          ],
        },
        {
          linkName: "Shop",
          sublink: [
            {
              sub: "Shop 1",
            },
            {
              sub: "Shop 2",
            },
            {
              sub: "Shop 3",
            },
            {
              sub: "Shop 4",
            },
          ],
        },
        {
          linkName: "Blog",
          sublink: [
            {
              sub: "Blog 1",
            },
            {
              sub: "Blog 2",
            },
            {
              sub: "Blog 3",
            },
            {
              sub: "Blog 4",
            },
          ],
        },
        {
          linkName: "Contact Us",
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
