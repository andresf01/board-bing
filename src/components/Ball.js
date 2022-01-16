import clsx from "clsx";

const Ball = ({ number, marked, onClick, big = false }) => {
  return (
    <div
      className={clsx("ball", {
        marked,
        big,
      })}
      onClick={() => onClick(number)}
    >
      <div>{number}</div>
    </div>
  );
};

export default Ball;
