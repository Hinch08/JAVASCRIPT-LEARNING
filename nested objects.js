let company = {
  name: "TechCorp",
  founded: 2010,
  location: {
    country: "Kenya",
    city: "Nairobi",
    address: {
      street: "Kenyatta Avenue",
      building: "Tech Plaza",
      floor: 5
    }
  },
  departments: [
    {
      name: "Engineering",
      head: "Alice",
      employees: [
        { id: 1, name: "John", role: "Frontend Developer", skills: ["JavaScript", "React", "CSS"] },
        { id: 2, name: "Sarah", role: "Backend Developer", skills: ["Python", "Django", "PostgreSQL"] }
      ]
    },
    {
      name: "Marketing",
      head: "Bob",
      employees: [
        { id: 3, name: "Mike", role: "SEO Specialist", skills: ["SEO", "Google Analytics", "Content Writing"] },
        { id: 4, name: "Jane", role: "Social Media Manager", skills: ["Facebook Ads", "Instagram", "Brand Strategy"] }
      ]
    }
  ],
  projects: [
    {
      title: "E-commerce Website",
      deadline: "2025-09-30",
      team: [1, 2] // Employee IDs
    },
    {
      title: "Brand Awareness Campaign",
      deadline: "2025-10-15",
      team: [3, 4]
    }
  ]
};

//TASK
// 1. Display the following
// > Instagram
// > PostgreSQL
// > E-commerce Website
// >Tech Plaza
// > 4 in team
// 2.Change the value of:
// >Google Analytics to AWS
console.log(Object.keys(company))
console.log(company.departments[1].employees[1].skills[1]);
console.log(company.departments[0].employees[1].skills[2]);
console.log(company.projects[0].title);
console.log(company.location.address.building);
console.log(company.projects[1].team[1]);

company.departments[1].employees[0].skills[1] = "AWS";
console.log(company.departments[1].employees[0].skills);
