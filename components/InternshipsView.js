import React from "react";
import InternshipCard from "./InternshipCard";

const InternshipsView = () => {
  const InternshipInfo = [
    {
      title: "React Frontend Engineer Intern",
      icon: "/icons/webdev.svg",
      company: "Facebook",
      reference: "Linkedin",
      duration: "3-4 Months",
      description: "To develop the next generation of web interfaces and design using React and NextJS"
    },
    {
      title: "Digital Marketing Specialist",
      icon: "/icons/software.svg",
      company: "Facebook",
      reference: "Linkedin",
      duration: "3-4 Months",
      description: "To develop the next generation of web interfaces and design using React and NextJS"
    },
    {
      title: "Junior Software Engineer Intern",
      icon: "/icons/digital.svg",
      company: "Microsoft",
      reference: "Linkedin",
      duration: "6 Months",
      description: "To develop the next generation of web interfaces and design using React and NextJS"
    },
    {
      title: "Junior Content Writer",
      icon: "/icons/content.svg",
      company: "Buddle",
      reference: "Linkedin",
      duration: "6 Months",
      description: "To develop the next generation of web interfaces and design using React and NextJS"
    },
  ];
  return (
    <section className="flex flex-col px-64 gap-6 py-32">
      <div className="text-4xl font-bold">Find Internships for your skills</div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-7 justify-center items-center">
        {InternshipInfo.map((card) => (
          <InternshipCard info={card} />
        ))}
      </div>
    </section>
  );
};

export default InternshipsView;
