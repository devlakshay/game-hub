import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { genres, error, loading } = useGenres();
  return (
    <>
      <Heading marginBottom={3} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {error && null}
        {loading && <Spinner />}
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY={"5px"}>
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
              />
              <Button
                onClick={() => onSelectedGenre(genre)}
                fontSize={"lg"}
                fontWeight={selectedGenre?.id == genre.id ? "bold" : "normal"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
