import { useCallback, useState } from "react";

import { useFocusEffect } from "@react-navigation/native";

import { OutputsProps } from "types/Outputs.types";

import { getRealm } from "../databases/realm";

export const useGetDetails = (outputId: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<OutputsProps | null>(null);
  const [error, setErrors] = useState(null);

  const getDetails = async () => {
    setLoading(true);

    try {
      const realm = await getRealm();

      const oneOutput = realm
        .objects<OutputsProps>("Output")
        .filtered(`_id == '${outputId}'`)
        .toJSON();

      setData(oneOutput[0]);
    } catch (error) {
      console.log(error);

      setErrors(error as any);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getDetails();
    }, [])
  );

  return { loading, data, error };
};
