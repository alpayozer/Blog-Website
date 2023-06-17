
import React, { useEffect, useState } from "react";
import styles from "../../css/HomePage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Space } from "antd";
import jerry from "../../assets/jerry.svg";
import tom from "../../assets/tom.svg";
import aksiyon from "../../assets/deadpool.svg";
import bilimKurgu from "../../assets/baby-yoda.svg";
import romantik from "../../assets/fairy.svg";
import korku from "../../assets/scream.svg";
import gerilim from "../../assets/spider-man.svg";
import komedi from "../../assets/woody-woodpecker.svg";
import jake from "../../assets/jake.svg";

import { Grid } from '@mui/material';

// import Slider from "../Components/Slider/Slider";
// import CardSlider from "../Components/CardSlider/CardSlider";
// import CommentCard from "../Components/CommentCard/CommentCard";
import IconCard from "../IconCard/IconCard";
// import Header from "../Components/Header/Header";

//components
import Posts from '../movies/post/Posts';
import CardSlider from "../cardslider/CardSlider";
import Carousel from "../carousel/Carousel";

const Home = () => {
  
  return (

      <Container className={styles.body}>

        <div className={styles.slider}>
          <span className={styles.title}>
            Senin için yeni filmler ekledik
            <img src={jerry} />
            Göz atmak ister misin? <img src={tom} />
          </span>
          <Carousel />

        </div>
        {/* <Grid container item xs={12} sm={12} lg={12}>
          <Posts />
        </Grid> */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <span className={styles.secondtitle}><img src={jake}/> Keşfet </span>
        <CardSlider/>
        <div>

        </div>
        {/* <CardSlider /> */}
        {/* <Row>
        {movies.map((i)=>{
          return(
            
              <Col>
              <MoviesCard imdb={i.rate} title={i.title} image={i.image} />
              
              </Col>

           
          )
        })}
         </Row> */}
        {/* <Row >
              <Col md={2} sm={12}><MoviesCard imdb="8" title="John Wick: Chapter 4" image={jw} /></Col>
              <Col md={2} sm={12}><MoviesCard imdb="7" title="Avatar: The Way of Water" image={avatar} /></Col>
              
            </Row> */}

        <div>
          <Row>
            {/* <Col style={{ marginTop: "5%" }} xs={12} sm={12} md={5} xl={5}>
              <Row>
                <h5 className={styles.alt_title}>
                  <img src={pixarLamp} /> En Çok Beğenilen Yorumlar
                </h5>
              </Row>
              <Row className={styles.customScroll}>
                {/* <CommentCard title="Avatar" comment={yorumMetni} />
                <CommentCard title="John Wick" comment={yorumMetni} />
                <CommentCard title="Titanic" comment={yorumMetni} />
                <CommentCard title="John Wick" comment={yorumMetni} />
                <CommentCard title="Avatar" comment={yorumMetni} />
                <CommentCard title="Titanic" comment={yorumMetni} /> 
              </Row>
            </Col> */}
            <Col style={{ marginTop: "5%" }} xs={2} sm={4} md={6} xl={12}>
              <Row className={styles.icon_row}>
              <h5 className={styles.alt_title2}>
                Aradığın kategoriye hızlıca eriş
              </h5>
                <Space
                  direction="vertical"
                  size="large"
                  style={{ display: "flex" }}
                >
                  <Row>
                    <Space
                      direction="horizontal"
                      size="large"
                      style={{ display: "flex" }}
                    >
                      <Col xs={2} sm={2} md={4} xl={4}>
                        <IconCard title="korku" image={korku} />
                      </Col>
                      <Col xs={2} sm={2} md={4} xl={4}>
                        <IconCard title="Aksiyon" image={aksiyon} />
                      </Col>
                      <Col xs={2} sm={2} md={4} xl={4}>
                        <IconCard title="Komedi" image={komedi} />
                      </Col>
                    </Space>
                  </Row>
                  <Row>
                    <Space
                      direction="horizontal"
                      size="large"
                      style={{ display: "flex" }}
                    >
                      <Col xs={2} sm={2} md={4} xl={4}>
                        <IconCard title="Gerilim" image={gerilim} />
                      </Col>
                      <Col xs={2} sm={2} md={4} xl={4}>
                        <IconCard title="Romantik" image={romantik} />
                      </Col>
                      <Col xs={2} sm={2} md={4} xl={4}>
                        <IconCard title="Bilim Kurgu" image={bilimKurgu} />
                      </Col>
                    </Space>
                  </Row>
                </Space>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    
  )
}

export default Home;