import React, {
  PropsWithChildren,
  ReactNode,
  Reducer,
  Dispatch,
  useReducer,
} from 'react';
import { useContext } from 'react';

type Action = {
  type: 'open' | 'close' | 'clear';
  content?: ReactNode;
};

interface IModalState {
  showModal: boolean;
  content?: ReactNode;
}

type ContextType = IModalState & { dispatch: Dispatch<Action> };

const initialState: IModalState = {
  showModal: false,
  content: null,
};

const ModalContext = React.createContext<ContextType | undefined>(undefined);

export const ModalProvider: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const reducer: (state: IModalState, action: Action) => IModalState = (
    state,
    action
  ) => {
    switch (action.type) {
      case 'open':
        if (action.content) {
          return {
            showModal: true,
            content: action.content,
          };
        }
        break;

      case 'close':
        return {
          showModal: false,
          content: state.content,
        };

      case 'clear':
        return {
          showModal: false,
          shownIndex: 0,
          content: [],
        };

      default:
        return state;
    }
    return state;
  };

  const [state, dispatch] = useReducer<Reducer<IModalState, Action>>(
    reducer,
    initialState
  );

  return (
    <ModalContext.Provider
      value={{
        showModal: state.showModal,
        content: state.content,
        dispatch,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal: () => ContextType = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
