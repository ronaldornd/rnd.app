import React from 'react';
import { View } from 'react-native';
import { BasicInfo } from './BasicInfo';
import { Habilities } from './Habilities';
import { Social } from './Social';
import { styles } from './styles';

export function Page() {
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
        </View>
        </>
    );
}