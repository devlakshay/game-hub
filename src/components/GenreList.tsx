import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
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
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
