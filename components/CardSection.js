import React from "react";
import IconCard from "./IconCard";

const CardSection = () => {
  const CardInfo = [
    {
      name: "Web Development",
      icon: "/icons/webdev.svg",
    },
    {
      name: "Software Dev",
      icon: "/icons/software.svg",
    },
    {
      name: "Digital Marketing",
      icon: "/icons/digital.svg",
    },
    {
      name: "Content Writing",
      icon: "/icons/content.svg",
    },
  ];
  return (
    <section className="flex flex-col px-64 gap-6">
      <p className="text-6xl py-32 font-bold leading-snug"><span className="text-blue-500">Internships and collaborative</span> <br/>projects under one hood.</p>
      <div className="text-4xl font-bold">Find Internships for your skills</div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {CardInfo.map((card) => (
          <IconCard info={card} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
