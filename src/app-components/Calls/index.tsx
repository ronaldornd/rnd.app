import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, ScrollView } from 'react-native';
import { Envelope, IdentificationCard, Password, Phone } from 'phosphor-react-native';

import { styles } from './styles';
import { dark } from '../../theme';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


export function Calls() {
    const [isLogged, setIsLogged] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [password, setPassword] = useState('');
    const [pass, setPass] = useState('');
    const [border, setBorder] = useState('white');
    function checkPassword() {
        if (pass == password) {
            setBorder('green')
        } else {
            setBorder('red')
        }
    }
    return (
        <View style={styles.page}>
            {isSignUp ?
                <>
                    <View style={styles.container}>
                        <Text style={styles.header}>Cadastrar</Text>
                        <View style={styles.input}><IdentificationCard size={32} style={styles.icon} color={dark.colors.text_secondary} /><TextInput style={styles.inputArea} placeholder='Nome' placeholderTextColor={dark.colors.text_secondary} /></View>
                        <View style={styles.input}><Envelope size={32} style={styles.icon} color={dark.colors.text_secondary} /><TextInput style={styles.inputArea} placeholder='Email' placeholderTextColor={dark.colors.text_secondary} keyboardType={'email-address'} /></View>
                        <View style={styles.input}><Phone size={32} style={styles.icon} color={dark.colors.text_secondary} /><TextInput style={styles.inputArea} placeholder='Telefone' placeholderTextColor={dark.colors.text_secondary} keyboardType={'number-pad'} /></View>
                        <View style={{
                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: responsiveHeight(5),
                            width: responsiveWidth(85),
                            backgroundColor: dark.colors.surface_secondary,
                            borderWidth: 2,
                            borderColor: border,
                            margin: 5,
                        }} ><Password size={32} style={styles.icon} color={dark.colors.text_secondary} /><TextInput style={styles.inputArea} placeholder='Senha' placeholderTextColor={dark.colors.text_secondary} secureTextEntry keyboardType={'numeric'} onChangeText={setPass} onTextInput={checkPassword} /></View>
                        <View style={{
                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: responsiveHeight(5),
                            width: responsiveWidth(85),
                            backgroundColor: dark.colors.surface_secondary,
                            borderWidth: 2,
                            borderColor: border,
                            margin: 5,
                        }} ><Password size={32} style={styles.icon} color={dark.colors.text_secondary} /><TextInput style={styles.inputArea} placeholder='Confirme sua senha' placeholderTextColor={dark.colors.text_secondary} secureTextEntry keyboardType={'numeric'} onChangeText={setPassword} onTextInput={checkPassword} /></View>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.btn} onPress={() => (setIsSignUp(false))}><Text style={styles.btnText}>Voltar</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.btnGreen} onPress={() => (setIsSignUp(false))}><Text style={styles.btnText}>Cadastrar</Text></TouchableOpacity>
                        </View>

                    </View>
                </> :
                <>{
                    isLogged ?
                        <View style={styles.container}>
                            <Text style={styles.header}>Serviços soliciados</Text>
                            <ScrollView style={styles.services} fadingEdgeLength={100} >
                                <View style={styles.serviceInfo}>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Tipo:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Aparelho:</Text><Text></Text>
                                        <Text style={styles.info}>Marca:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Descrição:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Data:</Text><Text></Text>
                                        <Text style={styles.info}>Status:</Text><Text></Text>
                                    </View>
                                </View>
                                <View style={styles.serviceInfo}>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Tipo:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Aparelho:</Text><Text></Text>
                                        <Text style={styles.info}>Marca:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Descrição:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Data:</Text><Text></Text>
                                        <Text style={styles.info}>Status:</Text><Text></Text>
                                    </View>
                                </View>
                                <View style={styles.serviceInfo}>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Tipo:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Aparelho:</Text><Text></Text>
                                        <Text style={styles.info}>Marca:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Descrição:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Data:</Text><Text></Text>
                                        <Text style={styles.info}>Status:</Text><Text></Text>
                                    </View>
                                </View>
                                <View style={styles.serviceInfo}>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Tipo:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Aparelho:</Text><Text></Text>
                                        <Text style={styles.info}>Marca:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Descrição:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Data:</Text><Text></Text>
                                        <Text style={styles.info}>Status:</Text><Text></Text>
                                    </View>
                                </View>
                                <View style={styles.serviceInfo}>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Tipo:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Aparelho:</Text><Text></Text>
                                        <Text style={styles.info}>Marca:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Descrição:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Data:</Text><Text></Text>
                                        <Text style={styles.info}>Status:</Text><Text></Text>
                                    </View>
                                </View>
                                <View style={styles.serviceInfo}>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Tipo:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Aparelho:</Text><Text></Text>
                                        <Text style={styles.info}>Marca:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Descrição:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Data:</Text><Text></Text>
                                        <Text style={styles.info}>Status:</Text><Text></Text>
                                    </View>
                                </View>
                                <View style={styles.serviceInfo}>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Tipo:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Aparelho:</Text><Text></Text>
                                        <Text style={styles.info}>Marca:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Descrição:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Data:</Text><Text></Text>
                                        <Text style={styles.info}>Status:</Text><Text></Text>
                                    </View>
                                </View>
                                <View style={styles.serviceInfo}>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Tipo:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Aparelho:</Text><Text></Text>
                                        <Text style={styles.info}>Marca:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Descrição:</Text><Text></Text>
                                    </View>
                                    <View style={styles.line}>
                                        <Text style={styles.info}>Data:</Text><Text></Text>
                                        <Text style={styles.info}>Status:</Text><Text></Text>
                                    </View>
                                </View>
                            </ScrollView>
                            <TouchableOpacity style={styles.btnGreen}><Text style={styles.btnText}>Solicitar</Text></TouchableOpacity>
                        </View> :
                        <View style={styles.container}>
                            <Text style={styles.header}>Login</Text>
                            <View style={styles.input}><Envelope size={32} style={styles.icon} color={dark.colors.text_secondary} /><TextInput style={styles.inputArea} placeholder='Email' placeholderTextColor={dark.colors.text_secondary} keyboardType={'email-address'} /></View>
                            <View style={styles.input}><Password size={32} style={styles.icon} color={dark.colors.text_secondary} /><TextInput style={styles.inputArea} placeholder='Senha' placeholderTextColor={dark.colors.text_secondary} secureTextEntry keyboardType={'numeric'} /></View>
                            <View style={styles.buttons}>
                                <TouchableOpacity style={styles.btn} onPress={() => (setIsSignUp(true))}><Text style={styles.btnText}>Cadastrar</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.btnGreen} onPress={() => (setIsLogged(true))}><Text style={styles.btnText}>Entrar</Text></TouchableOpacity>
                            </View>
                        </View>
                }</>
            }
        </View >
    );
}