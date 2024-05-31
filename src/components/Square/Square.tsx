import {FC} from "react";
import {IZone} from "../../types/main.types.ts";
import s from "./Square.module.scss";
const Square: FC<IZone> = ({left, top, width, height}) => {
  return (
    <div
      className={s.square}
      style={{
        top: `${top.toFixed(2)}px`,
        left: `${left.toFixed(2)}px`,
        width: `${width.toFixed(2)}px`,
        height: `${height.toFixed(2)}px`,
      }}
    ></div>
  );
};

export default Square;
