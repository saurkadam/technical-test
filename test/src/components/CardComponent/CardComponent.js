import React from 'react';
import {
    CardContent,
    Grid,
    Typography
  } from "@mui/material";
import { Item } from '../CardsContainer/CardsContainer'; 
import { StyledCard } from '../CardComponent/CardComponent.style';

class CardComponent extends React.Component {
  render() {
    return (
      <StyledCard selected={this.props.cardData.selected}>
        <CardContent>
            <Typography variant="h5" mb={1} align='center' component="h5">
                  {this.props.cardData.deviceName}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Item>
                    <Typography variant="p" align='left' component="p">
                      Applcation Count: {this.props.cardData.applicationCount}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Item>
                    <Typography variant="p" align='left' component="p">
                      IP Address: {this.props.cardData.ipAddress}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Item>
                    <Typography variant="p" align='left' component="p">
                      OS: {this.props.cardData.operatingSystem}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Item>
                    <Typography variant="p" align='left' component="p">
                      Status: {this.props.cardData.status}
                    </Typography>
                  </Item>
                </Grid>
            </Grid>
        </CardContent>
    </StyledCard>
    )
  }


}
export default CardComponent