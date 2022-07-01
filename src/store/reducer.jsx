const SCROLL = "SCROLL"

export const reducer = (state="nav", action) => {
    if (action.type === SCROLL) {
        state = document.querySelector(action.payload);
        state.scrollIntoView({behavior: "smooth"});
    } return state;
}

export const scroll = (payload) => ({type: SCROLL, payload});
