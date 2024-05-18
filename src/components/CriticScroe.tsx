import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScroe = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 50 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={"14px"} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScroe;
