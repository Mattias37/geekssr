import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { deleteAccountGame } from '../../../redux/profile/action';
import { StyledTitle, StyledSubtitle, StyledImage, Container,ContainerContent } from './styles';

interface Props {
  img: string;
  gameName?: string;
  gameId: string;
  gameAccountId: string; 
  username?: string;
  handle: any;
}

export const GameProfile = ({ handle, ...props }: Props) => {
  const{ push } = useRouter();
  const dispatch = useDispatch();
  const handleInfoTeam = async () => {
    await dispatch(push(`/team-selected/${props.gameAccountId}`));
  };
  console.log(props)
  return (
    <Container onClick={handleInfoTeam}>
      <div
        className="close-div cursor-pointer"
        onClick={() => dispatch(deleteAccountGame(props.gameAccountId))}>
        X
      </div>
      <div className="edit-div cursor-pointer" onClick={() => handle(props)}>
        Edit
      </div>
      <ContainerContent>
        {console.log(props.img)}
      <StyledImage imageUrl={props.img || 'https://dev.nacionesports.com/static/media/01.cff48cd1.png'} />
      <div className="ml-3">
        <StyledTitle>{props.gameName}</StyledTitle>
        <StyledSubtitle>{props.username}</StyledSubtitle>
      </div>
      </ContainerContent>
    </Container>
  );
};
