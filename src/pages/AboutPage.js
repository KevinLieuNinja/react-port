import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Exp from "../components/Exp";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          I'm a full stack software engineer from Oakland, Ca. I have plenty of
          professional work experience from retail and customer service to a TSA
          Lead Screening officer at SFO. Currently I'm in the process of a
          career transition into the tech industry, and I will have completed my
          second coding bootcamp by the end of this year. Through these
          bootcamps I have gained experience in:
        </p>
        <Exp />
        <br />
        <p>
          Yes, I do not know everything, but I am a dedicated learner and I am
          willing to go above and beyond to not only get the job done but to
          grow as a coder. During my on campus bootcamp at Coding Dojo, I was
          always the first person there at 9am to the last person to leave at
          8pm.
        </p>
        <p>
          Currently my best work that I am most proud of is my{" "}
          <a href="https://github.com/KevinLieuNinja/Shopping-with-a-Cookbook">
            Shopping with a Cookbook
          </a>{" "}
          app on github. Mostly it was a joint-venture with another student from
          Coding Dojo. We made this app using React and a Spoonacular api. This
          app allows users to add ingredients to a shopping list and while
          you're shopping you can look up recipes with the ingredients from your
          list. I don't know what my passion could be at the moment, I hope that
          by being at your company it will become clearer. I just know that I
          want to keep coding and keep learning.
        </p>
        <a href="https://github.com/KevinLieuNinja">Github</a>
        <br />
        <a href="https://www.linkedin.com/in/k-lieu">Linkedin</a>
      </Content>
    </div>
  );
}

export default AboutPage;
