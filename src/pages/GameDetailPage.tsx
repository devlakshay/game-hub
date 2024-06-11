import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import CriticScore from "../components/CriticScore";
import useTrailer from "../hooks/useTrailer";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
        <SimpleGrid columns={2} as={"dl"}>
          <GameAttribute term="Platforms">
            {game.parent_platforms?.map(({ platform }) => (
              <Text key={platform.id}>{platform.name}</Text>
            ))}
          </GameAttribute>
          <GameAttribute term="Metascore">
            <CriticScore score={game.metacritic} />
          </GameAttribute>
          <GameAttribute term="Genres">
            {game.genres?.map((genre) => (
              <Text key={genre.id}>{genre.name}</Text>
            ))}
          </GameAttribute>
          <GameAttribute term="Publishers">
            {game.publishers?.map((publisher) => (
              <Text key={publisher.id}>{publisher.name}</Text>
            ))}
          </GameAttribute>
        </SimpleGrid>
      </GridItem>
      <GridItem>
        <GameTrailer slug={game.slug} />
        <GameScreenshots id={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
