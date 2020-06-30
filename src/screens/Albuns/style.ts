import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modal } from 'react-native';

interface ICorLista {
   lido: boolean;
}

export const ViewLoading = styled.View`
   flex: 1;
   background: #fff;
   justify-content: center;
   align-items: center;
`;

export const MarkAllRead = styled.Text`
   font-family: 'Roboto-Bold';
   font-size: 14px;
   color: #43a047;
   margin-left: 5px;
`;

export const MarkAllReadWrapper = styled.TouchableOpacity`
   align-items: flex-end;
`;

export const Container = styled.View`
   flex: 1;
   background: #fff;
`;

export const VDivisor = styled.View`
   border-bottom-width: 1px;
   border-bottom-color: #d9d9d9;
   width: 200%;
   margin-left: -20px;
`;

/** HEADER */
export const VHeader = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-right: 22px;
   margin-left: 22px;
   margin-top: 10px;
   background: #fff;
`;

export const THeader = styled.Text`
   font-family: 'Roboto-Regular';
   font-size: 18px;
   color: #3c3c3c;
`;

export const TNaoLidas = styled.Text`
   font-family: 'Roboto-Regular';
   font-size: 14px;
   color: #707070;
   margin-left: 5px;
`;
/** FIM HEADER */

/** CARD MENSAGEM */
export const VSuper = styled.View<ICorLista>`
   flex: 1;
   background: ${(props): string => (props.lido ? '#EDEFF0' : '#fff')};
`;

export const VCard = styled.View`
   flex: 1;
   flex-direction: row;
   margin: 10px 0 10px 22px;
`;

export const VImagem = styled.View`
   justify-content: space-between;
   align-items: center;
`;

export const VBackgroundImage = styled.View<ICorLista>`
   height: 40px;
   width: 40px;
   border-radius: 20px;
   background: ${(props): string => (props.lido ? '#90A4AE' : '#43a047')};
   justify-content: center;
   align-items: center;
`;

export const IconCard = styled(Icon)``;

export const THora = styled.Text<ICorLista>`
   color: ${(props): string => (props.lido ? '#7A7A7A' : '#43a047')};
   font-size: 12px;
   font-family: 'Roboto-Regular';
   margin-top: 18px;
`;

export const VMensagem = styled.View`
   flex: 1;
   flex-direction: column;
   margin: 0 10px 0 10px;
`;

export const TTitulo = styled.Text`
   color: #7a7a7a;
   font-family: 'Roboto-Bold';
`;

export const TMensagem = styled.Text`
   color: #3c3c3c;
   font-family: 'Roboto-Regular';
`;

export const VMore = styled.View`
   justify-content: space-between;
   margin-right: 10px;
   align-items: center;
`;

export const MoreImagem = styled(Icon)``;

export const VMoreLido = styled.View<ICorLista>`
   height: 10px;
   width: 10px;
   border-radius: 5px;
   background: ${(props): string => (props.lido ? 'transparent' : '#43a047')};
   margin-bottom: 2px;
`;

/** MODAL */
export const ModalCenteredView = styled.TouchableOpacity`
   flex: 1;
   justify-content: flex-end;
   align-items: center;
   background: #00000099;
   );
`;

export const ModalView = styled.View`
   background: #fff;
   width: 100%;
`;

export const MVDelete = styled.View`
   background: #fff;
   width: 85%;
   height: 330px;
`;

export const VHeaderDelete = styled.View`
   height: 130px;
   background: #43a047;
   justify-content: center;
   align-items: center;
`;

export const MVOpcao = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const ImgDelete = styled(Icon)`
   margin-left: 16px;
`;

export const ImgMarcar = styled(Icon)`
   margin-left: 16px;
`;

export const TextMsg = styled.Text`
   font-family: 'Roboto-Regular';
   color: #000000de;
   text-align: center;
   margin: 15px;
`;

export const TextMsgDelete = styled.Text`
   font-family: 'Roboto-Regular';
   color: #707070;
   text-align: center;
   margin: 40px 18px 20px 18px;
   width: 80%;
`;

export const TextMsgDeleteEscuro = styled.Text`
   font-family: 'Roboto-Regular';
   color: #000000b3;
   font-weight: bold;
`;

export const ViewSeparador = styled.View`
   background: #ccc;
   height: 0.5px;
`;

export const VMLido = styled.View`
   height: 20px;
   width: 20px;
   border-radius: 10px;
   background: #43a047;
   margin-left: 22px;
`;

/** MODAL EXCLUIR */
export const MExcluir = styled(Modal)``;

export const ModalCenteredViewDelete = styled.TouchableOpacity`
   flex: 1;
   justify-content: center;
   align-items: center;
   background: #00000099;
   );
`;

export const VActions = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin: 20px 20px;
`;

export const TCancelar = styled.Text`
   color: #43a047;
   font-family: 'Roboto-Regular';
`;

export const BConfirmar = styled.TouchableOpacity`
   height: 50px;
   width: 120px;
   border-radius: 5px;
   background: #43a047;
   justify-content: center;
   align-items: center;
`;

export const TConfirmar = styled.Text`
   color: #fff;
   font-family: 'Roboto-Regular';
`;

export const BCancelar = styled.TouchableOpacity`
   height: 50px;
   width: 120px;
   border-radius: 5px;
   justify-content: center;
   align-items: center;
`;

export const ImgWarning = styled(Icon)``;

export const TWarning = styled.Text`
   color: #fff;
   font-family: 'Roboto-Medium';
   font-size: 20px;
`;
