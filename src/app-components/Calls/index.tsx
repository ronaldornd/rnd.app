import React from 'react';
import { View } from 'react-native';
import { Barricade } from 'phosphor-react-native';

import { styles } from './styles';

export function Calls() {
    return (
        <View style={styles.container}>
            <Barricade size={72} />


        </View>
    );
}