import { createContext, useContext } from 'react';
import { type ChildFriendContextType } from './childFriendContext';

export const ChildFriendContext = createContext<ChildFriendContextType | null>(null);

export const useChildFriendContext = (): ChildFriendContextType => {
  const context = useContext(ChildFriendContext);
  if (!context) {
    throw new Error('Context needs a provider');
  }
  return context;
};
