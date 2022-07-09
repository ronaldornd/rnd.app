import React from 'react';
import { Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import { styles } from './styles';

export function Skills() {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.text}>HTML5</Text>
                <Bar progress={0.7} />
            </View>
        </View>
    );
}