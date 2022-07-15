import React from 'react';
import { View } from 'react-native';
import Widget from '../../widget-components/Widget';
import { BasicInfo } from './BasicInfo';
import { Habilities } from './Habilities';
import { Social } from './Social';
import { styles } from './styles';

export function Basic() {
    return (
        <><View style={styles.page}>
            <View style={styles.info}>
                <BasicInfo />
            </View>
            <View style={styles.info}>
                <Habilities />
            </View>
            <View style={styles.icons}>
                <Social />
            </View>
            <Widget />

        </View>
        </>
    );
}