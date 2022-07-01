const MODAL_ON = "MODAL_ON";
const MODAL_OFF = "MODAL_OFF";



export const modalReducer = (state=false, action) => {
    if (action.type === MODAL_ON) {
        state = true;
    } else if (action.type === MODAL_OFF) {
        state = false;
    } return state;
}

export const modalON = () => ({type: MODAL_ON});
export const modalOFF = () => ({type: MODAL_OFF});