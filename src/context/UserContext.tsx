import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

import uuid from 'react-native-uuid';

import type {User} from 'types/User.types';

import {getRealm} from '../databases/realm';

interface UserContextProps {
  loading: boolean;
  userData: User | null;
  setUserData: Dispatch<SetStateAction<User | null>>;
  createUser: (user: any) => Promise<void>;
  deleteUser: () => Promise<void>;
}

export const UserContext = createContext<UserContextProps>({
  createUser: async (user: any) => {},
  setUserData: () => {},
  deleteUser: async () => {},
  loading: false,
  userData: null,
});

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const createUser = async (user: any) => {
    const realm = await getRealm();

    try {
      setLoading(true);

      const data = {
        _id: `${uuid.v4()}`,
        salary: user.salary,
        createdAt: `${new Date()}`,
      };

      realm.write(() => {
        realm.create<User>('User', data);
      });

      setUserData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      realm.close();
    }

    // try {
    //   setLoading(true);

    //   const data = {
    //     _id: `${uuid.v4()}`,
    //     name: user.name,
    //     profession: user.profession,
    //     salary: user.salary,
    //     inOutSalary: '0',
    //     createdAt: `${new Date()}`,
    //   };

    //   realm.write(() => {
    //     realm.create<User>('User', data);
    //   });

    //   setUserData(data);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   realm.close();
    //   setLoading(false);
    // }
  };

  const deleteUser = async () => {
    const realm = await getRealm();

    try {
      setLoading(true);

      realm.write(() => {
        realm.delete(realm.objects('User'));

        setUserData(null);
      });
    } catch (error) {
      console.log(error);
    } finally {
      realm.close();
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        userData: userData,
        setUserData: setUserData,
        createUser,
        deleteUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};
