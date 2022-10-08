//프로젝트 내에 사용되는 컬러들
const colors = {
    white: '#FFFFFF',
    red: '#FF0000',
    purple_0: '#E8E5FF',
    purple_1: '#D3CFFF',
    purple_2: '#B3AAFA',
    base_purple: '#9B8CFA',
    purple_3: '#6A59CF',
    purple_4: '#4431A3',
    grey_0: '#E0E0E0',
    grey_1: '#A0A0A0'
    //9E8FFA
}

export const theme = {
    tabBackground: colors.purple_0,
    tabActiveTint: colors.purple_3,

    title: colors.purple_4,
    smallTitle: colors.base_purple,
    backgroundColor: colors.white,

    buttonBackgroundColor: colors.base_purple,
    buttonTitleColor: colors.white,

    labelTitleColor: colors.purple_4,   //삭제할 것

    inputFocusColor: colors.purple_4,   //input focus on
    inputNotFocusColor: colors.base_purple,    //input focus out
    inputDisabled: colors.purple_0, //input disabled
    inputPlaceholder: colors.grey_1,

    errorMessage: colors.red,
    correctMesage: colors.purple_4,

    searchBarInput: colors.purple_0,
    searchBarButton: colors.purple_3,

    iconColor: colors.purple_3,
    mypageLine: colors.purple_0,

    imageBackgroundColor: colors.grey_0,
}