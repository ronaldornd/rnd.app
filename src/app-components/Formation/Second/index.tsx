import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import map from '../../../assets/map.png'

import { styles } from './styles';

export function Second() {
    return (
        <View style={styles.container}>
            <View style={styles.local}>
                <View>
                    <Text style={styles.name}>ETE Miguel Batista</Text>
                    <Text style={styles.type}>Tipo: Técnico</Text>
                </View>
                <TouchableOpacity>
                    <Image source={map} style={styles.map} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.actHeader}>Principais atividades:</Text>
                <Text style={styles.activities}>•	Criação de programas em Java</Text>
                <Text style={styles.activities}>•	Gerenciamento de banco de dados</Text>
                <Text style={styles.activities}>•	Fundamentos de hardware</Text>
            </View>
        </View>
    );
}