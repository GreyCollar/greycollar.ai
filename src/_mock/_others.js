import { _mock } from "./_mock";

// ----------------------------------------------------------------------

export const _categories = [
  { label: "Marketing", path: "" },
  { label: "Community", path: "" },
  { label: "Tutorials", path: "" },
  { label: "Business", path: "" },
  { label: "Management", path: "" },
];

// ----------------------------------------------------------------------

export const _testimonials = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.avatar(index),
  createdAt: _mock.time(index),
  ratingNumber: 5,
  review:
    "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
}));

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: "github",
    label: "GitHub",
    icon: "carbon:logo-github",
    color: "white",
    url: "https://github.com/NucleoidJS/Nucleoid",
  },
  {
    value: "x",
    label: "X",
    icon: "carbon:logo-x",
    color: "white",
    url: "https://twitter.com/NucleoidJS",
  },
  {
    value: "discord",
    label: "Discord",
    icon: "carbon:logo-discord",
    color: "white",
    url: "https://discord.gg/wN49SNssUw",
  },
];

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ["Jordan", "Canada", "Portugal"].map(
  (office, index) => ({
    id: _mock.id(index),
    country: office,
    address: _mock.fullAddress(index),
    phoneNumber: _mock.phoneNumber(index),
    email: _mock.email(index),
    photo: _mock.image.travel(index + 4),
    latlng: LAT_LONG[index],
  }),
);

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  "airbnb",
  "dropbox",
  "facebook",
  "google",
  "heroku",
  "lenovo",
  "microsoft",
  "netflix",
  "slack",
  "spotify",
  "tripadvisor",
  "vimeo",
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}_original.svg`,
}));

// ----------------------------------------------------------------------

export const _faqs = [
  {
    question: "What is GreyCollar?",
    answer:
      "GreyCollar is a supervised AI agent designed to enhance human-AI collaboration. It integrates human feedback into its learning and decision-making processes, allowing for autonomous task execution while remaining under human supervision for better control and relevance.",
  },
  {
    question: "How does the human-in-the-loop system work?",
    answer:
      "GreyCollar allows users to provide real-time feedback during its operation. This feedback helps adjust the AI's actions, ensuring it aligns with user intentions and improves over time through supervised learning.",
  },
  {
    question: "What makes GreyCollar different from other AI tools?",
    answer:
      "Unlike fully autonomous AI tools, GreyCollar emphasizes human supervision through its human-in-the-loop system. This ensures that all AI actions remain aligned with human intent, providing more accurate and contextually relevant outcomes.",
  },
  {
    question: "What industries can benefit from using GreyCollar?",
    answer:
      "GreyCollar is versatile and can be applied across various industries, including finance, healthcare, customer service, research, and technology. Its ability to automate tasks with human supervision makes it useful for any field that values both efficiency and accuracy.",
  },
  {
    question: "Do I need AI expertise to use GreyCollar?",
    answer:
      "No, you don’t need to be an AI expert to use GreyCollar. The platform is designed with user-friendly features and clear documentation, making it accessible for users with basic technical knowledge. However, advanced users can dive deeper into customization and integrations.",
  },
].map(({ question, answer }, index) => ({
  id: _mock.id(index),
  question,
  answer,
}));

export const _faqsSupport = [
  `[Covid] Seasonal Shopping Guide`,
  "I Want To Check Where My Order Is Delivered",
  "[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?",
  "[Seller] Start Selling With Shopee",
  "Why Is My Account Locked/Limited?",
  "Free Shipping Code User Guide (Freeship Code)",
  "How To Buy / Order On Shopee App",
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
}));
