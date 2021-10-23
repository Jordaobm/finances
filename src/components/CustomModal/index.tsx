import React, { ReactNode } from "react";
import { Modal, StyleSheet, View } from "react-native";
import {
  ActionButton,
  Actions,
  Container,
  Content,
  TextButton,
  TextModal,
} from "./styles";

interface CustomModalProps {
  show: boolean;
  setShow: (value: boolean) => void;
  text: string;
  onConfirm: any;
  onCancel: any;
  children?: ReactNode;
}

export const CustomModal = ({
  setShow,
  show,
  text,
  onConfirm,
  onCancel,
  children,
}: CustomModalProps) => {
  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(!show);
        }}
      >
        <Content>
          <View style={styles.modalView}>
            <TextModal>{text}</TextModal>
            {children}
            <Actions>
              <ActionButton
                onPress={() => {
                  setShow(!show);
                  onCancel();
                }}
              >
                <TextButton style={{ color: "#ff6f6f" }}>Não</TextButton>
              </ActionButton>

              <ActionButton
                onPress={() => {
                  setShow(!show);
                  onConfirm();
                }}
              >
                <TextButton style={{ color: "#3cc75e" }}>Sim</TextButton>
              </ActionButton>
            </Actions>
          </View>
        </Content>
      </Modal>
    </Container>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignSelf: "center",
    position: "absolute",
    top: "30%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
