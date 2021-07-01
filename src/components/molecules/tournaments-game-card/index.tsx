import { StyledCard, StyledTitle, StyledDescription } from './styles';

interface Props {
  image: string;
  gameName: string;
  description: string;
}

export const TournamentsGameCard = ({
  image,
  gameName,
  description,
}: Props) => {
  return (
    <StyledCard image={image}>
      <StyledDescription>{description}</StyledDescription>
      <StyledTitle>{gameName}</StyledTitle>
    </StyledCard>
  );
};
