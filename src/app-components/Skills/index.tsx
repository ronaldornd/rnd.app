import React from 'react';
import { Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';
import { styles } from './styles';

export function Skills() {
    return (
        <View style={styles.page}>
            <View style={styles.info}>
                <Text style={styles.text}>Office</Text>
                <Bar animated animationConfig={{ duration: 0.1 }} animationType='spring' progress={0.8} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={2.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>HTML5</Text>
                <Bar animated animationConfig={{ duration: 0.1 }} animationType='spring' progress={0.7} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={2.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>CSS</Text>
                <Bar animated animationConfig={{ duration: 1000 }} animationType='spring' progress={0.7} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={2.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>JavaScript</Text>
                <Bar animated animationConfig={{ duration: 0.1 }} animationType='spring' progress={0.6} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={2.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>TypeScript</Text>
                <Bar animated animationConfig={{ duration: 0.1 }} animationType='spring' progress={0.45} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={2.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>HTML5</Text>
                <Bar animated animationConfig={{ duration: 0.1 }} animationType='spring' progress={0.75} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={2.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>HTML5</Text>
                <Bar animated animationConfig={{ duration: 0.1 }} animationType='spring' progress={0.75} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={2.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>HTML5</Text>
                <Bar animated animationConfig={{ duration: 0.1 }} animationType='spring' progress={0.75} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={2.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>HTML5</Text>
                <Bar animated animationConfig={{ duration: 0.1 }} animationType='spring' progress={0.75} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={2.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>HTML5</Text>
                <Bar animated animationConfig={{ duration: 0.1 }} animationType='spring' progress={0.75} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={2.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>HTML5</Text>
                <Bar animated animationConfig={{ duration: 0.1 }} animationType='spring' progress={0.75} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={2.5} />
            </View>


        </View>
    );
}