import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import map from '../../../assets/map.png'
import { styles } from './styles';

export function Fisrt() {
    return (
        <View style={styles.container}>
            <View style={styles.local}>
                <View>
                    <Text style={styles.name}>E.E Cel. Benedito Ramos Arantes</Text>
                    <Text style={styles.type}>Tipo: Ensino Médio</Text>
                </View>
                <TouchableOpacity>
                    <Image source={map} style={styles.map} />
                </TouchableOpacity>
            </View>
        </View>
    );
}