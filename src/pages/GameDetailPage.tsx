import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import CriticScore from "../components/CriticScore";
import useTrailer from "../hooks/useTrailer";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
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
      <GameTrailer slug={game.slug} />
    </>
  );
};

export default GameDetailPage;
