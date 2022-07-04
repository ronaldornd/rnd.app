import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    isLoading: boolean;
}
export function Button({ isLoading, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            {
                isLoading
                    ? <ActivityIndicator color={theme.colors.text_onBrand} />
                    : <Text style={styles.title}>Enviar Feedback</Text>
            }
        </TouchableOpacity>
    );
}