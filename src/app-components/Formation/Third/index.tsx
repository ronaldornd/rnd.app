import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import map from '../../../assets/map.png'

import { styles } from './styles';

export function Third() {
    return (
        <View style={styles.container}>
            <View style={styles.local}>
                <View>
                    <Text style={styles.name}>IFPE Campus Jaboatão</Text>
                    <Text style={styles.type}>Tipo: Técnico</Text>
                </View>
                <TouchableOpacity>
                    <Image source={map} style={styles.map} />
                </TouchableOpacity>
            </View>
        </View>
    );
}