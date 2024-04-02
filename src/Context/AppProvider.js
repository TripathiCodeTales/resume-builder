import React, { useContext, useState } from "react";
import AppContext from "./AppContext";

const initialData = {
  personalDetails: {
    FirstName: "Arpita", 
    LastName:"Tripathi",
    email: "arpitatripathi15@gmail.com",
    mobile: "8319078750",
    city: "Mumbai",
    country: "India",
    linkedIn: "linkedin.com/in/arpita-tripathi-896640188",
    github: "github.com/TripathiCodeTales",
  },
  skills: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Typescript",
    "EcmaScript",
    "Webpack",
    "BootStrap",
  ],
  PersonalProjects: [
    {
      title: "To-Do-Application",
      description: 
        "It includes functionality like adding item, removing item and updating item. It also includes filtering features using which we can search through all items.Entire application was built using component based approach keeping best coding standards and responsiveness in mind. TechnicalSkills- React, Redux, Javascript, TypeScript, HTML/CSS",
      
      },
    {
      title: "Movie-Application",
      description:
        "It includes multiple screen like user login, movies listing and movie details in end user side. It also has admin module which includes movie creation, movieupdation and movie deletion. Technical Skils- React, Context API, React Router, Javascript, HTML/CSS.",
    },
  ],
  education: [
    {
      degree: "M.A (English Literature)",
      college: "Symbiosis College of Arts and Commerce, Pune",
      startDate: "04/2018",
      endDate: "12/2020",
      place: "Pune",
    },
    {
      degree: "B.Com(Hons)",
      college: "Vikram University, Ujjain (M.P)",
      startDate: "04/2014",
      endDate: "04/2018",
      place: "Ujjain",
    },
    {
      degree: "HSC",
      college: "Kalidas Montessori Sr. sec. School",
      startDate: "2013",
      endDate: "2014",
      place: "Ujjain",
    },
  ],
  certification: [
    {
      courses: "Diploma in Russian Language",
      startDate: "07/2015",
      endDate: "06/2017",
      institutions: "Vikram University, Ujjain",
    },
    {
      courses: "National Seminar in English Literature",
      startDate: "2018",
      endDate: "2018",
      institutions: "Vikram University, Ujjain",
    },
  ],
  softskills: [
    "Team Work",
    "Communication",
    "Self Learning",
    "Multi Tasking",
    "Adaptability",
    "Problem Solving",
    "Quick Learner",
  ],
  workexperience: [
    {
      jobtitle: "Junior Software",
      employer: "Writeignite",
      startEndDate: "04/2021- 09/2021",
      city: "Noida",
      // task: "Achievements/Task",
      description:
        "I was handed the responsibility to enhance the UI of the company's internal project using React. Requirements gathering, analysis, design, and code testing was part of my job",
    },
  ],
  languages: [
    {
      name: "English",
      proficiency: "Native or Bilingual Proficiency",
    },
    {
      name: "Hindi",
      proficiency: "Native or Bilingual Proficiency",
    },
    {
      name: "Russian",
      proficiency: "Professional Working Proficiency",
    },
  ],
};

const AppProvider = ({ children }) => {
  const [resume, setResume] = useState(initialData);
  return (
    <AppContext.Provider value={{ resume, setResume }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
