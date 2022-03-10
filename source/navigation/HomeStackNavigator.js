import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PermissionsScreen from '../screens/PermissionsScreen';
import PreviewImageScreen from '../screens/PreviewImageScreen';
import CameraScreen from '../screens/CameraScreen';
import CallScreen from '../screens/CallScreen';
import ContactScreen from '../screens/ContactScreen';
import AudioRecoderScreen from '../screens/AudioRecoderScreen';
import MessageScreen from '../screens/MessageScreen';
import GeolocationScreen from '../screens/GeolocationScreen';
import MapScreen from '../screens/MapScreen';
import {
  HOME,
  PERMISSIONS,
  CAMERA,
  PREVIEW_IMAGE,
  CALL,
  CONTACT,
  AUDIO,
  MESSAGE,
  GEOLOCATION,
  RENDERMAP,
} from '../utilities/routeNames';
import Header from '../components/header';
import COLORS from '../utilities/colors';

const HomeStack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'rgba(0,0,0, 0.8)',
        },
        headerTintColor: COLORS.white,
      }}>
      <HomeStack.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          headerTitle: () => <Header title="Chattingaza" />,
        }}
      />
      <HomeStack.Screen
        name={PERMISSIONS}
        component={PermissionsScreen}
        options={{
          headerTitle: () => <Header title="Permissions Demo" />,
        }}
      />
      <HomeStack.Screen
        name={CAMERA}
        component={CameraScreen}
        options={{
          headerTitle: () => <Header title="Camera" />,
        }}
      />
      <HomeStack.Screen
        name={PREVIEW_IMAGE}
        component={PreviewImageScreen}
        options={{
          headerTitle: () => <Header title="Preview Image" />,
        }}
      />
      <HomeStack.Screen
        name={CALL}
        component={CallScreen}
        options={{
          headerTitle: () => <Header title="Call" />,
        }}
      />
      <HomeStack.Screen
        name={CONTACT}
        component={ContactScreen}
        options={{
          headerTitle: () => <Header title="Contacts" />,
        }}
      />
      <HomeStack.Screen
        name={AUDIO}
        component={AudioRecoderScreen}
        options={{
          headerTitle: () => <Header title="Audio Recoder" />,
        }}
      />
      <HomeStack.Screen
        name={MESSAGE}
        component={MessageScreen}
        options={{
          headerTitle: () => <Header title="Message" />,
        }}
      />
      <HomeStack.Screen
        name={GEOLOCATION}
        component={GeolocationScreen}
        options={{
          headerTitle: () => <Header title="Geolocation" />,
        }}
      />
      <HomeStack.Screen
        name={RENDERMAP}
        component={MapScreen}
        options={{
          headerTitle: () => <Header title="Map" />,
        }}
      />
    </HomeStack.Navigator>
  );
}
