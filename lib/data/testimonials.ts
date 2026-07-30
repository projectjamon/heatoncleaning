// NOTE: names/cities/topics are from the rebuild brief; exact wording is
// placeholder and should be verified with the actual customers before launch.
export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They showed up on time, walked me through exactly what they'd be doing, and my house has never felt this clean. I've already booked them for a recurring schedule.",
    name: "Norma",
    location: "Ogden, UT",
  },
  {
    quote:
      "I was skeptical about a deep clean living up to the hype, but the difference was obvious the second I walked in. Professional from the first phone call to the final walkthrough.",
    name: "Suzanne",
    location: "Salt Lake City, UT",
  },
  {
    quote:
      "As a business owner, I need a cleaning crew I don't have to babysit. Extreme Cleaning has handled our office windows and post-construction cleanup without a single issue.",
    name: "Business Owner",
    location: "South Ogden, UT",
  },
];
