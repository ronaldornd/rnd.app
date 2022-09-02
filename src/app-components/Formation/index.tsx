import React from 'react';
import { ScrollView, View } from 'react-native';
import { Fisrt } from './First';
import { Fourth } from './Fourth';
import { Second } from './Second';

import { styles } from './styles';
import { Third } from './Third';

export function Formation() {
    return (
        <ScrollView style={styles.page}>
            <View style={styles.info}>
                <Fisrt />

            </View>
            <View style={styles.info}>

                <Second />
            </View>
            <View style={styles.info}>

                <Third />
            </View>
            <View style={styles.rocketInfo} >

                <Fourth />
            </View>
        </ScrollView>
    );
}