import ArrowDown from "../assets/images/logo/chevron-down.svg"
export default [
    {
        id: 1,
        nav: "About",
        url: "/about",
        subMenus: null,
        arrow: null
      },
      {
        id: 2,
        nav: "Services",
        url:"#",
        arrow: ArrowDown,
        subMenus: [
          {
            id: 1,
            nav: "Ux/Ui Design",
            url: "/service/ux-ui/1",
          },
          {
            id: 2,
            nav: "Mobile App",
            url: "/service/mobile-app/2",
          },
          {
            id: 3,
            nav: "Website And Software Development",
            url: "/service/website-and-software-development/3",
          },
          {
            id: 4,
            nav: "Emerging Technology",
            url: "/service/emerging-technology/4",
          },
        ],
      },
      {
        id: 3,
        nav: "Portfolio",
        url: "/portfolio",
        subMenus: null,
        arrow: null
      },
      {
        id: 4,
        nav: "Clients",
        url: "/clients",
        subMenus: null,
        arrow: null
      },
      {
        id: 5,
        nav: "Career",
        url: "/career",
        subMenus: null,
        arrow: null
      },
      {
        id: 6,
        nav: "Partnership",
        url: "/partnership",
        subMenus: null,
        arrow: null
      },
      {
        id: 7,
        nav: "Discuss Your Project",
        url: "/discussyourproject",
        subMenus: null,
        arrow: null
      },
]