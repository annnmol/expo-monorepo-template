import { Text, View } from "react-native";
import ExampleComponent from "@features/components/demo/example";
import { hello } from "@common/src/index";
import { theme } from "@common/src/theme";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.secondary,
        padding: 20,
      }}
    >
      <Text>Second App {hello}</Text>
      <ExampleComponent />
    </View>
  );
}
