import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <section className={`${classes.section} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Card;
