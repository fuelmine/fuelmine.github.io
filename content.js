// Text content for the portfolio. Projects live in projects.js.
// Leave a list empty ([]) to hide that section; leave email / resume as "" to hide those buttons.
const SITE = {
  name: "Thomas (Euijun) Kim",
  tagline:
    "Mathematics graduate student building C++ systems in quantitative finance and numerical computing.",
  github: "https://github.com/fuelmine",
  email: "kim.euij@northeastern.edu",
  resume: "", // e.g. "resume.pdf" (the PDF includes your phone number, so it is not bundled)

  about: [
    "I'm pursuing an M.S. in Mathematics at Northeastern University, after a B.S. in Mathematics with a Certificate in Computer Science at UW-Madison.",
    "I like turning mathematics into working software: limit order books, Monte Carlo pricing engines, linear algebra libraries, and games in C++.",
  ],

  education: [
    {
      school: "Northeastern University",
      detail: "M.S. in Mathematics · Boston, MA",
      dates: "Sept. 2025 – May 2027",
    },
    {
      school: "University of Wisconsin – Madison",
      detail: "B.S. in Mathematics, Certificate in Computer Science · Madison, WI",
      dates: "Aug. 2022 – May 2025",
      notes:
        "Coursework: Real Analysis I & II, Abstract Algebra I & II, Probability Theory, Honors Calculus & Linear Algebra, Linear Programming, Combinatorics",
    },
  ],

  experience: [
    {
      role: "Directed Reading Program Participant",
      org: "University of Wisconsin – Madison",
      dates: "Jan. 2024 – May 2024",
      bullets: [
        "Investigated connections between discrete random walks, diffusion, and the heat equation through weekly faculty-guided study.",
        "Analyzed stochastic models using probability and advanced calculus and presented results in weekly discussions.",
      ],
    },
    {
      role: "Mathematics Tutor",
      org: "Self-Employed, Seoul, Korea",
      dates: "May 2023 – Sept. 2023",
      bullets: [
        "Tutored high school students individually in calculus, combinatorics, probability, and elementary number theory, adapting instruction to student progress.",
      ],
    },
  ],

  skills: [
    { label: "Languages", items: ["C", "C++", "Python"] },
    { label: "Developer tools", items: ["Git", "Linux", "CMake", "GTest"] },
    { label: "Libraries", items: ["NumPy", "Pandas", "Matplotlib", "SFML"] },
  ],

  achievements: [], // none listed on the resume; add { title, detail, date } entries to show this section
};
