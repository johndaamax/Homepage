export interface Job {
  id: number;
  title: string;
  company: string;
  fromTo: string;
  type: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Network/Systems Administator',
    company: 'SPHY',
    fromTo: 'Sep 2017 - Dec 2017',
    type: 'Part-Time',
    description:
      'While serving my mandatory military service, I trained as a systems and local network administrator of the school. I also provided technical and IT support to personnel of the school.',
  },
  {
    id: 2,
    title: 'Frontend Developer Consultant',
    company: 'The Akkademy - Akka Belgium',
    fromTo: 'May 2019 - Sep 2020',
    type: 'Full-Time',
    description:
      'My initial task was an internal project/app, of which I was responsible for the frontend part. The main technologies used were React for the frontend framework, Redux for state management, MaterialUI for styling and themes, as well as OpenLayers for some map-related features.',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Jaimy by Belfius',
    fromTo: 'Oct 2019 - Dec 2019',
    type: 'Contract',
    description:
      'My main task was to write a testing suite for the website app (pro.jaimy.be). Used Cypress to write end-to-end tests, simulating all user interaction on the site. Also, I worked on some site redesigns, bugfixes and component refactors. Technologies that I used were Next.JS, Redux, styled-components.',
  },
  {
    id: 4,
    title: 'Frontend Engineer',
    company: 'Staizen',
    fromTo: 'Nov 2021 - Present',
    type: 'Full-Time',
    description: `Staizen is a strategic partner for enterprise clients navigating the complexity of digital transformation. We engineer transformation with tools and expertise that bring the best of business and technology, from vision to implementation.

      The name Staizen is short for “State of Kaizen”. Inspired by the Kaizen philosophy of continuous improvement. We believe that lasting transformations is achieved by committing to getting 1% better each day.`,
  },
  {
    id: 5,
    title: 'Frontend Engineer',
    company: 'BNP Paribas Fortis',
    fromTo: 'Feb 2022 - Present',
    type: 'Contract',
    description:
      "Responsible for developing internal applications for the bank, my focus is providing the skills to develop and maintain the frontend part of it. Also a contributor to the bank's internal design system by creating and maintaining reusable components. Working with tools and technologies such as Typescipt, React, Vite, styled-components, OpenText.",
  },
];
