/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT
 * ---------------------------------------------------------------------------
 * Every piece of copy on the site lives here. Change text without touching a
 * single component. Layout is driven by geometry (see `tokens.ts`), never by
 * the length of the content that happens to be sitting in it today.
 * ---------------------------------------------------------------------------
 */

export const site = {
  /** Shown letter-by-letter in the hero. Keep it short — it is the poster. */
  displayWord: 'PORTFOLIO',
  /** Index of the character in `displayWord` that the face illustration replaces. */
  faceLetterIndex: 5, // P-O-R-T-F-[O]-L-I-O

  eyebrow: 'FULL STACK DEV / AI ML',
  year: '2026',

  firstName: 'SURESH',
  /**
   * The signature form the hero reveals as the visitor starts scrolling —
   * deliberately separate from `firstName`, which the introduction, the poster
   * and the contact note all use.
   */
  signatureName: 'SURESH MATHAV',
  lastName: 'MATHAV',

  /**
   * An invitation, not a job application. "Available to talk" rather than
   * "available for hire" is the whole difference between a personal site and
   * a job board, and it is carried by four words.
   */
  connect: {
    status: 'is available to talk',
    cta: "Let's connect",
    /** Points at the CONTACT section. Swap for a mailto: if you prefer. */
    href: '#contact',
  },

  intro: {
    heading: 'HELLO',
    lede: "Hi, I'm Suresh.",
    paragraphs: [
      'A passionate Python Full Stack Developer and AI/ML enthusiast based in London, UK.',
      'I enjoy building full-stack web applications, developing machine learning solutions, and exploring AI to turn ideas into practical software.',
    ],
  },

  education: {
    heading: 'EDUCATION',
    items: [
      {
        degree: 'Master of Science, Artificial Intelligence',
        detail: 'Queen Mary University of London | Sep 2026 – Aug 2027',
      },
      {
        degree: 'Bachelor of Technology, Computer Science',
        detail: 'K.Ramakrishnan College of Engineering | May 2021 – Jul 2025',
      },
    ],
  },

  skills: {
    heading: 'SKILLS',
    /**
     * Three columns, two rows, in file order as supplied.
     *
     * Each file carries its own background treatment and it is preserved
     * exactly: Photoshop, Premiere Pro, Claude and Procreate are rounded
     * tiles, Figma is a square black tile, Blender is a bare glyph. Nothing
     * is recoloured, restyled or given an invented container — the only
     * processing was trimming the flat padding the export files carried, so
     * they sit on paper instead of in a white box.
     *
     * `scale` is an optical nudge, not a resize: a bare glyph and a filled
     * tile of identical height do not read as the same size.
     */
    items: [
      { label: 'Python', short: 'Py', src: '/assets/skills/python.png', scale: 1 },
      { label: 'SQL', short: 'SQL', src: '/assets/skills/sql.png', scale: 1 },
      { label: 'Scikit-learn', short: 'Sk', src: '/assets/skills/scikit-learn.png', scale: 1 },
      { label: 'React', short: 'Rx', src: '/assets/skills/react.png', scale: 1 },
      { label: 'Docker', short: 'Dk', src: '/assets/skills/docker.png', scale: 1 },
      { label: 'Google Cloud', short: 'GCP', src: '/assets/skills/google-cloud.png', scale: 1 },
    ] as { label: string; short: string; src: string | null; scale: number }[],
  },

  /**
   * THE STU — abbreviated on purpose. Do not expand it.
   *
   * Every angle, drop, shadow weight and slant of handwriting is a value here
   * rather than a random seed, because randomness reads as a bug and a
   * decision reads as a hand. Rotations follow the brief: -5 / +1.2 / +4.
   */
  studio: {
    heading: 'NOTES',
    items: [
      {
        quote: 'The best way to predict the future is to build it.',
        author: 'Alan Kay',
        rotation: -5,
        drop: 0,
        shade: 0.2,
        skew: -0.9,
        indent: 1,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
      {
        quote: 'Data is the new oil, but insight is the refinery.',
        author: 'Notebook, 2026',
        rotation: 1.2,
        drop: 11,
        shade: 0.6,
        skew: 0.7,
        indent: 0,
        objectPosition: '56% 38%',
        href: null as string | null,
      },
      {
        quote: 'Every model is wrong, but some are useful.',
        author: 'George Box',
        rotation: 4,
        drop: 3,
        shade: 0.35,
        skew: -0.5,
        indent: 2,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
    ],
  },

  experience: {
    heading: 'EXPERIENCE',
    items: [
      { period: 'Sep 2026 – Present', role: 'Full Stack Developer Intern', company: 'Nexcell Solutions Ltd' },
      { period: 'Jul 2025 – Jan 2026', role: 'Data Science Intern', company: 'Gilbert Research Center, Coimbatore, India' },
      { period: 'Aug 2023 – Sep 2023', role: 'Software Development Intern', company: 'Inflabs HealthTech, Trichy, India' },
    ],
  },

  /**
   * The last page. The giant heading IS the button — there is no separate
   * rectangular CTA, the typography is the interface.
   *
   * `href: null` means the CTA acknowledges the click (the heading flips to
   * `acknowledged` for a beat) but goes nowhere yet. Set a mailto:, a Calendly
   * URL, or a contact route and it becomes a real link with the same
   * behaviour. Same rule for the social row: null renders as a muted label
   * holding the composition; a real URL turns it into a link. No invented
   * destinations.
   */
  footer: {
    heading: "Let's connect",
    acknowledged: 'See you there',
    sub: 'Have an idea, a project, or simply want to say hello?',
    href: 'mailto:iam.sureshmathav@gmail.com' as string | null,
    marquee: ['SURESH', 'PYTHON', 'AI / ML'],
    /**
     * URLs are the canonical profile paths — the `igsi` and `utm_source=share_via`
     * parameters the share sheet appends are tracking artefacts, not part of the
     * address, and they resolve identically without them.
     *
     * A `null` href renders as a muted label rather than a link, so add Behance
     * or a portfolio here the moment you have one and it lights up on its own.
     */
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suresh-mathav/' as string | null },
      { label: 'Instagram', href: 'https://www.instagram.com/suresh_mathav/' as string | null },
      { label: 'Email', href: 'mailto:iam.sureshmathav@gmail.com' as string | null },
    ],
  },
} as const

export type Site = typeof site
