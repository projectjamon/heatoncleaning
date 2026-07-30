export type ServiceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Service = {
  slug: string;
  title: string;
  navTitle?: string;
  tagline: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  sections: ServiceSection[];
  closingCta: string;
  /** Extra content only rendered on the Our Services hub's post-construction highlight block. */
  checklistHref?: string;
};

export const services: Service[] = [
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    tagline: "A top-to-bottom clean that goes past the weekly routine.",
    metaDescription:
      "Professional deep cleaning services in Ogden, UT and the surrounding area — baseboards, grout, appliances, and every corner your regular clean skips.",
    heroImage: "/images/service-deep-cleaning.svg",
    heroImageAlt: "Technician deep cleaning a kitchen",
    intro:
      "Deep cleaning is the reset button for your home — the detail work that a regular maintenance clean doesn't have time for. We work room by room so nothing gets missed.",
    sections: [
      {
        heading: "What's included",
        paragraphs: [
          "Every deep clean covers the areas that build up grime over months, not days: baseboards, door frames, light switches, vents, and grout lines. In the kitchen we clean inside the microwave and behind small appliances; in bathrooms we get into tile grout and fixtures that regular cleaning glosses over.",
        ],
        bullets: [
          "Baseboards, trim, and door frames wiped down",
          "Kitchen appliance exteriors and interiors (microwave, oven exterior, fridge exterior)",
          "Bathroom tile, grout, and fixture detailing",
          "Light switches, vents, and ceiling fans dusted",
          "Interior window sills and tracks",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Dust and buildup that regular cleaning doesn't reach can affect indoor air quality and make a home feel tired even when it's tidy. A deep clean a few times a year keeps that buildup from ever becoming a bigger job — and it's the standard starting point we recommend before beginning any ongoing maintenance schedule.",
        ],
      },
      {
        heading: "Who it's for",
        paragraphs: [
          "Deep cleaning is popular before hosting, after a renovation's dust has settled, when moving into a new home, or simply as a seasonal reset. It also pairs well as the first visit before switching to a recurring maintenance plan.",
        ],
      },
    ],
    closingCta: "Ready for a home that feels genuinely clean, not just tidy?",
  },
  {
    slug: "residential-window-cleaning",
    title: "Residential Window Cleaning",
    navTitle: "Residential Windows",
    tagline: "Streak-free windows, inside and out, for your home.",
    metaDescription:
      "Residential window cleaning in Ogden and West Haven, UT — interior and exterior glass, screens, and sills cleaned safely by trained technicians.",
    heroImage: "/images/service-residential-windows.svg",
    heroImageAlt: "Technician cleaning a home's exterior windows",
    intro:
      "Clean windows change how light moves through a house. We clean residential glass inside and out, including screens and tracks, with a process built around your family's schedule and safety.",
    sections: [
      {
        heading: "What's included",
        paragraphs: [
          "We clean both sides of accessible glass, wipe down sills and tracks, and remove, clean, and reinstall screens on request. For homes with second-story windows, our technicians are trained and equipped for safe ladder work so you don't have to be.",
        ],
        bullets: [
          "Interior and exterior glass cleaning",
          "Screen removal, cleaning, and reinstallation",
          "Sill and track wipe-down",
          "Cobweb removal from window wells and frames",
        ],
      },
      {
        heading: "Working around your family",
        paragraphs: [
          "Residential jobs happen while you're living in the house — kids, pets, and daily routines don't stop for a cleaning crew. We work efficiently, keep ladders and equipment out of high-traffic areas, and let you know before we need access to a room.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Most Ogden-area homes look their best with windows cleaned twice a year — spring and fall — though homes near construction, farmland, or heavy tree cover often benefit from a quarterly visit.",
        ],
      },
    ],
    closingCta: "See the view again — get a residential window cleaning quote.",
  },
  {
    slug: "commercial-window-cleaning",
    title: "Commercial Window Cleaning",
    navTitle: "Commercial Windows",
    tagline: "Clean storefronts and office glass on a schedule that works around your business.",
    metaDescription:
      "Commercial window cleaning for offices, storefronts, and multi-story buildings in the Ogden, UT area. Fully insured technicians, flexible scheduling, maintenance contracts available.",
    heroImage: "/images/service-commercial-windows.svg",
    heroImageAlt: "Technician cleaning storefront glass on a commercial building",
    intro:
      "Storefront and office glass takes a different kind of beating than residential windows — street-level dust, fingerprints, and signage smudges that are visible to every customer who walks by. Our commercial service is built around your building and your business hours, not a residential template.",
    sections: [
      {
        heading: "What's included",
        paragraphs: [
          "We clean storefront glass, entryway doors, interior partition glass, and — for taller properties — exterior windows using extension equipment or, for multi-story buildings, water-fed pole systems reaching well above ground level. Frames, sills, and door hardware get wiped down as part of every visit.",
        ],
        bullets: [
          "Storefront and entryway glass, inside and out",
          "Interior partition and conference-room glass",
          "Multi-story exterior glass via extension and water-fed pole equipment",
          "Frame, sill, and door hardware wipe-down",
        ],
      },
      {
        heading: "Scheduling around your business",
        paragraphs: [
          "We know a ladder in front of your entrance during peak hours costs you customers. Commercial jobs are scheduled early morning, after close, or on whatever cadence keeps our crew out of your customers' way — and we coordinate directly with your facilities or office manager, not just a homeowner.",
        ],
      },
      {
        heading: "Insurance and maintenance contracts",
        paragraphs: [
          "Extreme Cleaning Services carries commercial general liability coverage, and certificates of insurance are available on request for property managers and landlords who require them before work begins.",
          "Most commercial clients move to a recurring maintenance contract — monthly, quarterly, or seasonal — so glass never has time to build up street grime between visits. Ask about setting up a standing schedule for your property.",
        ],
      },
    ],
    closingCta: "Keep your storefront looking open for business — request a commercial quote.",
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    tagline: "Clear gutters and downspouts before clogs become water damage.",
    metaDescription:
      "Gutter cleaning services in Ogden, UT — debris removal, downspout flushing, and a visual roofline check to catch problems before they become expensive.",
    heroImage: "/images/service-gutter-cleaning.svg",
    heroImageAlt: "Technician clearing debris from a home's gutters",
    intro:
      "Clogged gutters send water where it doesn't belong — into fascia boards, foundations, and basements. We clear gutters and downspouts by hand and flush the system to confirm water actually flows where it's supposed to.",
    sections: [
      {
        heading: "What's included",
        paragraphs: [
          "We hand-clear leaves, needles, and debris from gutters, then flush each downspout with water to confirm it's draining freely rather than just clearing the visible sections. Debris is bagged and removed from your property, not left in a pile on the lawn.",
        ],
        bullets: [
          "Hand-clearing of gutters and valleys",
          "Downspout flushing to confirm free flow",
          "Debris bagged and hauled away",
          "Visual check of gutter attachment, fascia, and visible roofline for early signs of damage",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "A gutter that overflows during a storm isn't just an inconvenience — over a season or two it can rot fascia boards, undermine landscaping, and push water toward your foundation. Regular clearing is one of the cheapest ways to avoid a much more expensive repair.",
        ],
      },
      {
        heading: "When to schedule",
        paragraphs: [
          "For most Ogden-area properties, late spring and late fall cover the two big debris seasons — spring bloom and autumn leaf drop. Homes with heavy tree cover often add a mid-summer visit.",
        ],
      },
    ],
    closingCta: "Don't wait for a storm to find out your gutters are clogged.",
  },
  {
    slug: "spring-cleaning",
    title: "Spring Cleaning",
    tagline: "The seasonal reset that gets your whole home ready for the year ahead.",
    metaDescription:
      "Spring cleaning services in Ogden, UT — a whole-home seasonal deep clean covering windows, baseboards, and every room, done in a single visit.",
    heroImage: "/images/service-spring-cleaning.svg",
    heroImageAlt: "Technician spring cleaning a bright living room",
    intro:
      "Spring cleaning is a whole-home seasonal reset — every room, done in one coordinated visit, so you're not chipping away at a to-do list all season.",
    sections: [
      {
        heading: "What's included",
        paragraphs: [
          "We combine deep-clean detail work with a whole-home sweep: every room dusted and wiped down top to bottom, interior windows cleaned, baseboards and trim detailed, and kitchens and bathrooms given full attention rather than a quick pass.",
        ],
        bullets: [
          "Whole-home dusting and surface cleaning, top to bottom",
          "Interior window and sill cleaning",
          "Baseboard, trim, and vent detailing",
          "Kitchen and bathroom deep clean",
          "Closets and storage areas tidied on request",
        ],
      },
      {
        heading: "Why a seasonal visit",
        paragraphs: [
          "Winter closes windows and stacks up static, dust, and dry-season buildup that a weekly clean doesn't fully clear. One thorough spring visit resets the whole house at once, rather than spreading the work over weeks of smaller cleans.",
        ],
      },
      {
        heading: "Pairs well with",
        paragraphs: [
          "Many customers book spring cleaning alongside residential window cleaning and gutter cleaning for a complete once-a-year exterior-and-interior refresh — ask about bundling when you request a quote.",
        ],
      },
    ],
    closingCta: "Start the season with a home that's actually clean, not just aired out.",
  },
  {
    slug: "power-washing",
    title: "Power Washing",
    tagline: "Restore driveways, siding, decks, and walkways without damaging the surface underneath.",
    metaDescription:
      "Power washing services in Ogden, UT for driveways, siding, decks, and walkways — pressure calibrated to the surface to lift dirt without damage.",
    heroImage: "/images/service-power-washing.svg",
    heroImageAlt: "Technician power washing a concrete driveway",
    intro:
      "Years of dirt, algae, and mildew build up on exterior surfaces gradually enough that you stop noticing — until a power wash shows you the actual color of your driveway again. We calibrate pressure to the surface so you get the buildup off, not the surface itself.",
    sections: [
      {
        heading: "Surfaces we clean",
        paragraphs: [
          "Different surfaces need different pressure and technique. We adjust our equipment and, where appropriate, use a lower-pressure soft-wash approach for siding and painted surfaces that high pressure could damage.",
        ],
        bullets: [
          "Concrete driveways, walkways, and patios",
          "Vinyl, wood, and fiber-cement siding (soft wash)",
          "Wood and composite decks",
          "Retaining walls and other hardscaping",
        ],
      },
      {
        heading: "Why surface matters",
        paragraphs: [
          "High pressure on the wrong surface can etch concrete, strip paint, or drive water behind siding. Before we start, we identify the surface and set pressure and technique accordingly — the goal is restoration, not a fast rinse that causes a different problem.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Power washing lifts algae, mildew, oil stains, and years of ground-in dirt, and is one of the fastest, most visible ways to improve curb appeal before selling a home or simply enjoying it again.",
        ],
      },
    ],
    closingCta: "See what's actually underneath the grime — get a power washing quote.",
  },
  {
    slug: "post-construction-cleanup",
    title: "Post-Construction Cleanup",
    tagline: "Construction dust and debris cleared so the space is ready to actually use.",
    metaDescription:
      "Post-construction cleaning in Ogden, UT for remodels, additions, and new builds — dust, debris, and residue removed room by room. Free checklist download.",
    heroImage: "/images/service-post-construction.svg",
    heroImageAlt: "Technician cleaning a newly renovated room after construction",
    intro:
      "Construction dust gets everywhere — into vents, on every horizontal surface, ground into new flooring. Post-construction cleanup is a different job than routine cleaning, and we treat it that way, working room by room with equipment built for fine dust and debris.",
    sections: [
      {
        heading: "What's included",
        paragraphs: [
          "We remove construction dust and debris from every surface, including areas easy to miss: window tracks, vent covers, light fixtures, and cabinet interiors. Sticker and label residue is removed from new fixtures and appliances, and floors get a final detail pass appropriate to the material.",
        ],
        bullets: [
          "Fine dust removal from all surfaces, vents, and fixtures",
          "Window, sill, and track cleaning of construction dust and residue",
          "Sticker and label removal from new fixtures and appliances",
          "Cabinet and closet interior wipe-down",
          "Final floor detail (material-appropriate)",
        ],
      },
      {
        heading: "Timing",
        paragraphs: [
          "We coordinate directly with homeowners, contractors, or property managers to schedule cleanup after the trades are done but before final walkthrough — timing that avoids re-doing work if a contractor is still finishing punch-list items.",
        ],
      },
      {
        heading: "Free checklist download",
        paragraphs: [
          "Not sure what a thorough post-construction clean should cover before your walkthrough? Download our checklist and use it to confirm nothing gets missed, whether you hire us or handle it yourself.",
        ],
      },
    ],
    closingCta: "Get the space move-in ready — request a post-construction cleanup quote.",
    checklistHref: "/downloads/post-construction-cleaning-checklist.pdf",
  },
  {
    slug: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    tagline: "Dust and debris quietly cut solar output — a clean panel is a producing panel.",
    metaDescription:
      "Professional solar panel cleaning in Ogden, UT. Dust, pollen, and bird debris removed with soft-water, non-abrasive methods that protect your panel warranty.",
    heroImage: "/images/service-solar-panel.svg",
    heroImageAlt: "Technician cleaning a residential solar panel array",
    intro:
      "Solar panels lose efficiency gradually as dust, pollen, and bird debris accumulate — often enough to notice on your utility bill before you notice it by looking at the roof. We clean panels with soft, non-abrasive methods designed to protect the glass and your manufacturer's warranty.",
    sections: [
      {
        heading: "What's included",
        paragraphs: [
          "We use deionized water and soft brushes designed specifically for solar glass — no abrasive pads, no harsh chemicals that could void a manufacturer warranty. Panels are rinsed with purified water to avoid the mineral spotting that tap water leaves behind.",
        ],
        bullets: [
          "Deionized, purified water rinse (no mineral spotting)",
          "Soft, non-abrasive brushes safe for solar glass",
          "Debris and bird-dropping removal",
          "Roof-safe access equipment and technique",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Studies on residential solar performance consistently show that dust and debris buildup can measurably reduce output — sometimes 15% or more in dusty conditions between cleanings. A clean array is simply a better-performing investment.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Most Ogden-area homes see the best return from a cleaning once or twice a year, timed around spring pollen and fall leaf drop. Panels near trees, agricultural areas, or major roads often benefit from more frequent visits.",
        ],
      },
      {
        heading: "Safety and warranty",
        paragraphs: [
          "Our technicians are trained in roof-safe access and panel-safe cleaning technique, and we avoid any method or chemical that would put a manufacturer's warranty at risk.",
        ],
      },
    ],
    closingCta: "Protect your investment — get a solar panel cleaning quote.",
  },
];

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
