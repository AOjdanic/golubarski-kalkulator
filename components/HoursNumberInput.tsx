import { Dispatch, SetStateAction } from "react";
import { NumberInput } from "./NumberInput";

type Props = {
  hours: string;
  setHours: Dispatch<SetStateAction<string>>;
};

export function HoursNumberInput({ hours, setHours }: Props) {
  return (
    <NumberInput
      placeholder="hh"
      value={hours}
      setter={(value) => {
        console.log("number from text", value);
        if (Number.parseInt(value) > 23) return;
        setHours(value);
      }}
    />
  );
}
