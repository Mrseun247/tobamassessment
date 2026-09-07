export const navLinks = [
  { label: "About", href: "#about", active: true },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Jobs", href: "#jobs" },
  { label: "Projects", href: "#projects" },
  { label: "TG Academy", href: "#tg-academy" },
  { label: "Strategic Partnership", href: "#strategic-partnership" },
  { label: "Pricing", href: "#pricing" },
];

export type FeatureSection = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  imageFirst: boolean;
};

export const featureSections: FeatureSection[] = [
  {
    id: "corporate-trainings",
    title: "Corporate Trainings",
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's growth and goals.",
    bullets: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
    image: "/images/corporate-training.svg",
    imageAlt: "Facilitator leading a corporate training workshop with a seated group",
    imageFirst: false,
  },
  {
    id: "individual-training",
    title: "Personalised Individual Training",
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. Our technical skills training covers a wide spectrum of topics to meet the evolving needs of professionals.",
    bullets: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
    image: "/images/individual-training.svg",
    imageAlt: "Trainer reviewing a personalised development plan with a participant",
    imageFirst: true,
  },
  {
    id: "capacity-development",
    title: "Capacity Development",
    description:
      "At Tobams Group, we empower individuals and organisations through tailored training programs, expert-led workshops, and personalised mentorship. We are dedicated to providing a comprehensive suite of benefits designed to foster your growth and success.",
    bullets: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalised Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
    image: "/images/capacity-development.svg",
    imageAlt: "Workshop facilitator presenting to a small group around a flipchart",
    imageFirst: false,
  },
];

export const managementProgramHighlights = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export const transformationHubHighlights = [
  "Strategic Career Guidance",
  "CV Development",
  "Leadership Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export const consultantCards = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognised certification, opening doors to new career opportunities and industry recognition.",
  },
];

export const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    avatar: "/images/avatar-aisha.svg",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Enterprise",
    avatar: "/images/avatar-john.svg",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, TechSolut Solution",
    avatar: "/images/avatar-chinonso.svg",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward!",
  },
];

export const footerColumns = [
  {
    heading: "What We Do",
    links: [
      "Sustainability Services",
      "Strategic Planning and Implementation",
      "Tech Talent Solutions",
      "Training and Development",
      "IT Consulting Services",
      "Social Impact",
    ],
  },
  {
    heading: "Company",
    links: ["About", "Jobs", "Projects", "Our Founder", "Business Model", "The Team", "Contact Us", "Blog", "FAQs", "Testimonies"],
  },
  {
    heading: "Solution",
    links: [
      "Tobams Group Academy",
      "Help & Tech Talent",
      "Career Ambassadors Program",
      "Join Our Platform",
      "Pricing",
      "Book a Consultation",
      "Join Our Slack Community",
    ],
  },
];
