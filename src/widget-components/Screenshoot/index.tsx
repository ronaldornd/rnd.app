import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
    screenshoot: string | null,
    onTakeShot: () => void,
    onRemove: () => void
}
export function Screenshoot({ screenshoot, onTakeShot, onRemove }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={screenshoot ? onTakeShot : onRemove}
        >
            {
                screenshoot ?
                    <View>
                        <Image
                            style={styles.image}
                            source={{ uri: screenshoot }}>
                        </Image>
                        <Trash
                            size={22}
                            color={theme.colors.text_primary}
                            weight='fill'
                            style={styles.removeIcon}
                        />
                    </View>
                    :
                    <Camera
                        size={24}
                        color={theme.colors.text_primary}
                        weight='bold'
                    />
            }
        </TouchableOpacity>
    );
}