// Edit this file to add, remove, or reorder projects. No build step needed.
// featured projects show a badge; bullets/dates are optional; repo is a GitHub URL (omit if none).
const PROJECTS = [
  {
    title: "Limit Order Book",
    dates: "Aug. 2026 – Sept. 2026",
    summary: "C++ limit order book with price-time priority matching.",
    bullets: [
      "Supports limit order matching, partial fills, order cancellation, and trade generation.",
      "Built on std::map, std::list, and std::unordered_map for O(1) order lookup/cancellation, O(1) insertion within a price level, and O(log n) price-level operations.",
      "Matching engine handles full and partial fills while keeping FIFO ordering within each price level.",
    ],
    tags: ["Quant", "C++"],
    repo: "https://github.com/fuelmine/Limit-Order-Book",
    featured: true,
  },
  {
    title: "Monte Carlo Option Pricing Engine",
    dates: "July 2026 – Aug. 2026",
    summary: "Modular C++ Monte Carlo pricer for European options using geometric Brownian motion.",
    bullets: [
      "Runs up to 1 million risk-neutral simulations with reusable pricing and payoff abstractions.",
      "Validated against Black–Scholes benchmarks with errors below 0.2%; analytical prices fall within the 95% confidence intervals.",
      "Bisection-based implied-volatility solver and 3D synthetic volatility surfaces across strikes and maturities.",
    ],
    tags: ["Quant", "C++", "Python"],
    repo: "https://github.com/fuelmine/Monte-Carlo-Option-Pricing-Engine-",
    featured: true,
  },
  {
    title: "Matrix Library",
    dates: "May 2026 – June 2026",
    summary: "C++ matrix library with a custom Matrix class and dimension-safe arithmetic.",
    bullets: [
      "Operator overloading plus Gaussian elimination, determinant, rank, and linear system solving.",
      "Partial pivoting, input validation, and exception handling detect singular matrices and invalid operations.",
    ],
    tags: ["Libraries", "C++"],
    repo: "https://github.com/fuelmine/Matrix-Library",
    featured: true,
  },
  {
    title: "2D Aircraft Game",
    dates: "Nov. 2026 – Present · in progress",
    summary: "C++ and SFML game built around a scene graph and a templated resource manager.",
    bullets: [
      "Scene graph positions aircraft relative to their parent nodes.",
      "Templated resource manager lets multiple sprites share one texture.",
    ],
    tags: ["Games", "C++", "SFML"],
    repo: "https://github.com/fuelmine/SFML-Practice",
    featured: true,
  },
  {
    title: "Tetris",
    summary: "Tetris in C++ with SFML (early stage: board logic and tetromino data so far).",
    tags: ["Games", "C++", "SFML"],
    repo: "https://github.com/fuelmine/Tetris-Game",
  },
  {
    title: "Connect Four",
    summary: "Playable Connect Four in C++: human against a random computer opponent on a 7x6 board.",
    tags: ["Games", "C++"],
    repo: "https://github.com/fuelmine/Connect-4-",
  },
  {
    title: "Blackjack Simulator",
    summary: "Blackjack simulator in C++ that compares four betting and play strategies (Naive, Conservative, Basic, Counting).",
    tags: ["Games", "C++"],
    repo: "https://github.com/fuelmine/blackjack-simulator",
  },
  {
    title: "Data Structure Implementations",
    summary: "My own implementations of core data structures, used to practice quant-dev style online assessments.",
    tags: ["Libraries", "C++"],
    repo: "https://github.com/fuelmine/My-Data-Structure-Implementation",
  },
  {
    title: "Backtester",
    summary: "Early prototype of a C++ backtester: CSV data feed, portfolio, order execution simulator, and a strategy interface.",
    tags: ["Quant", "C++"],
  },
  {
    title: "Minecraft Pathfinder Engine",
    summary: "Early-stage grid and cell model for a Minecraft-style pathfinder (work in progress).",
    tags: ["Algorithms", "C++"],
  },
  {
    title: "SFML Walkthrough",
    summary: "SFML starter experiments: window, input handling, and a resource holder (work in progress).",
    tags: ["Games", "C++", "SFML"],
    repo: "https://github.com/fuelmine/SFML-Walkthrough",
  },
  {
    title: "SFML Practice",
    summary: "Home of the 2D aircraft game code: scene graph, templated resource manager, and a scrolling world.",
    tags: ["Games", "C++", "SFML"],
    repo: "https://github.com/fuelmine/SFML-Practice",
  },
];
