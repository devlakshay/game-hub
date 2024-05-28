import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { genres, error, loading } = useGenres();
  return (
    <>
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
              />
              <Button
                onClick={() => onSelectedGenre(genre)}
                fontSize={"lg"}
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
