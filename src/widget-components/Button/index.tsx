import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { dark } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    isLoading: boolean;
}
export function Button({ isLoading, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            {
                isLoading
                    ? <ActivityIndicator color={dark.colors.text_onBrand} />
                    : <Text style={styles.title}>Enviar Feedback</Text>
            }
        </TouchableOpacity>
    );
}