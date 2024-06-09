import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatformID: (platform: number) => void;
  selectedPlatformID?: number;
}

const PlatformSelector = ({
  onSelectPlatformID,
  selectedPlatformID,
}: Props) => {
  const { data, error } = usePlatforms();

  const platformName = data?.results.find(
    (p) => p.id === selectedPlatformID
  )?.name;

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatformID(platform.id)}
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
