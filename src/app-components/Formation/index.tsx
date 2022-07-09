import React from 'react';
import { View } from 'react-native';
import { Fisrt } from './First';
import { Second } from './Second';

import { styles } from './styles';
import { Third } from './Third';

export function Formation() {
    return (
        <View style={styles.page}>
            <View style={styles.info}>
                <Fisrt />

            </View>
            <View style={styles.info}>

                <Second />
            </View>
            <View style={styles.info}>

                <Third />
            </View>
        </View>
    );
}