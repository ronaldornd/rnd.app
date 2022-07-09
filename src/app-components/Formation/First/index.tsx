import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import map from '../../../assets/map.png'
import { styles } from './styles';

export function Fisrt() {
    return (
        <View style={styles.container}>
            <View style={styles.local}>
                <Text style={styles.name}>E.E Cel. Benedito Ramos Arantes</Text>
                <TouchableOpacity>
                    <Image source={map} style={styles.map} />
                </TouchableOpacity>
            </View>
            <View>
                <Text>Tipo: Ensino Médio</Text>
            </View>
        </View>
    );
}