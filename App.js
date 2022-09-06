import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Square from './component/page/square';
import './css/style.css';
export default function App() {
  return (
    <View style={styles.container}>
      <div className='style_quare'>
        <Square color='#333' />
        <Square color='#ddd' />
        <Square color='#CCC' />
      </div>
    </View>

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
