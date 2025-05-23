export const initialState = {
  selectedId: 0,
  messages: {
    0: 'Hello Taylor',
    1: 'Hello Alice',
    2: 'Hello Bob',
  },
};

export function messageReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return { ...state, selectedId: action.contactId, message: '' };
    }
    case 'edited_message': {
      return {
        ...state,
        messages: { ...state.messages, [state.selectedId]: action.message },
      };
    }
    case 'sent_message': {
      return { ...state, message: '' };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
