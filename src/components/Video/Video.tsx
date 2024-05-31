import {forwardRef} from "react";
import s from "./Video.module.scss";

interface IVideoProps {
  src: string;
  onTimeUpdate: (currentTime: number | undefined) => void;
}

const Video = forwardRef<HTMLVideoElement, IVideoProps>(({src, onTimeUpdate}, ref) => {
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const currentTime = e.currentTarget.currentTime;
    onTimeUpdate(currentTime);
  };

  return (
    <div className={s.block}>
      <video ref={ref} controls className={s.video} onTimeUpdate={handleTimeUpdate}>
        <source src={src} />
      </video>
    </div>
  );
});

export default Video;
