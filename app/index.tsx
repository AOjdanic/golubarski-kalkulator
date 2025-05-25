import { ResultsSection } from "@/components/ResultsSection";
import { TimeRow } from "@/components/TimeRow";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function Index() {
  const [timeObjects, setTimeObjects] = useState<Record<number, number>>({});

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ResultsSection results={timeObjects} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        {new Array(12).fill(0).map((_, index) => (
          <TimeRow key={index} mapId={index} setTimeObjects={setTimeObjects} />
        ))}
      </ScrollView>
    </View>
  );
}
