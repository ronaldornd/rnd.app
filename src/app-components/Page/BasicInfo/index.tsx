import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import photo from '../../../assets/photo.jpg';
import call from '../../../assets/call.png';
import mail from '../../../assets/mail.png';

import { styles } from './styles';

export function BasicInfo() {
    return (
        <View style={styles.info}>
            <View style={styles.icons}>
                <TouchableOpacity>
                    <Image style={styles.ico} source={mail} />
                </TouchableOpacity>
                <Image style={styles.img} source={photo} />
                <TouchableOpacity>
                    <Image style={styles.ico} source={call} />
                </TouchableOpacity>
            </View>
            <View style={styles.textInfo}>
                <Text style={styles.text}>Ronaldo da Silva Barbosa</Text>
                <Text style={styles.text}>24 anos               <Text style={styles.text}>Solteiro</Text></Text>
                <Text style={styles.local}>Jundiapeba, Mogi das Cruzes - SP</Text>
            </View>
        </View>
    );
}