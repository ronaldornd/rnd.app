import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../../theme';

import { styles } from './styles';

export function Habilities() {
    return (
        <View style={styles.info}>
            <Text style={styles.header}>
                Minhas Habilidades
            </Text>
            <View style={styles.div}>
                <View style={styles.habi}>
                    <Text style={styles.text}>
                        Logica bem trabalhada
                    </Text>
                    <Text style={styles.text}>
                        Foco interminavel
                    </Text>
                    <Text style={styles.text}>
                        Conclusivo
                    </Text>
                </View>

                <View style={styles.habi}>
                    <Text style={styles.text}>
                        Aprendizado Autodidata
                    </Text>
                    <Text style={styles.text}>
                        Bom senso de cooperação
                    </Text>
                    <Text style={styles.text}>
                        Ótima ética
                    </Text>
                </View>




            </View>

        </View>
    );
}