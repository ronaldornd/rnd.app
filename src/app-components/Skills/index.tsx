import React from 'react';
import { Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { dark } from '../../theme';
import { styles } from './styles';

export function Skills() {
    return (
        <View style={styles.page}>
            <View style={styles.info}>
                <Text style={styles.text}>Office</Text>
                <Bar progress={0.8} height={responsiveHeight(1.35)} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={1.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>HTML5</Text>
                <Bar progress={0.7} height={responsiveHeight(1.35)} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={1.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>CSS</Text>
                <Bar progress={0.7} height={responsiveHeight(1.35)} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={1.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>JavaScript</Text>
                <Bar progress={0.6} height={responsiveHeight(1.35)} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={1.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>TypeScript</Text>
                <Bar progress={0.45} height={responsiveHeight(1.35)} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={1.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>React.JS</Text>
                <Bar progress={0.45} height={responsiveHeight(1.35)} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={1.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>React Native</Text>
                <Bar progress={0.45} height={responsiveHeight(1.35)} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={1.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>Redux</Text>
                <Bar progress={0.05} height={responsiveHeight(1.35)} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={1.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>Git</Text>
                <Bar progress={0.40} height={responsiveHeight(1.35)} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={1.5} />
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>Inglês</Text>
                <Bar progress={0.50} height={responsiveHeight(1.35)} width={responsiveWidth(93)} color={dark.colors.stroke} borderColor={dark.colors.primary} borderWidth={1.5} />
            </View>



        </View>
    );
}