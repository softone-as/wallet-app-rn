import { FunctionComponent, useState } from 'react';
import { TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { colors } from '../components/colors';

// Custom component
import { Container } from '../components/shared';

const LoginContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const BottomSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`;

const BottomImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
    transform: rotate(180deg);
`;

const TopSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 2;
    justify-content: flex-end;
`;

// Image
import background from '../assets/bgs/background_v1.png';
import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import RegularButton from '../components/Buttons/RegularButton';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigators/RootStack';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const Login: FunctionComponent<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <StatusBar style='light' />
            <LoginContainer>
                <TopSection>
                    <BigText textStyles={{ width: '70%', marginBottom: 25 }}>
                        Hello, moneyzation!
                    </BigText>
                    <SmallText textStyles={{ width: '70%', marginBottom: 25 }}>
                        Input your email and password to continue!
                    </SmallText>
                    <TextInput
                        placeholder='Email'
                        style={{
                            marginBottom: 25,
                            padding: 12,
                            borderColor: '#FFF !important',
                            borderRadius: 20,
                            borderWidth: 1,
                        }}
                        onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Password'
                        style={{
                            marginBottom: 25,
                            padding: 12,
                            borderColor: '#FFF !important',
                            borderRadius: 20,
                            borderWidth: 1,
                        }}
                        onChangeText={(password) => setPassword(password)}
                    />
                    <RegularButton
                        onPress={() => {
                            if (email === 'email' && password == 'password') {
                                alert('Login Success!');
                                navigation.navigate('Home');
                            } else {
                                alert('Email or password is wrong!');
                            }
                        }}
                    >
                        Login
                    </RegularButton>
                </TopSection>
                <BottomSection>
                    <BottomImage source={background} />
                </BottomSection>
            </LoginContainer>
        </>
    );
};

export default Login;
