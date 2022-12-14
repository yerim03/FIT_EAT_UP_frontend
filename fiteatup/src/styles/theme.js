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
    purple_5: '#3B2C8A',
    grey_0: '#E9E9E9',
    grey_1: '#E0E0E0',
    grey_2: '#A0A0A0',
    grey_3: '#404040'
}

export const theme = {
    backgroundColor: colors.white,
    imageBackgroundColor: colors.grey_1,

    title: colors.purple_4,
    title_1: colors.purple_5,
    title_2: colors.purple_3,
    smallTitle: colors.base_purple,

    backButtonColor: colors.purple_4,

    tabInActiveTint: colors.grey_2,
    tabActiveTint: colors.purple_4,

    cameraButtonImageColor: colors.grey_2,

    //button
    buttonBackgroundColor: colors.base_purple,
    buttonTitleColor: colors.white,

    buttonLineColor: colors.purple_1,

    //textinput
    inputFocusColor: colors.purple_4,   //input focus on
    inputNotFocusColor: colors.purple_1,    //input focus out
    inputDisabled: colors.purple_0, //input disabled
    inputPlaceholder: colors.grey_2,

    //에러메시지
    errorMessage: colors.red,
    correctMesage: colors.purple_4,

    //지역구 드롭다운
    dropdownColor: colors.purple_4,
    dropdownBorderColor: colors.purple_1,
    
    //검색창
    searchBarInput: colors.purple_0,
    searchBarButton: colors.base_purple,

    iconColor: colors.base_purple,

    flatlistLineColor: colors.purple_1,

    restInfoBackgroundColor: colors.grey_0,
    restInfoLineColor: colors.grey_2,
    restInfoDataTextColor: colors.grey_3,

    percentBackgroundColor: colors.purple_0,

    randomRecommBackgroundColor: colors.purple_0,
    randomQuestionImageColor: colors.purple_5,

    notSelectTitleColor: colors.purple_5,
    selectCheckColor: colors.base_purple,
    selectTitleColor: colors.base_purple,

    activityIndicator: colors.purple_2,
}