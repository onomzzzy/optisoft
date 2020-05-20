import React, { useEffect, useState } from "react";
import "../css/homestaticcarousel.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
const uri = "https://onome.s3.us-east-2.amazonaws.com/FocusMall";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const HomeCarousel = () => {
let storeItem = [];
const [item1, setItem1] = useState({brand:'',title:'',picture:''});
const [item2, setItem2] = useState({brand:'',title:'',picture:''});
  //Api Calls
  useEffect(() => {
    getItemfromServer() 
  },[]
  )
  const getItemfromServer = async() => {
   await axios
      .get(uri)
      .then((res) => {
        console.log(`error ocurr ${JSON.stringify(res.data)}`);
        let totalItem = (JSON.parse(JSON.stringify(res.data)))
        setItem1({brand:totalItem[0].brand,title:totalItem[0].title,picture:(totalItem[0]).picture[0]})
        setItem2({brand:totalItem[1].brand,title:totalItem[1].title,picture:(totalItem[1]).picture[1]})
      })
      .catch((err) => {
        console.log(`error ocurr ${err}`);
      });
  }

  const classes = useStyles();
  
  return (
    <div className="home-carousel">
    <div className="container">

      <div className="row">

        <div className="col-12 col-sm-6 col-md-6 col-xl-6">
        <ScrollAnimation
            animateOnce={true}
            initiallyVisible={true}
            animateIn="jello"
          >
            <div className="card-container">
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item2.title}
          height="200"
          image={item2.picture}
          title={item2.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {item2.brand}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item2.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </ScrollAnimation>

        </div>

        <div className="col-12 col-sm-6 col-md-6 col-xl-6">
        <ScrollAnimation animateOnce={true} animateIn='bounceInRight'>
          <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={item1.title}
            height="auto"
            image={item1.picture}
            title={item1.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {item1.brand}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item1.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </ScrollAnimation>
  
          </div>

      </div>

    </div>
     
    
    </div>
  );
};

export default HomeCarousel;
