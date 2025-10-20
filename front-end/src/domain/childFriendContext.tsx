import {
  useMemo,
  useState,
  type Dispatch,
  type ReactElement,
  type ReactNode,
  type SetStateAction,
} from 'react';
import type { Child, InvisibleFriend } from './types';
import { ChildFriendContext } from './useContext';

export type ChildFriendContextType = {
  setKids: Dispatch<SetStateAction<Child[]>>;
  setInvisibleFriends: Dispatch<SetStateAction<InvisibleFriend[]>>;
};

type ChildFriendContextProviderProps = {
  children: ReactNode;
};

export const ChildFriendContextProvider = ({
  children,
}: Readonly<ChildFriendContextProviderProps>): ReactElement => {
  const [kids, setKids] = useState<Child[]>([]);
  const [InvisibleFriend, setInvisibleFriends] = useState<InvisibleFriend[]>([]);

  const value = useMemo(
    () => ({
      kids,
      setKids,
      InvisibleFriend,
      setInvisibleFriends,
    }),
    [kids, setKids, InvisibleFriend, setInvisibleFriends],
  );

  return <ChildFriendContext.Provider value={value}>{children}</ChildFriendContext.Provider>;
};
