import React from 'react';

import { View, Image, TouchableOpacity, Linking, ToastAndroid } from 'react-native';
import { styles } from './styles';
import insta from '../../../assets/insta.png';
import linked from '../../../assets/linked.png';
import github from '../../../assets/git.png';

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
                <Image style={styles.ico} source={insta} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    openUrl(linkedinURL)
                }}
            >
                <Image style={styles.ico} source={linked} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    openUrl(gitURL)
                }}
            >
                <Image style={styles.ico} source={github} />
            </TouchableOpacity>
        </View>
    );
}