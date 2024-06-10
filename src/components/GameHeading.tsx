import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store/useGameQueryStore";

const GameHeading = () => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);

  const platformName = platforms?.results.find(
    (p) => p.id === platformID
  )?.name;
  const genresName = genres?.results.find((g) => g.id === genreID)?.name;

  const heading = `${platformName || ""} ${genresName || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
