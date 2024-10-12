import { StyleSheet, Text, View } from 'react-native';
import type { HelloWorldProps } from './type';

export default function HelloWorld(props: HelloWorldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});
