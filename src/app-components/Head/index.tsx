import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import shareImg from '../../assets/sharer.png'
import { styles } from './styles';
import Share from "../../assets/share";
import { dark } from '../../theme';
import { responsiveFontSize, responsiveWidth,responsiveHeight } from 'react-native-responsive-dimensions';

export function Head() {
    return (




        <View style={styles.container}>
            <Text style={styles.headerText}>
                RND

            </Text>
            <TouchableOpacity style={styles.touch}>
                <Share fill={dark.colors.primary} width={responsiveHeight(4)} height={responsiveHeight(4)} style={styles.share}/>
            </TouchableOpacity>
        </View>

    );
}