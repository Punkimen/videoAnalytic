export interface IZone {
  left: number;
  top: number;
  width: number;
  height: number;
}
export interface IAnalyticItem {
  timestamp: number;
  duration: number;
  zone: IZone;
}
