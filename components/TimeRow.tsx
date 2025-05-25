import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View } from "react-native";

import { HoursNumberInput } from "./HoursNumberInput";
import { MinutesNumberInput } from "./MinutesNumberInput";
import { SecondsNumberInput } from "./SecondsNumberInput";

type Props = {
  mapId: number;
  setTimeObjects: Dispatch<SetStateAction<Record<number, number>>>;
};

export function TimeRow({ mapId, setTimeObjects }: Props) {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const numberOfHours = Number.parseInt(hours);
    const numberOfMinutes = Number.parseInt(minutes);
    const numberOfSeconds = Number.parseInt(seconds);

    const totalSeconds =
      numberOfHours * 60 * 60 + numberOfMinutes * 60 + numberOfSeconds;

    setTimeObjects((prev: Record<number, number>) => ({
      ...prev,
      [mapId]: totalSeconds,
    }));
  }, [hours, mapId, minutes, seconds, setTimeObjects]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <HoursNumberInput hours={hours} setHours={setHours} />
      <MinutesNumberInput minutes={minutes} setMinutes={setMinutes} />
      <SecondsNumberInput seconds={seconds} setSeconds={setSeconds} />
    </View>
  );
}
