import { Dispatch, SetStateAction } from "react";
import { NumberInput } from "./NumberInput";

type Props = {
  seconds: string;
  setSeconds: Dispatch<SetStateAction<string>>;
};

export function SecondsNumberInput({ seconds, setSeconds }: Props) {
  return (
    <NumberInput
      placeholder="mm"
      value={seconds}
      setter={(value) => {
        console.log("number from text", value);
        if (Number.parseInt(value) > 59) return;
        setSeconds(value);
      }}
    />
  );
}
