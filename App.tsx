import { SafeAreaView, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Navigation from './src/navigation/Navigation';
import ViewMenu from './src/components/ViewMenu';
import MenuItems from './src/components/MenuItems';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation></Navigation>
      {/* <ViewMenu></ViewMenu> */}
      {/* <MenuItems></MenuItems> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
