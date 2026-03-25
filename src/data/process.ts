import type { ProcessStep } from "../types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with a deep-dive call to understand your goals, users, and success metrics. I ask the right questions so we align on outcomes, not just deliverables.",
    icon: "search",
  },
  {
    number: "02",
    title: "Design Solution",
    description:
      "I map out the architecture, user flows, and component breakdown — then validate with a prototype or wireframe before writing a single line of code.",
    icon: "pen-tool",
  },
  {
    number: "03",
    title: "Develop & Optimise",
    description:
      "Clean, typed, component-based code. I build iteratively with regular check-ins, Lighthouse audits baked in, and zero-compromise on code quality.",
    icon: "code",
  },
  {
    number: "04",
    title: "Deliver & Iterate",
    description:
      "Full handover with documentation, deployment support, and a 2-week post-launch window for fixes. Ongoing retainers available for continuous improvement.",
    icon: "rocket",
  },
];
