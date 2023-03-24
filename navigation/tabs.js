import {CreateButtonTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import ChatScreen from '../screens/ChatScreen';
import PostScreen from '../screens/PostScreen';
import SettingsScreen from '../screens/SettingsScreen';


const Tab = CreateButtonTabNavigator();

const Tabs = () =>{
    <Tab.Navigation>
        <Tab.Screem name="Home" component={HomeScreen} />
        <Tab.Screem name="Find" component={FindScreen} />
        <Tab.Screem name="Post" component={PostScreen} />
        <Tab.Screem name="Settings" component={SettingsScreen} />
        <Tab.Screem name="Chat" component={ChatScreen} />
    </Tab.Navigation>
}

export default Tabs;