import s from "./EventItem.module.scss";
import {FC} from "react";
import {IAnalyticItem} from "../../types/main.types.ts";

export interface IEvent extends IAnalyticItem {
  occurrenceDate: number;
}
interface IEventProps extends IEvent {
  goToEvent: (timestamp: number) => void;
}
const formattedData = (ms: number): string => {
  const date = new Date(ms);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Месяцы начинаются с 0
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
const formatTimestamp = (ms: number): string => {
  const m = Math.floor(ms / 60000);
  const s = (ms % 60000) / 1000;

  const formatNumber = (number: number) => {
    if (number < 10) {
      return "0" + number;
    }

    return number;
  };

  return `${m}:${formatNumber(+s.toFixed(2))}`;
};
const EventItem: FC<IEventProps> = (props) => {
  return (
    <div className={s.block}>
      <div className={s.col}>
        <div className={s.name}>Дата:</div>
        <div className={s.value}>{formattedData(props.occurrenceDate)}</div>
      </div>
      <div className={s.col}>
        <div className={s.name}>Timestamp:</div>
        <div className={s.value}>{formatTimestamp(props.timestamp * 1000)}</div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.goToEvent(props.timestamp);
        }}
      >
        Перейти
      </button>
    </div>
  );
};

export default EventItem;
