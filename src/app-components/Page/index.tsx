import React from 'react';
import { View, Image, TouchableOpacity, Linking, ToastAndroid } from 'react-native';
import { BasicInfo } from './BasicInfo';
import { Habilities } from './Habilities';
import { Head } from './Head';
import { styles } from './styles';
import insta from '../../assets/insta.png';
import linked from '../../assets/linked.png';
import github from '../../assets/git.png';
import Widget from '../../widget-components/Widget';

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
export function Page() {
    return (
        <View style={styles.page}>
            <Head />
            <View style={styles.info}>
                <BasicInfo />
            </View>
            <View style={styles.info}>
                <Habilities />
            </View>
            <View style={styles.icons}>
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
        </View>
    );
}