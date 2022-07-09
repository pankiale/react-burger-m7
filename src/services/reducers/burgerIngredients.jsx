import {
  TAB_SWITCH,
  TOGGLE_MODAL
} from '../actions/burgerIngredients';

const initialState = {
  currentTab: 'bun',
  isModalOpen: false
};

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAB_SWITCH: {
      return {
        ...state,
        currentTab: action.value
      };
    }
    case TOGGLE_MODAL: {
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      };
    }
    default: {
      return state;
    }
  }
};