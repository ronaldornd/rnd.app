import React from 'react';
import { Text, View, TouchableOpacity, Image, Platform, Linking } from 'react-native';
import { Bar } from 'react-native-progress';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
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
            <Text style={styles.actHeader}>Projetos:</Text>
            <Text style={styles.activities}>•	Particiação em NLW's </Text>
            <Text style={styles.actHeader}>Missões: </Text>

            <View style={styles.info}>
                <Text style={styles.text}>Conectar (Revisando)</Text>
                <Bar progress={0.1} height={responsiveHeight(1)} width={responsiveWidth(90)} color="#bf5afa" borderColor="#9f02fa" borderWidth={1.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>Fundamentar</Text>
                <Bar progress={0.4} height={responsiveHeight(1)} width={responsiveWidth(90)} color="#bf5afa" borderColor="#9f02fa" borderWidth={1.5} />
            </View>
        </View>
    );
}