import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking, Platform } from 'react-native';
import photo from '../../../assets/profile.jpg';
import Call from '../../../assets/call2.svg';
import Mail from '../../../assets/mail2.svg';
import { dark } from '../../../theme';

import { styles } from './styles';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export function BasicInfo() {
    const dialCall = () => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${+5511956903190}';
        }
        else {
            phoneNumber = 'telprompt:${+5511956903190}';
        }

        Linking.openURL(phoneNumber);
    };


    return (
        <View style={styles.info}>
            <View style={styles.icons}>
                <TouchableOpacity
                    onPress={() => Linking.openURL('mailto:ronaldo.s.barbosa@outlook.com')}
                >
                    <Mail fill={dark.colors.primary} width={responsiveHeight(5)} height={responsiveHeight(5)} />
                </TouchableOpacity>
                <Image style={styles.img} source={photo} />
                <TouchableOpacity
                    onPress={dialCall}
                >
                    <Call fill={dark.colors.primary} width={responsiveHeight(5)} height={responsiveHeight(5)} />
                </TouchableOpacity>
            </View>
            <View style={styles.textInfo}>
                <Text style={styles.text}>Ronaldo da Silva Barbosa</Text>
                <Text style={styles.text}>24 anos               <Text style={styles.text}>Solteiro</Text></Text>
                <Text style={styles.local}>Jundiapeba, Mogi das Cruzes - SP</Text>
            </View>
        </View>
    );
}