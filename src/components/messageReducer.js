export const initialState = {
  selectedId: 0,
  message: 'Hello',
};

export function messageReducer(state, action) {
  switch (action.type) {
    case 'changed_selection':
      return { ...state, selectedId: action.contactId, message: '' };
  }
}
