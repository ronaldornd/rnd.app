import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Image,
    ImageProps,
    Text,
} from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    image: ImageProps;
}

export const Option = ({ title, image, ...props }: Props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            {...props}
        >
            <Image
                source={image}
                style={styles.image}
            />
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}