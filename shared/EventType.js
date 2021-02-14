import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const iconType = {
    icons: {
        'beer': <Ionicons name="beer" size={30} color="white" />,
        'birthday': <FontAwesome name="birthday-cake" size={30} color="white" />,
        'dinner': <Ionicons name="fast-food-outline" size={30} color="white" />,
        'park': <FontAwesome name="tree" size={24} color="white" />,
        'party': <MaterialCommunityIcons name="party-popper" size={30} color="white" />,
        'crazy': <MaterialIcons name="emoji-events" size={30} color="white" />,
        'other': <MaterialIcons name="event" size={30} color="white" />
    }
}