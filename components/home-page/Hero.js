import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Me.jpg"
          alt="My Image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, It's Me</h1>
      <p>I'm a blogger - Check my posts for inspiration</p>
    </section>
  );
};
export default Hero;
