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
        fontWeight: 'bold',
        color: `${theme.title}`,
    },
    tabScreenSmallTitle: {
        fontSize: 14,
        color: `${theme.smallTitle}`,
    },
});