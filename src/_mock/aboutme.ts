import { birthDate } from "../config";

// ----------------------------------------------

function getAge() {
  const tempBirthDate = new Date(birthDate);
  const tempToday = new Date();
  let age = tempToday.getFullYear() - tempBirthDate.getFullYear();
  const month = tempToday.getMonth() - tempBirthDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && tempToday.getDate() < tempBirthDate.getDate())
  ) {
    age--;
  }
  return age;
}

export const aboutMe = {
  title: "Let me introduce myself",
  details: [
    {
      id: 1,
      text: ` I'm Rafly Rizqullah Yusuf, a ${getAge()} years old programmer, from Indonesia. `,
      icon: "🧔🏻",
    },
    {
      id: 2,
      text: " Vocational school graduate majoring in Computer Network Engineering in 2024",
      icon: "🧑🏼‍🎓",
    },
    {
      id: 3,
      text: `
              I enjoy being challenged and engaging with projects that require me to work outside
              my comfort zone and knowledge set, as continuing to learn new languages and 
              development techniques.
          `,
      icon: "🎯",
    },
    {
      id: 4,
      text: " I'm fluent in many programming languages, especially in Javascript & Python. ",
      icon: "💻",
    },
    {
      id: 5,
      text: `
              My field of Interest are building new  Web Technologies and Products and also in 
              areas related Mobile application and Natural Language Processing.
          `,
      icon: "🔎",
    },
    {
      id: 6,
      text: `
              Whenever possible, i also apply my passion for developing products with multiple 
              different frameworks and technologies, like Django, React, Angular, Vite, Redux, Node.js ...
          `,
      icon: "💭",
    },
  ],
};
