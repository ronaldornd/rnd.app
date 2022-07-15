import React from 'react';
import { Text, View, TouchableOpacity, Image, Platform, Linking } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Link from '../../../assets/link.svg'
import { dark } from '../../../theme';

import { styles } from './styles';

export function Fourth() {
    return (
        <View style={styles.container}>
            <View style={styles.local}>
                <View>
                    <Text style={styles.name}>Rocketseat</Text>
                    <Text style={styles.type}>Tipo: Auto Aplicado</Text>
                </View>
                <TouchableOpacity
                    onPress={
                        () => {
                            Linking.openURL('https://www.rocketseat.com.br/');
                        }}
                >
                    <Link width={responsiveHeight(4)} height={responsiveHeight(4)} />
                </TouchableOpacity>

            </View>
            <Text style={styles.actHeader}>Atividades desenvolvidas:</Text>
            <Text style={styles.activities}>•	Desenvolvimento de páginas web</Text>
            <Text style={styles.activities}>•	Implementação de JavaScript</Text>
            <Text style={styles.activities}>•	Gerenciamento de redes</Text>
            <Text style={styles.activities}>•	Engenharia de Software</Text>
        </View>
    );
}