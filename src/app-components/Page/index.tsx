import React from 'react';
import { View } from 'react-native';
import Widget from '../../widget-components/Widget';
import { BasicInfo } from './BasicInfo';
import { Habilities } from './Habilities';
import { Head } from './Head';
import { Social } from './Social';
import { styles } from './styles';

export function Page() {
    return (
        <><View style={styles.page}>
            <Head />
            <View style={styles.info}>
                <BasicInfo />
            </View>
            <View style={styles.info}>
                <Habilities />
            </View>
            <View style={styles.icons}>
                <Social />
            </View>
        </View>
        </>
    );
}