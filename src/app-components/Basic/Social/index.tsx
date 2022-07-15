import React from 'react';

import { View, TouchableOpacity, Linking, ToastAndroid } from 'react-native';
import { styles } from './styles';
import Insta from '../../../assets/instagram.svg';
import Linked from '../../../assets/linkedin.svg';
import Github from '../../../assets/github.svg';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { dark } from '../../../theme';

const instaURL = "https://www.instagram.com/ronaldornd/";
const gitURL = "https://github.com/ronaldornd";
const linkedinURL = "https://www.linkedin.com/in/ronaldosbarbosaa/";

const openUrl = async (url: string) => {
    if (await Linking.canOpenURL(url)) {
        await Linking.openURL(url)
    }
    else {
        ToastAndroid.show('Can\'t open this URL', ToastAndroid.SHORT)
    }
}
export function Social() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    openUrl(instaURL)
                }}
            >
                <Insta fill={dark.colors.primary} width={responsiveHeight(7)} height={responsiveHeight(7)} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    openUrl(linkedinURL)
                }}
            >
                <Linked fill={dark.colors.primary} width={responsiveHeight(7)} height={responsiveHeight(7)} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    openUrl(gitURL)
                }}
            >
                <Github fill={dark.colors.primary} width={responsiveHeight(7)} height={responsiveHeight(7)} />
            </TouchableOpacity>
        </View>
    );
}