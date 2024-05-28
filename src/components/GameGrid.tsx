import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, loading } = useGames(
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );

  return (
    <>
      {error && <Text>{error}</Text>}
      {loading && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={3}
          padding="10px"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <GameCardContainer key={n}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="10px"
      >
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
