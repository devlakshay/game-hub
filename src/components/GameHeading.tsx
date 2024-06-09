import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();

  const platformName = platforms?.results.find(
    (p) => p.id === gameQuery.platformID
  )?.name;
  const genresName = genres?.results.find(
    (g) => g.id === gameQuery.platformID
  )?.name;

  const heading = `${platformName || ""} ${genresName || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
