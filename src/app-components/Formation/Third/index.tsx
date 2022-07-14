import React from 'react';
import { Text, View, TouchableOpacity, Image, Platform, Linking } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Map from '../../../assets/map.svg'
import { dark } from '../../../theme';

import { styles } from './styles';

export function Third() {
    return (
        <View style={styles.container}>
            <View style={styles.local}>
                <View>
                    <Text style={styles.name}>IFPE Campus Jaboatão</Text>
                    <Text style={styles.type}>Tipo: Técnico</Text>
                </View>
                <TouchableOpacity
                    onPress={
                        Platform.select({
                            ios: () => {
                                Linking.openURL('https://www.google.com/maps/place/IFPE+Campus+Jaboat%C3%A3o+dos+Guararapes+-+Sede+Definitiva/@-8.1136832,-35.0329817,17z/data=!3m1!4b1!4m5!3m4!1s0x7ab1d160cd6d70f:0x21672ea8b8c977e8!8m2!3d-8.1136777!4d-35.0308202');
                            },
                            android: () => {
                                Linking.openURL('https://www.google.com/maps/place/IFPE+Campus+Jaboat%C3%A3o+dos+Guararapes+-+Sede+Definitiva/@-8.1136832,-35.0329817,17z/data=!3m1!4b1!4m5!3m4!1s0x7ab1d160cd6d70f:0x21672ea8b8c977e8!8m2!3d-8.1136777!4d-35.0308202');
                            }
                        })}
                >
                    <Map fill={dark.colors.primary} width={responsiveHeight(4)} height={responsiveHeight(4)} />
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