//공통으로 사용되는 스타일 설정
import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const globalStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    container_2: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    tabScreenTitle: {
        fontSize: 23,
        fontWeight: '700',
        color: `${theme.title}`,
    },
    tabScreenSmallTitle: {
        fontSize: 14,
        color: `${theme.smallTitle}`,
    },
});

export const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        backgroundColor: `${theme.backgroundColor}`,
        borderRadius: 20,
        paddingVertical: 35,
        paddingHorizontal: 25,
        alignItems: "center",
        shadowColor: "#000",    //그림자 색
        shadowOffset: { //그림자 위치
        width: 2,
        height: 2
        },
        shadowOpacity: 0.3,    //그림자 투명도
        shadowRadius: 4,
        elevation: 5
    },
    modalButton: {
        marginTop: 30, 
        marginHorizontal: 12,
        paddingVertical: 10, 
        paddingHorizontal: 36,
        borderRadius: 10, 
        backgroundColor: `${theme.buttonBackgroundColor}`
    },
    modalButtonTitle: {
        fontSize: 15,
        color: `${theme.buttonTitleColor}`
    }
})