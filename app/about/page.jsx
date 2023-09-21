"use client";

const About = () => {
  const handleClick = () => {
    console.log("object");
  };
  return (
    <section>
      <div onClick={handleClick}>Welcome</div>
    </section>
  );
};

export default About;
