import "@/styles/App.scss";
import Video from "@/components/Video/Video.tsx";
import Analytics from "@/components/Analytics/Analytics.tsx";
import {useEffect, useRef} from "react";
import Square from "@/components/Square/Square.tsx";
import {arrayIntersection} from "@/utils/array.ts";
import {useAppDispatch, useAppSelector} from "./hooks/useReduxHooks.ts";
import {addEventAction, addSquareAction, fetchData} from "@/store/videoSlice.ts";

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const addEvent = (currentTime: number | undefined) => {
    if (!currentTime) return;
    const newEvents = state.video.analyticsData.filter((item) => {
      if (currentTime >= item.timestamp && currentTime <= item.timestamp + item.duration) {
        return item;
      }
    });

    if (!newEvents.length || arrayIntersection(state.video.squares, newEvents)) return;
    const occurrenceDate = new Date().getTime();
    dispatch(addSquareAction(newEvents));
    const eventsWithDate = newEvents.map((event) => ({
      ...event,
      occurrenceDate: occurrenceDate,
    }));
    dispatch(addEventAction(eventsWithDate));
  };

  const onTimeUpdate = () => {
    const currentTime = videoRef.current?.currentTime;
    addEvent(currentTime);
  };

  const goToEvent: (timestamp: number) => void = (timestamp) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timestamp;
      videoRef.current.play(); // Опционально, чтобы видео продолжало воспроизводиться
    }
  };

  return (
    <div className="wrapper">
      <div className={"video"}>
        <Video ref={videoRef} src={import.meta.env.VITE_VIDEO_URL} onTimeUpdate={onTimeUpdate} />
        {state.video.squares.map((el) => {
          return <Square key={el.timestamp} {...el.zone} />;
        })}
      </div>
      <Analytics goToEvent={goToEvent} />
    </div>
  );
}

export default App;
