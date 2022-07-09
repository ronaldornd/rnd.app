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
                <Text style={styles.text}>HTML5</Text>
                <Bar progress={0.75} width={responsiveWidth(93)} color={dark.colors.primary} />
                <View style={styles.level}><Text style={styles.levelText}>Básico      </Text><Text style={styles.levelText}>Intermediário</Text><Text style={styles.levelText}>Avançado</Text></View>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>CSS</Text>
                <Bar progress={0.75} width={responsiveWidth(93)} color={dark.colors.primary} />
                <View style={styles.level}><Text style={styles.levelText}>Básico      </Text><Text style={styles.levelText}>Intermediário</Text><Text style={styles.levelText}>Avançado</Text></View>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>JavaScript</Text>
                <Bar progress={0.6} width={responsiveWidth(93)} color={dark.colors.primary} />
                <View style={styles.level}><Text style={styles.levelText}>Básico      </Text><Text style={styles.levelText}>Intermediário</Text><Text style={styles.levelText}>Avançado</Text></View>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>TypeScript</Text>
                <Bar progress={0.45} width={responsiveWidth(93)} color={dark.colors.primary} />
                <View style={styles.level}><Text style={styles.levelText}>Básico      </Text><Text style={styles.levelText}>Intermediário</Text><Text style={styles.levelText}>Avançado</Text></View>
            </View>
            <View style={styles.info}>
                <Text style={styles.text}>HTML5</Text>
                <Bar progress={0.75} width={responsiveWidth(93)} color={dark.colors.primary} />
            </View>
        </View>
    );
}