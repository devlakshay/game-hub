import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store/useGameQueryStore";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const setPlatformID = useGameQueryStore((s) => s.setPlatformID);

  const platformName = data?.results.find((p) => p.id === platformID)?.name;

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformID(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
