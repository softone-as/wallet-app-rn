import { FunctionComponent } from 'react';
import {
    GestureResponderEvent,
    ImageSourcePropType,
    ImageStyle,
    StyleProp,
} from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.TouchableOpacity`
    flex-direction: column;
    height: 45px;
    width: 45px;
    border-radius: 15px;
`;

const StyledImage = styled.Image`
    resize-mode: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;

interface ProfileProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ImageStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
            <StyledImage source={props.img} style={props.imgStyle} />
        </StyledView>
    );
};

export default Profile;
