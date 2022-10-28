//프로젝트 내에 사용되는 컬러들
const colors = {
    white: '#FFFFFF',
    red: '#FF0000',
    purple_0: '#E8E5FF',
    purple_1: '#D3CFFF',
    purple_2: '#B3AAFA',
    base_purple: '#9B8CFA',
    purple_3 : '#8978F6',
    purple_4: '#6A59CF',
    purple_5: '#4431A3',
    purple_6: '#3B2C8A',
    grey_0: '#E0E0E0',
    grey_1: '#A0A0A0'
    //9E8FFA
}

export const theme = {
    tabInActiveTint: colors.grey_1,
    tabActiveTint: colors.purple_5,

    backButtonColor: colors.purple_5,

    title: colors.purple_5,
    title_1: colors.purple_6,
    smallTitle: colors.base_purple,

    backgroundColor: colors.white,

    buttonBackgroundColor: colors.base_purple,
    buttonTitleColor: colors.white,

    // labelTitleColor: colors.purple_5,   //삭제할 것

    inputFocusColor: colors.purple_5,   //input focus on
    inputNotFocusColor: colors.purple_1,    //input focus out
    inputDisabled: colors.purple_0, //input disabled
    inputPlaceholder: colors.grey_1,

    errorMessage: colors.red,
    correctMesage: colors.purple_5,

    dropdownColor: colors.purple_5,

    searchBarInput: colors.purple_0,
    searchBarButton: colors.purple_3,

    iconColor: colors.base_purple,
    flatlistLineColor: colors.purple_1,

    imageBackgroundColor: colors.grey_0,
}