import React from 'react';
import { Text, View, TouchableOpacity, Image, Linking, Platform } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Map from '../../../assets/map.svg'
import { dark } from '../../../theme';

import { styles } from './styles';

export function Second() {
    return (
        <View style={styles.container}>
            <View style={styles.local}>
                <View>
                    <Text style={styles.name}>ETE Miguel Batista</Text>
                    <Text style={styles.type}>Tipo: Técnico</Text>
                </View>
                <TouchableOpacity
                    onPress={
                        Platform.select({
                            ios: () => {
                                Linking.openURL('https://www.google.com/maps/place/Escola+T%C3%A9cnica+Estadual+Miguel+Batista/@-8.014044,-34.9340875,17z/data=!3m1!4b1!4m5!3m4!1s0x7ab199528f74679:0x81344c72f93ccc25!8m2!3d-8.0140493!4d-34.9318988');
                            },
                            android: () => {
                                Linking.openURL('https://www.google.com/maps/place/Escola+T%C3%A9cnica+Estadual+Miguel+Batista/@-8.014044,-34.9340875,17z/data=!3m1!4b1!4m5!3m4!1s0x7ab199528f74679:0x81344c72f93ccc25!8m2!3d-8.0140493!4d-34.9318988');
                            }
                        })}
                >
                    <Map fill={dark.colors.primary} width={responsiveHeight(4)} height={responsiveHeight(4)} />
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