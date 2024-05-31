import {FC} from "react";
import EventItem from "@/components/EventItem/EventItem.tsx";
import {useAppSelector} from "../../hooks/useReduxHooks.ts";
import s from "./Analytics.module.scss";

const Analytics: FC<{goToEvent: (timestamp: number) => void}> = ({goToEvent}) => {
  const events = useAppSelector((state) => state.video.events);
  const sortedEvents = events?.slice().sort((a, b) => (a?.occurrenceDate < b?.occurrenceDate ? 1 : -1));
  return (
    <div className={s.analytics}>
      <h1>Analytic</h1>
      {sortedEvents.map((el) => (
        <EventItem key={el.timestamp + el.occurrenceDate} {...el} goToEvent={goToEvent} />
      ))}
    </div>
  );
};
export default Analytics;
