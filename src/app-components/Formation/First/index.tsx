import React from 'react';
import { Linking, Platform, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Map from '../../../assets/map.svg'
import { dark } from '../../../theme';
import { styles } from './styles';

export function Fisrt() {
    return (
        <View style={styles.container}>
            <View style={styles.local}>
                <View>
                    <Text style={styles.name}>E.E Cel. Benedito Ramos Arantes</Text>
                    <Text style={styles.type}>Tipo: Ensino Médio</Text>
                </View>
                <TouchableOpacity
                    onPress={
                        Platform.select({
                            ios: () => {
                                Linking.openURL('https://www.google.com/maps/place/E.E+Cel.+Benedito+Ramos+Arantes/@-23.2071023,-46.1535,15z/data=!4m5!3m4!1s0x0:0xbc00a86fc58a9aef!8m2!3d-23.2071582!4d-46.1534923');
                            },
                            android: () => {
                                Linking.openURL('https://www.google.com/maps/place/E.E+Cel.+Benedito+Ramos+Arantes/@-23.2071023,-46.1535,15z/data=!4m5!3m4!1s0x0:0xbc00a86fc58a9aef!8m2!3d-23.2071582!4d-46.1534923');
                            }
                        })
                    }>
                    <Map fill={dark.colors.primary} width={responsiveHeight(4)} height={responsiveHeight(4)} />
                </TouchableOpacity>
            </View>
        </View >
    );
}