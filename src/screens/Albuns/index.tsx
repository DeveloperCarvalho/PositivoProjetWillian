import React, { useState, ReactElement, useEffect } from 'react';
import {
   FlatList,
   TouchableOpacity,
   Modal,
   StatusBar,
   View,
   ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import data from '../../data/albuns.json';

import {
   Container,
   VHeader,
   THeader,
   VCard,
   VImagem,
   IconCard,
   THora,
   VBackgroundImage,
   VDivisor,
   VMensagem,
   TMensagem,
   TTitulo,
   VMore,
   MoreImagem,
   VMoreLido,
   VSuper,
   ViewSeparador,
   ModalCenteredView,
   ModalView,
   TextMsg,
   MVOpcao,
   ImgDelete,
   ImgMarcar,
   VMLido,
   MExcluir,
   MVDelete,
   VHeaderDelete,
   TextMsgDelete,
   TextMsgDeleteEscuro,
   BCancelar,
   BConfirmar,
   VActions,
   TCancelar,
   TConfirmar,
   ImgWarning,
   TWarning,
   ModalCenteredViewDelete,
   ViewLoading,
   MarkAllRead,
   MarkAllReadWrapper,
} from './style';
import { DrawerProps } from '../../routes/types/DrawerTypes';

const Albuns: React.FC = () => {
   const [modalVisible, setModalVisible] = useState(false);
   const [modalExcluirVisible, setModalExcluirVisible] = useState(false);
   const [tipoPerfil, setTipoPerfil] = useState('');
   const [selectedItem, setSelectedItem] = useState({});
   const navigation = useNavigation<DrawerProps>();
   const toggleDrawer = (): void => {
       navigation.toggleDrawer();
   };


   const handleModalVisible = (): void => {
      setModalVisible(!modalVisible);
   };

   const handleModal = (item: object): void => {
      setSelectedItem(item);
      handleModalVisible();
   };

   const handleDeleteClose = (): void => {
      setModalExcluirVisible(!modalExcluirVisible);
   };

   const handleOnDelete = (): void => {
      setModalExcluirVisible(!modalExcluirVisible);
   };

   const handleOnEdit = (): void => {
      setModalVisible(!modalVisible);
   };

   const handleMarkAllAsRead = (): void => {
  
   };

   function getRequestRefreshing(): void {
   }

   function getRequest(): void {
 
   }

   useEffect(() => {
      navigation.addListener('focus', () => {
         getRequest();
      });
   }, []);


   function getIcon(subItem): string {
      switch (subItem.avatar) {
         case 1:
            return 'avatar';
         case 2:
            return 'avatar';
         case 3:
            return 'avatar';
         default:
            return 'poll';
      }
   }

   function renderItemContent(subItem): ReactElement {
      return (
         <View style={{ flex: 1 }}>
            <VSuper lido={subItem.lido}>
               <VCard>
                  <VImagem>
                     <VBackgroundImage lido={subItem.lido}>
                        <IconCard
                           avatar={getIcon(subItem)}
                           size={33}
                           color="#fff"
                        />
                     </VBackgroundImage>
                     <THora lido={subItem.lido}>{subItem.hora}</THora>
                  </VImagem>

                  <VMensagem>
                     <TTitulo numberOfLines={2}>{subItem.name}</TTitulo>
                     <TMensagem numberOfLines={2}>{subItem.avatar}</TMensagem>
                  </VMensagem>

                  <VMore>
                     <TouchableOpacity onPress={() => handleModal(subItem)}>
                        <MoreImagem name="dots-vertical" size={25} />
                     </TouchableOpacity>
                     <VMoreLido lido={subItem.lido} />
                  </VMore>
               </VCard>
            </VSuper>
            <VDivisor />
         </View>
      );
   }

   function renderItemDate(item: object, index: number): ReactElement {
      return (
         <>
            <VHeader>
               <THeader>{item.name.substring(0, 5)}</THeader>
               {index === 0 && (
                  <MarkAllReadWrapper onPress={handleMarkAllAsRead}>
                     <MarkAllRead>MARCAR TODAS COMO LIDA</MarkAllRead>
                  </MarkAllReadWrapper>
               )}
            </VHeader>
            <FlatList
               style={{ flex: 1 }}
               data={data}
               keyExtractor={(item) => String(item.id)}
               renderItem={({ item: subItem }) => renderItemContent(subItem)}
            />
         </>
      );
   }

   return (
      <Container>
         <StatusBar backgroundColor="#43a047" />
         <Header title="Notificação" onDrawer={toggleDrawer} />
      
            <FlatList
               style={{ flex: 1 }}
               data={data}
               keyExtractor={(item) => String(item.id)}
               renderItem={({ item, index }) => renderItemDate(item, index)}
            />
     

         <Modal animationType="slide" transparent visible={modalVisible}>
            <>
               <StatusBar
                  barStyle="dark-content"
                  translucent
                  backgroundColor="#00000099"
               />
               <ModalCenteredView
                  onPress={handleModalVisible}
                  activeOpacity={0.5}>
                  <ModalView>
                     <TouchableOpacity onPress={handleOnEdit}>
                        <MVOpcao>
                           {selectedItem.lido ? (
                              <VMLido />
                           ) : (
                              <ImgMarcar name="eye" size={30} color="#43a047" />
                           )}

                           <TextMsg>
                              Marcar como
                              {selectedItem.lido ? ' não' : ''} lida
                           </TextMsg>
                        </MVOpcao>
                     </TouchableOpacity>

                     <ViewSeparador />

                     <TouchableOpacity
                        onPress={() => {
                           setModalExcluirVisible(!modalExcluirVisible);
                           setModalVisible(!modalVisible);
                        }}>
                        <MVOpcao>
                           <ImgDelete name="delete" size={30} color="#43a047" />
                           <TextMsg>Excluir</TextMsg>
                        </MVOpcao>
                     </TouchableOpacity>
                  </ModalView>
               </ModalCenteredView>
            </>
         </Modal>

         <MExcluir
            animationType="slide"
            transparent
            visible={modalExcluirVisible}>
            <>
               <StatusBar
                  barStyle="dark-content"
                  translucent
                  backgroundColor="#00000099"
               />
               <ModalCenteredViewDelete onPress={handleDeleteClose}>
                  <MVDelete>
                     <VHeaderDelete>
                        <ImgWarning
                           name="alert-circle-outline"
                           size={60}
                           color="#fff"
                        />
                        <TWarning>Atenção</TWarning>
                     </VHeaderDelete>

                     <TextMsgDelete>
                        Tem certeza que gostaria de{' '}
                        <TextMsgDeleteEscuro>EXCLUIR</TextMsgDeleteEscuro> esta
                        notificação?
                     </TextMsgDelete>
                     <VActions>
                        <BCancelar onPress={handleDeleteClose}>
                           <TCancelar>CANCELAR</TCancelar>
                        </BCancelar>
                        <BConfirmar onPress={handleOnDelete}>
                           <TConfirmar>CONFIRMAR</TConfirmar>
                        </BConfirmar>
                     </VActions>
                  </MVDelete>
               </ModalCenteredViewDelete>
            </>
         </MExcluir>
      </Container>
   );
};

export default Albuns;
