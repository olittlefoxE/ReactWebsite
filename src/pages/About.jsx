// ReactWebsite/src/pages/About.jsx
import React from "react";

const teamMembers = [
  {
    name: "Robin Stiller",
    nickname: "olittlefoxE",
    bio: "I am currently a student, passionate about learning and honing my programming skills. I'm focused on Front-End-Dev.",
  },
  {
    name: "Dennis Plischke",
    nickname: "Minecraftletsplay",
    bio: "I am a student at a technical high school focusing on computer science, with a passion for programming - primarily in C#.",
  },
];

export const About = () => {
  return (
    <div className="mx-auto mb-10 mt-10 max-w-5xl rounded-lg p-8 font-RobotoSlab shadow-lg">
      <h1 className="mb-6 text-center text-4xl font-extrabold">About Us</h1>
      <p className="text-lg leading-relaxed">
        Welcome to{" "}
        <span className="font-semibold">Robin & Dennis' Code Forge!</span>
        <br />
        <br />
        This website is a collaborative project created by{" "}
        {teamMembers.map((member, index) => (
          <React.Fragment key={index}>
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {member.name}
            </span>{" "}
            (aka <em className="text-black">{member.nickname}</em>)
            {index < teamMembers.length - 1 && " and "}
          </React.Fragment>
        ))}
        .
      </p>
      <div className="mt-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="mb-6 leading-relaxed">
            <strong className="text-black">
              ({member.name.split(" ")[0]})
            </strong>{" "}
            {member.bio}
          </div>
        ))}
      </div>
      <p className="text-lg leading-relaxed text-black">
        Our goal is to use this website as a platform to deepen our knowledge of
        HTML, CSS, React, and the intricacies of web development, including how
        to set up, run, and maintain a website.
        <br />
        <br />
        Through this project, we aim to showcase our programming skills by
        presenting various projects we've developed in multiple programming
        languages. You can hover over any programming language on our website to
        learn about its purpose, history, and key features. Clicking on a
        language will reveal projects we've created using it (if available).
        <br />
        <br />
        This is our first professional public website. It’s a hobby project born
        from our shared interest in programming and web development. We hope you
        enjoy exploring it as much as we enjoyed creating it!
      </p>
    </div>
  );
};
