import { useCallback, useState } from "react";

import { useFocusEffect } from "@react-navigation/native";

import { OutputsProps } from "types/Outputs.types";

import { getRealm } from "../databases/realm";

export const useGetAllMoney = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<OutputsProps[]>([]);
  const [error, setErrors] = useState(null);

  const getAllMoney = async () => {
    setLoading(true);

    try {
      const realm = await getRealm();

      const listMoney = realm
        .objects<OutputsProps>("Output")
        .sorted(`createdAt`, true)
        .toJSON();

      setData(listMoney);
    } catch (error) {
      console.log(error);

      setErrors(error as any);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getAllMoney();
    }, [])
  );

  return { loading, data, error };
};
