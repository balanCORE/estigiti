import iza from "../images/izabela_seregin.png";
import pio from "../images/piotr_jelonkiewicz.png";
import paw from "../images/pawel_pietras.png";

const Team = [
  {
    src: iza,
    function: "CEO",
    area: "People",
    responsibleOf: ["Strategy", "General management", "Marketing"],
    name: "Izabela Seregin",
    email: "izabela.seregin@estigiti.com",
    phone: "+48 602 619 159",
  },
  {
    src: paw,
    function: "COO",
    area: "Clients",
    responsibleOf: ["Partnerships", "Sales", "Support"],
    name: "Paweł Pietras",
    email: "pawel.pietras@estigiti.com",
    phone: "+48 795 192 656",
  },
  {
    src: pio,
    function: "CEO",
    area: "Technology",
    responsibleOf: ["Architectures", "Delivery", "Mentoring"],
    name: "Piotr Jelonkiewicz",
    email: "piotr.jelonkiewicz@estigiti.com",
    phone: "+48 795 197 457",
  },
];

const Navbar = {
  pageLinks: [
    { pageName: "Mission", pageAnchor: "" },
    { pageName: "Expertise", pageAnchor: "" },
    { pageName: "Experience", pageAnchor: "" },
    { pageName: "The Team", pageAnchor: "" },
    { pageName: "Get In Touch", pageAnchor: "" },
  ],
  socialLinks: [
    { pageName: "Facebook", pageAnchor: "" },
    { pageName: "LinkedIn", pageAnchor: "" },
    { pageName: "Instagram", pageAnchor: "" },
    { pageName: "Twitter", pageAnchor: "" },
    { pageName: "YouTube", pageAnchor: "" },
  ],
};

const Sections = {
  Mission: {
    sMain: {
      isMotto: false,
      motto: "",
      isHeader: true,
      header:
        "From a very first day on the mission to provide the best possible remote team and talent experience to <span>CTOs/VPs of Engineering</span>",
      isContent: false,
      content: [],
      isButton: true,
      buttonText: "CURIOUS HOW?",
    },
  },

  Expertise: {
    sMain: {
      isMotto: false,
      motto: "",
      isHeader: true,
      header: "Expertise",
      isContent: true,
      content: {
        title: "Development services",
        contentArr: [
          "Connected embedded systems & Internet of Things",
          "Embedded & Edge AI, Computer Vision",
          "Cloud-native data processing pipelines",
          "Technology evaluation, PoCs, MVPs, and product development",
        ],
      },
    },
  },
  Experience: {
    sMain: {
      isMotto: false,
      motto: "",
      isHeader: true,
      header: "Experience",
      isContent: true,
      content: [
        {
          title: "Development services",
          contentArr: ["C", "C++", "Python"],
        },
        {
          title: "COMPUTER VISION AND SMART COMPUTING",
          contentArr: ["Tensorflow (Lite)", "PyTorch"],
        },
        {
          title: "SERVER-SIDE AND CLOUD SYSTEMS",
          contentArr: ["C#", "Java", "Scala", "Python"],
        },
        {
          title: "BESPOKE LINUX-BASED SYSTEMS",
          contentArr: ["Yocto", "Buildroot"],
        },
        {
          title: "REAL-TIME SYSTEMS",
          contentArr: ["FreeRTOS", "Zephyr"],
        },
        {
          title: "CLOUD ENVIRONMENTS",
          contentArr: ["AWS", "Microsoft Azure"],
        },
      ],
    },
  },
  TheTeam: {
    sMain: {
      isMotto: false,
      motto: "",
      isHeader: true,
      header: "The Team {",
      isContent: false,
      content: [],
      isButton: false,
      buttonText: "",
    },
  },
  GetInTouch: {
    sMain: {
      isMotto: false,
      motto: "",
      isHeader: true,
      header: "Experience",
      isContent: true,
      content: [],
      isButton: true,
      buttonText: "",
    },
  },
};

export { Team, Sections, Navbar };
