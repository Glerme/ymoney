import { useCallback, useState } from "react";

import { useFocusEffect } from "@react-navigation/native";

import { OutputsProps } from "../types/Outputs.types";

import { getRealm } from "../databases/realm";

export const useGetAllMoney = (status: "entrada" | "saida" = "entrada") => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<OutputsProps[]>([]);
  const [allData, setAllData] = useState<OutputsProps[]>([]);
  const [error, setErrors] = useState(null);

  const getAllMoney = async () => {
    setLoading(true);

    try {
      const realm = await getRealm();

      const listAllMoney = realm
        .objects<OutputsProps>("Output")
        .sorted(`createdAt`, true)
        .toJSON();

      const listMoney = realm
        .objects<OutputsProps>("Output")
        .filtered("type == $0", status)
        .sorted(`createdAt`, true)
        .toJSON();

      setAllData(listAllMoney);
      setData(listMoney);
    } catch (error) {
      console.error(error);

      setErrors(error as any);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getAllMoney();

      return getAllMoney;
    }, [status])
  );

  return { loading, data, allData, error };
};
