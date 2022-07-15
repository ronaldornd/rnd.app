import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ToastAndroid } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import shareImg from '../../assets/sharer.png'
import { styles } from './styles';
import Share from "../../assets/share.svg";
import { dark } from '../../theme';
import { responsiveHeight } from 'react-native-responsive-dimensions';
const shareURL = "https://feedget-five-hazel.vercel.app/";
const openUrl = async (url: string) => {
    if (await Linking.canOpenURL(url)) {
        await Linking.openURL(url)
    }
    else {
        ToastAndroid.show('Can\'t open this URL', ToastAndroid.SHORT)
    }
}
export function Head() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                RND

            </Text>
            <TouchableOpacity style={styles.touch}
                onPress={() => {
                    openUrl(shareURL)
                }}
            >
                <Share fill={dark.colors.primary} width={responsiveHeight(4)} height={responsiveHeight(4)} style={styles.share} />
            </TouchableOpacity>
        </View>

    );
}