import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home';
import CidadeShow from '../screens/Cidade';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Homes" component={HomeScreen} />
      <Drawer.Screen name="Destinos" component={CidadeShow} />
    </Drawer.Navigator>
  );
}