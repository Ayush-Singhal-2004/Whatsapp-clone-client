import { Tabs } from 'expo-router';
import { 
    MaterialIcons, 
    MaterialCommunityIcons, 
    Ionicons  
} from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs 
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: "#bfbfbf",
                tabBarStyle: {
                    backgroundColor: "#0B141B",
                    height: 64,
                    paddingBottom: 10,
                    borderTopColor: "#0B141B"
                }
            }}
        >
            <Tabs.Screen
                name="Chats"
                options={{
                    title: 'Chats',
                    tabBarIcon: () => <MaterialIcons name="chat" size={24} color="white" />
                }}
            />
            <Tabs.Screen
                name="Updates"
                options={{
                    title: 'Updates',
                    tabBarIcon: () => <MaterialCommunityIcons name="chat-plus-outline" size={24} color="white" />
                }}
            />
            <Tabs.Screen
                name="Communities"
                options={{
                    title: 'Communities',
                    tabBarIcon: () => <MaterialCommunityIcons name="account-group-outline" size={24} color="white" />
                }}
            />
            <Tabs.Screen
                name="Calls"
                options={{
                    title: 'Calls',
                    tabBarIcon: () => <Ionicons name="call-outline" size={24} color="white" />
                }}
            />
        </Tabs>
    )
}


