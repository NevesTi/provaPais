
import { StyleSheet } from 'react-native';
import HomePage from './src/pages/homePage';

export default function App() {
  return (
    <HomePage/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
