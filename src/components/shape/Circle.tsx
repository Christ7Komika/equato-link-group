import "./circle.css";

interface Props {
  size: number;
  pos: "left" | "middle" | "right";
}

const Circle = ({ size, pos }: Props) => {
  return (
    <div
      className={
        pos === "left"
          ? "circle left"
          : pos === "middle"
          ? "circle middle"
          : "circle right"
      }
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${size}px`,
      }}
    ></div>
  );
};

export default Circle;
