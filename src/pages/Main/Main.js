import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import Alexa from "../../imgs/samplePerson.jpeg";
import "./Main.css";

function Main() {
  return (
    <div className='main'>
      <Header />
      <div className='card-div'>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 28 }}
              color='text.secondary'
              gutterBottom
            >
              ALEXA
            </Typography>
            <Typography variant='h5' component='div'>
              <img className='profile-picture' src={Alexa} />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Saint-Petersburg
            </Typography>
          </CardContent>
          <div className='like-dislike'>
            <Button size='large'>
              <FavoriteBorderIcon />
            </Button>
            <Button size='large'>
              <CloseIcon />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Main;
