import React from "react";
import useTrailer from "../hooks/useTrailer";
import { Spinner } from "@chakra-ui/react";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data, isLoading, error } = useTrailer(slug!);

  if (isLoading) <Spinner />;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      controls
      width={1000}
    />
  ) : null;
};

export default GameTrailer;
