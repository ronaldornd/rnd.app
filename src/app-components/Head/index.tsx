import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import shareImg from '../../assets/share.png'

import { styles } from './styles';

export function Head() {
    return (




        <View style={styles.container}>
            <Text style={styles.headerText}>
                RND

            </Text>
            <TouchableOpacity style={styles.touch}>
                <Image style={styles.share} source={shareImg} />
            </TouchableOpacity>
        </View>

    );
}