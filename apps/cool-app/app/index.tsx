import { Text, View } from "react-native";
import ExampleComponent from "features/components/demo/example";
import { hello } from "common/src";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
    <Text>Hello, world! {hello}</Text>
     <ExampleComponent /> 
    </View>
  );
}
