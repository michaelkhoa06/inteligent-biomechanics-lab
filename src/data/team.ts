type FirstYearScholar = {
  name: string;
  image?: string;
  profile?: string;
  interests?: string;
  job?: string;
};

type ScholarCohort = {
  year: number;
  mentor: { name: string; profile: string };
  students: FirstYearScholar[];
};

export const firstYearCohorts: ScholarCohort[] = [
  {
    "year": 2024,
    "mentor": {
      "name": "Lei Shi",
      "profile": "/members/shi"
    },
    "students": [
      {
        "name": "Anshu Rao",
        "image": "/assets/images/members/anshu.png",
        "profile": "/members/anshu",
        "interests": "Biotechnology"
      },
      {
        "name": "Maharshi Naik",
        "image": "/assets/images/members/maharshi.png",
        "profile": "/members/maharshi",
        "interests": "Software Engineering"
      },
      {
        "name": "Azam Shahbaz",
        "image": "/assets/images/members/azam.png",
        "profile": "/members/azam",
        "interests": "FPGA Engineering"
      },
      {
        "name": "Oluwafola (Sewa) Olukoya",
        "image": "/assets/images/members/sewa.png",
        "profile": "/members/sewa",
        "interests": "Medicine"
      },
      {
        "name": "Josiah Ware",
        "image": "/assets/images/members/josiah.png",
        "profile": "/members/josiah",
        "interests": "Biomedical Engineering"
      }
    ]
  },
  {
    "year": 2025,
    "mentor": {
      "name": "Yue Li",
      "profile": "/members/yue"
    },
    "students": [
      {
        "name": "Ty Johnston",
        "image": "/assets/images/members/ty.png",
        "profile": "/members/ty",
        "interests": "Mechanical Engineering"
      },
      {
        "name": "Aidan Blot",
        "image": "/assets/images/members/aiden.png",
        "profile": "/members/aidan",
        "interests": "Oncology"
      },
      {
        "name": "Yusuf Tekes",
        "image": "/assets/images/members/yusuf.png",
        "profile": "/members/yusuf",
        "interests": "Data Science · Quantitative Finance"
      },
      {
        "name": "Noelia Bermudez",
        "image": "/assets/images/members/noelia.png",
        "profile": "/members/noelia",
        "interests": "Gastroenterology"
      },
      {
        "name": "Chase Soutar",
        "image": "/assets/images/members/chase.png",
        "profile": "/members/chase",
        "interests": "Medical Technologies · Renewable Energy",
        "job": "Lead Undergraduate Researcher"
      }
    ]
  },
  {
    "year": 2026,
    "mentor": {
      "name": "Sanjian Zhang",
      "profile": "/members/sanjian"
    },
    "students": [
      {
        "name": "Ethan Stephens"
      },
      {
        "name": "Kanyin Omolabi"
      },
      {
        "name": "Louis Schoonover"
      },
      {
        "name": "Micah Wiggins"
      },
      {
        "name": "Samuel Dires"
      }
    ]
  }
];



// Visit details and photos are shared with the existing News announcements.
export const visitingScholars = [
  {
    name: "Boyang",
    image: "/assets/images/activities/activities1.png",
    imageFit: "cover",
    imagePosition: "40% center",
    institution: "Columbia University",
  },
  {
    name: "Hannah",
    image: "/assets/images/activities/activities4.png",
    institution: "Columbia University",
  },
];
