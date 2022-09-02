import React from 'react';
import { Text, View } from 'react-native';
import { Barricade } from 'phosphor-react-native';

import { styles } from './styles';
import { dark } from '../../theme';

export function Calls() {
    return (
        <View style={styles.container}>
            <Barricade size={140} color={dark.colors.primary} />
            <Text style={styles.txt} >Em Desenvolvimento!!</Text>

        </View>
    );
}