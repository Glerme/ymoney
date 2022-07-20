import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from 'Screens/Home';
import {Salary} from 'Screens/Salary';

const Tab = createBottomTabNavigator();

export const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Salary" component={Salary} />
    </Tab.Navigator>
  );
};
