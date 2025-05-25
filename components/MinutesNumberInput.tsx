import { Dispatch, SetStateAction } from "react";
import { NumberInput } from "./NumberInput";

type Props = {
  minutes: string;
  setMinutes: Dispatch<SetStateAction<string>>;
};

export function MinutesNumberInput({ minutes, setMinutes }: Props) {
  return (
    <NumberInput
      placeholder="mm"
      value={minutes}
      setter={(value) => {
        console.log("number from text", value);
        if (Number.parseInt(value) > 59) return;
        setMinutes(value);
      }}
    />
  );
}
