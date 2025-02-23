import { _mock } from "./_mock";
import { _tags } from "./assets";

// ----------------------------------------------------------------------

const TITLE = [
  "GreyCollar Project",
  "Technology Nixon",
  "Turn Key Smart",
  "Digital Shose",
  "Action Car",
  "The Zone UI",
  "Minimal UI",
  "Network Firefox",
];

const CONTENT = `
<h3>Supervised AI Agent Project</h3>
<br/>
<br/>
<h4>Project Brief</h4>

  <p>GreyCollar is a supervised AI agent designed to enhance human-AI collaboration by integrating human feedback into its learning and decision-making processes. It operates within a supervised learning framework, using labeled datasets to improve performance and ensure its actions align with human intentions.</p>

  <br/>
  <br/>
  <h5>Key Features</h5>
  <ul>
    <li><strong>Human-in-the-Loop Mechanism:</strong> Incorporates continuous human feedback to refine AI behavior and ensure decisions align with user expectations.</li>
    <li><strong>Autonomous Workflow Execution:</strong> Performs open-ended tasks autonomously under human supervision, balancing efficiency with control.</li>
    <li><strong>Asynchronous Communication:</strong> Supports asynchronous interactions, allowing users to provide input and receive updates at their convenience.</li>
    <li><strong>Real-Time Adaptability:</strong> Adjusts actions based on real-time data and feedback, making it suitable for dynamic environments.</li>
  </ul>

  <br/>
  <br/>
  <h5>Use Cases</h5>
  <ul>
    <li><strong>Data-Driven Decision Making:</strong> Assists in analyzing complex datasets and provides actionable insights under human oversight.</li>
    <li><strong>Automation with Supervision:</strong> Automates repetitive tasks while allowing human intervention when needed.</li>
    <li><strong>Enhanced Customer Support:</strong> Acts as a virtual assistant for customer inquiries, escalating issues to human agents when necessary.</li>
  </ul>

  <br/>
  <br/>
  <h5>Contributing</h5>
  <p>Contributions are welcome! Whether you're reporting bugs, suggesting features, or submitting pull requests, your input is valuable. Please review the contribution guidelines in the repository before getting started.</p>
`;

export const _caseStudies = TITLE.map((_, index) => {
  const galleryImgs = [
    _mock.image.marketing(0),
    _mock.image.marketing(1),
    _mock.image.marketing(2),
    _mock.image.marketing(3),
    _mock.image.marketing(4),
    _mock.image.marketing(5),
  ];

  return {
    id: _mock.id(index),
    content: CONTENT,
    title: TITLE[index],
    category: _tags[index],
    createdAt: _mock.time(index),
    website: "https://github.com/greycollar/greycollar",
    description: _mock.description(index),
    heroUrl: "/assets/images/marketing/marketing_post_hero.jpg",
    coverUrl: `/assets/images/marketing/marketing_${index + 1}.jpg`,
    how_we_work:
      "Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi",
    results:
      "Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi",
    galleryImgs,
  };
});
