import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { BasicInfo } from './BasicInfo';
import { Habilities } from './Habilities';
import { Head } from './Head';
import { styles } from './styles';
import insta from '../../assets/insta.png';
import linked from '../../assets/linked.png';
import github from '../../assets/git.png';
import { GithubLogo } from 'phosphor-react-native';

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
                <TouchableOpacity>
                    <Image style={styles.ico} source={insta} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.ico} source={linked} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.ico} source={github} />
                </TouchableOpacity>
            </View>
        </View>
    );
}