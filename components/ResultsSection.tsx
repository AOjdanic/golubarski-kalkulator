import { useEffect, useState } from "react";
import { Text, View } from "react-native";

function formatTimestamp(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const pad = (num: number) => String(num).padStart(2, "0");

  return `${pad(hours)}h ${pad(minutes)}m ${pad(secs)}s`;
}

function average(arr: number[]): number {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

type Props = {
  results: Record<number, number>;
};

export function ResultsSection({ results }: Props) {
  const [totalTime, setTotalTime] = useState("");
  const [averageTime, setAverageTime] = useState("");

  useEffect(() => {
    const validTimes = Object.values(results).filter(Boolean);

    const resultSeconds = validTimes.reduce((sum, el) => (sum += el), 0);
    const averageResultSeconds = average(validTimes);

    const totalTimeFormatted = formatTimestamp(resultSeconds);
    const averageTimeFormatted = formatTimestamp(averageResultSeconds);

    setTotalTime(totalTimeFormatted);
    setAverageTime(averageTimeFormatted);
  }, [results]);

  return (
    <View
      style={{
        gap: 20,
        borderWidth: 2,
        borderBottomColor: "#444",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingInline: 12,
        }}
      >
        <Text
          style={{
            fontSize: 24,
          }}
        >
          Ukupno:
        </Text>
        <Text
          style={{
            fontSize: 24,
            marginLeft: 14,
          }}
        >
          {totalTime}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingInline: 12,
        }}
      >
        <Text
          style={{
            fontSize: 24,
          }}
        >
          Prosek:
        </Text>
        <Text
          style={{
            fontSize: 24,
            marginLeft: 20,
          }}
        >
          {averageTime}
        </Text>
      </View>
    </View>
  );
}
