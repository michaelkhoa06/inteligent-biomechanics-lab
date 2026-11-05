export interface NewsItem {
  date: string;
  dateLabel: string;
  tag: string;
  topics: string[];
  title: string;
  fit?: "contain";
  images: { src: string; alt: string }[];
  paragraphs: string[];
  listAfterParagraph?: number;
  list?: string[];
}

export const newsTopics = [
  { slug: "research", label: "Research" },
  { slug: "collaboration", label: "Collaboration" },
  { slug: "visitors", label: "Visitors" },
  { slug: "awards", label: "Awards & Recognition" },
  { slug: "students", label: "Students" },
  { slug: "lab-life", label: "Lab Life" },
];

export const news: NewsItem[] = [
  {
    date: "2026-10-14",
    dateLabel: "Oct 14, 2026",
    tag: "Conference",
    topics: ["research", "students"],
    title: "SES 2026: Oral Presentations",
    images: [
      { src: "/assets/images/activities/purdue-1.jpeg", alt: "Lab members at Purdue University during SES 2026" },
      { src: "/assets/images/activities/purdue-2.jpeg", alt: "SES 2026 conference visit at Purdue University" },
    ],
    paragraphs: [
      "Our lab participated in SES 2026, where Yue Li and Nanlong Sun gave oral presentations sharing their research with the mechanics community.",
    ],
  },
  {
    date: "2026-10-08",
    dateLabel: "Oct 8, 2026",
    tag: "First-Year Scholars",
    topics: ["research", "students"],
    title: "Welcome Our First-Year Scholars!",
    images: [
      { src: "/assets/images/activities/fysp.jpg", alt: "Our First-Year Scholars research team" },
    ],
    paragraphs: [
      "We are excited to welcome our new **First-Year Scholars** to our research team!",
      "Please join us in welcoming:",
      "Under the faculty guidance of **Dr. Lei Shi**, and with **Sanjian Zhang** serving as their **Direct Research Mentor**, these scholars will have the opportunity to gain hands-on research experience, develop technical and analytical skills, and explore innovative approaches to engineering and scientific challenges.",
      "We look forward to supporting their academic growth, encouraging collaboration, and helping them build a strong foundation for their future research careers.",
      "**Welcome to the team! We are excited to see what you will accomplish!**",
      "#FirstYearScholars #UndergraduateResearch #ResearchMentorship #EngineeringResearch #KennesawStateUniversity",
    ],
    listAfterParagraph: 1,
    list: [
      "Ethan Stephens",
      "Kanyin Omolabi",
      "Louis Schoonover",
      "Micah Wiggins",
      "Samuel Dires",
    ],
  },
  {
    date: "2026-09-10",
    dateLabel: "Sep 10, 2026",
    tag: "Lab Visit",
    topics: ["visitors", "collaboration", "students"],
    title: "Wheeler High School Internship Coordinator Visits Lab",
    images: [
      { src: "/assets/images/activities/2026-09-10.jpg", alt: "Liz Gainsford visiting the lab" },
    ],
    paragraphs: [
      "It was an honor to welcome Liz (Jefferson) Gainsford, Internship Coordinator at Wheeler High School's Center for Advanced Studies, to our lab. We are proud to witness the remarkable growth and development of Jonathan, who is consistently the first to arrive at the lab and has demonstrated exceptional performance across all research tasks.",
      "Ms. Gainsford expressed strong interest in future collaborations. We look forward to welcoming more talented high school students to join us for internships!",
    ],
  },
  {
    date: "2026-09-10",
    dateLabel: "Sep 10, 2026",
    tag: "Team Building",
    topics: ["lab-life", "students"],
    title: "Lab BBQ & Welcome Event at Morgan Falls Overlook Park",
    images: [
      { src: "/assets/images/activities/2026-09-10-2.jpg", alt: "Lab BBQ group photo" },
      { src: "/assets/images/activities/2026-09-10-3.jpg", alt: "Grilling at the park" },
      { src: "/assets/images/activities/2026-09-10-4.jpg", alt: "Team enjoying the BBQ" },
      { src: "/assets/images/activities/2026-09-10-5jpg.jpg", alt: "Fish on the grill at the lab BBQ" },
    ],
    paragraphs: [
      "Our lab recently held its very first group outing and BBQ at the scenic Morgan Falls Overlook Park! It was a fantastic opportunity for everyone to unwind, enjoy great food, and give a warm welcome to our new Ph.D. students, Sanjian Zhang and Nanlong Sun.",
      "Surrounded by nature and good company, the team fired up the grill and spent the day sharing stories and laughs outside the lab. This inaugural team-building event set a wonderful tone for our growing research group, fostering a strong sense of community and collaboration.",
      "Please join us in giving a huge congratulations to Sanjian Zhang and Nanlong Sun as they officially embark on their Ph.D. journeys. We are excited to see the impact they will make and look forward to sharing this inspiring academic adventure together!",
    ],
  },
  {
    date: "2026-05-28",
    dateLabel: "May 28, 2026",
    tag: "Alumni Spotlight",
    topics: ["awards", "students"],
    title: "Alumnus Josiah Ware Featured in President's Monthly Message",
    fit: "contain",
    images: [
      { src: "/assets/images/activities/2026-05-28.png", alt: "Josiah Ware featured in President's Monthly Message" },
    ],
    paragraphs: [
      "We are thrilled to share that our lab alumnus, Josiah Ware, was recently highlighted in the president's monthly message for his exceptional undergraduate research at Kennesaw State University!",
      "Under the guidance of Dr. Lei Shi, Josiah contributed to developing patient-specific virtual heart models using advanced imaging and machine learning. His work focuses on transforming CT scans into detailed 3D representations to simulate cardiac function and help medical professionals diagnose and personalize heart treatments more efficiently. Congratulations, Josiah, on this well-deserved recognition!",
    ],
  },
  {
    date: "2026-04-22",
    dateLabel: "Apr 22, 2026",
    tag: "Research Showcase",
    topics: ["research", "students"],
    title: "Spring Symposium 2026: Poster Presentation",
    images: [
      { src: "/assets/images/activities/activities7.jpg", alt: "First Year Scholars team at the Spring Symposium poster session" },
    ],
    paragraphs: [
      "Our First Year Scholars team presented a poster on how differences in esophageal tissue strain may support more personalized AI-based analysis of endoscopy results. The project focused on comparing the muscular and mucosal layers of the esophagus and examining how tissue response changes by direction.",
    ],
  },
  {
    date: "2025-12-05",
    dateLabel: "Dec 5 – Dec 12, 2025",
    tag: "Visiting Scholar",
    topics: ["visitors", "collaboration", "research"],
    title: "Scholar Visit: Boyang (Columbia University)",
    images: [
      { src: "/assets/images/activities/activities1.png", alt: "Boyang visiting the lab" },
    ],
    paragraphs: [
      "We welcomed Boyang, a second-year PhD student from Columbia University. During the visit, he conducted biaxial mechanical stretching experiments on the heart and collaborated with our team on experimental planning and analysis.",
      "This visit supported cross-institution collaboration and hands-on knowledge exchange in cardiac biomechanics. The team discussed protocols, data quality checks, and next steps for integrating results into modeling workflows.",
    ],
    list: [
      "Hands-on biaxial testing workflow and setup",
      "Discussion on experimental repeatability and measurement alignment",
      "Planning follow-up analysis and potential future collaboration",
    ],
  },
  {
    date: "2025-11-19",
    dateLabel: "Nov 19, 2025",
    tag: "Seminar",
    topics: ["visitors", "research"],
    title: "Research Seminar Recap: Dr. Hai Dong (Emory University)",
    images: [
      { src: "/assets/images/activities/activities2.png", alt: "Dr. Hai Dong presenting a research seminar" },
    ],
    paragraphs: [
      "Our lab welcomed Dr. Hai Dong from Emory University for a research seminar titled \"The Unified-Fiber-Distribution (UFD) Model: Three Applications in Vascular Biomechanics.\"",
      "During the seminar, Dr. Dong introduced the UFD model, a new way to represent fibers in vascular tissues that's more realistic and accurate than traditional fiber-family-based models. He also showcased three applications:",
    ],
    list: [
      "Quantifying gene- and age-related arterial stiffening",
      "Identifying material properties of aortic aneurysms in vivo",
      "Modeling aortic tissue growth",
    ],
  },
  {
    date: "2025-10-03",
    dateLabel: "Oct 3, 2025",
    tag: "Networking",
    topics: ["collaboration", "students", "lab-life"],
    title: "Y Computing System Lab Meet-and-Greet",
    images: [
      { src: "/assets/images/activities/activities3.png", alt: "Meet-and-greet with the Y Computing System Lab" },
    ],
    paragraphs: [
      "Our lab's freshman scholars held a meet-and-greet event with the Y Computing System Lab. The event provided an opportunity for students to connect, exchange ideas, and foster collaboration between the two labs.",
    ],
  },
  {
    date: "2025-08-25",
    dateLabel: "Aug 25, 2025",
    tag: "Media Feature",
    topics: ["research", "awards"],
    title: "Dr. Shi Interviewed by the University: Advancing Gastrointestinal Research",
    fit: "contain",
    images: [
      { src: "/assets/images/activities/activities5.png", alt: "Dr. Lei Shi university interview feature" },
    ],
    paragraphs: [
      "Dr. Shi was interviewed by the university for the second time, discussing his work on gastrointestinal research. The interview focused on how he leverages his engineering background to develop solutions for stomach diseases, highlighting the innovative, interdisciplinary approach of his lab.",
    ],
  },
  {
    date: "2025-08-24",
    dateLabel: "Aug 24 – Sep 3, 2025",
    tag: "Visiting Scholar",
    topics: ["visitors", "collaboration", "research"],
    title: "Scholar Visit: Hannah (Columbia University)",
    images: [
      { src: "/assets/images/activities/activities4.png", alt: "Hannah visiting the lab" },
    ],
    paragraphs: [
      "We welcomed Hannah, a 3rd-year PhD student from Columbia University, to our lab! She worked on uniaxial heart stretching experiments and got hands-on experience in cardiac biomechanics research.",
      "Hannah's visit strengthened our collaboration with Columbia University and provided hands-on training in uniaxial testing for cardiac tissue. During her time in the lab, she supported experiment setup and execution, reviewed data quality checks, and helped align testing parameters with our broader study goals in cardiac biomechanics.",
    ],
    list: [
      "Hands-on uniaxial stretching workflow: specimen mounting, preconditioning, and test execution",
      "Discussion of protocol consistency, calibration, and data quality/organization for downstream analysis",
      "Planning next steps for interpreting results and integrating findings into ongoing research efforts",
    ],
  },
  {
    date: "2025-06-22",
    dateLabel: "June 22 – June 25, 2025",
    tag: "Conference",
    topics: ["research", "awards", "students"],
    title: "ASME SBC 2025: Lab Representation & Yue Li Travel Award",
    images: [
      { src: "/assets/images/activities/activities6.png", alt: "Dr. Shi and Yue Li at ASME SBC 2025" },
    ],
    paragraphs: [
      "Dr. Shi and his PhD student Yue Li represented our lab at the ASME SB3C Summer Bioengineering Conference (SBC 2025). During the conference, Yue Li received the Culture and Community Travel Award for the 2025 ASME SBC in recognition of her contributions.",
      "SBC 2025 gave our team a chance to step back from day-to-day experiments and benchmark our work against what other groups are building right now. Beyond attending sessions, we used the conference to trade notes on current best practices, get feedback on our research direction, and bring home practical ideas we can apply immediately, especially around presenting results clearly and designing studies that are easier to reproduce across labs.",
    ],
    list: [
      "Presented our lab's research and connected with faculty, students, and industry partners in the biomechanics community",
      "Discussed current challenges and emerging methods in bioengineering, including experimental design, data interpretation, and modeling workflows",
      "Captured takeaways and next steps for future collaborations, presentations, and publication planning based on conference feedback",
    ],
  },
];
