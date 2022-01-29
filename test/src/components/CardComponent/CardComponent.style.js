import {
    Card
  } from "@mui/material";
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card, {
    shouldForwardProp: (prop) => prop !== 'selected',
  })(({ selected, theme }) => ({
    ...(selected && {
      backgroundColor: theme.palette.selected
    }),
  }));