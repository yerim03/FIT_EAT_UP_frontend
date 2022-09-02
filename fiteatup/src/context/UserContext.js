//context api를 사용하여 사용자의 pk, id(username), nickname 관리
import React, { createContext, useContext, useReducer, } from 'react';

const initialState = {
    user: null, //사용자 정보
    headers: {},    //헤더에 들어갈 사용자의 token
};

const reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN":   //로그인
            return {
                ...state,
                user: {
                    userPk: action.userData.pk,
                    userId: action.userData.id,
                    userNickname: action.userData.nickname,
                    userToken: action.userData.token,
                },
                headers: {
                    Authorization: `jwt ${action.userData.token}`
                }
            };
        case "EDIT_NICKNAME":   //닉네임 수정
            return {
                ...state,
                user: {
                    userPk: action.userData.pk,
                    userId: action.userData.id,
                    userNickname: action.userData.nickname,
                    userToken: action.userData.token,
                }
            }
        case "EDIT_PROFILEIMAGE":   //프로필사진 수정
            return {
                ...state,
                user: {
                    userPk: action.userData.pk,
                    userId: action.userData.id,
                    userNickname: action.userData.nickname,
                    userToken: action.userData.token,
                }
            }
        case "LOGOUT":  //로그아웃
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

const UserStateContext = createContext(null);    //user 상태
const UserDispatchContext = createContext(null);


const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <UserStateContext.Provider value={state}>
        <UserDispatchContext.Provider value={dispatch}>
          {children}
        </UserDispatchContext.Provider>
      </UserStateContext.Provider>
    );
};


const useUserState = () => {
    const state = useContext(UserStateContext);
    if (!state) throw new Error("Cannot find UserProvider");
    return state;
  };
  
const useUserDispatch = () => {
    const dispatch = useContext(UserDispatchContext);
    if (!dispatch) throw new Error("Cannot find UserProvider");
    return dispatch;
  };


export { UserProvider, useUserState, useUserDispatch}