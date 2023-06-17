import React from 'react';
import styles from '../../css/Profile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import profil from '../../assets/avatar.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import {  Input } from 'antd';
import Layout, { Content } from 'antd/es/layout/layout';
import avatar from '../../assets/avatar.jpg';
import titanic from '../../assets/titanic.jpg';
import jw from '../../assets/john_wick.jpg';
import { Button, Modal } from 'antd';
import babyYoda from "../../assets/baby-yoda.svg"
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";


const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { account } = useContext(DataContext);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <body className={styles.body}>
                <Container>
                    {/* <Header /> */}
                    
                    <Layout>
                        <Content className={styles.content}>
                            <Row>
                                <Col xs={12} md={2} xl={2}  > <Figure>
                                    <Figure.Image className={styles.figureImage}
                                        width={171}
                                        height={180}
                                        alt="171x180"
                                        src={profil}
                                    />
                                    <Figure.Caption className={styles.figureCaption}>
                                        {account.name}

                                    </Figure.Caption>
                                </Figure></Col>
                                <Col style={{ border: 2 }} xs={12} sm={12} md={8} xl={8} >
                                    <p style={{
                                        marginTop: '5%',
                                        padding: '20px',
                                        width: 700,
                                        borderColor: 'white',
                                        borderStyle: 'dashed',
                                        borderCollapse: 'collapse',
                                        border: '2px dashed white',

                                    }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                        numquam blanditiis harum quisquam eius sed oditLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                        numquam blanditiis harum quisquam eius sed odit


                                    </p>
                                    {/* <TextArea
                                        placeholder="bize kendinden bahset"
                                        className={styles.textArea}
                                        style={{
                                            height: 150,
                                        }}
                                    /> */}
                                </Col>
                                <Col style={{ marginTop: '3%' }} xs={12} sm={12} md={2} xl={2} >
                                    <>
                                        <Button className={styles.password} onClick={showModal} type='dark'>
                                            Şifreni değiştir
                                        </Button>
                                        <Modal title="Şifreni Değiştir" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                            <Input.Password placeholder="mevcut şifre" />
                                            <Input.Password
                                                placeholder="yeni şifre"
                                            // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                            />
                                        </Modal>
                                    </>
                                    <Button className={styles.about} type='dark' >
                                        Hakkımda Bilgileri Güncelle
                                    </Button>
                                </Col>
                            </Row>
                            <hr />

                            <Row>

                                <Col style={{ backgroundColor: '' }} xs={12} sm={12} md={5} xl={5} >
                                    <Row>
                                        <h5> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40px" height="40px"><path fill="#f5bc00" d="M24,3c-1,0-13,22-13,42c0,0,13-16,17-16s9,13,9,13C37,23,25,3,24,3z" /><path fill="#6c19ff" d="M25.5,22.1L26,25l-2.5-2.6L21,25l0.7-2.9L18,20.5l4.1-0.7L23.5,9l1.7,10.8l3.8,0.7L25.5,22.1z" /></svg>
                                            Yapılan Yorumlar</h5>
                                    </Row>
                                    {/* <Row className={styles.customScroll}>
                                        <CommentsMade title="Film " comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit " />
                                        <CommentsMade title="Film " comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit " />
                                        <CommentsMade title="Film " comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit " />
                                        <CommentsMade title="Film " comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit " />
                                        <CommentsMade title="Film " comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit " />
                                        <CommentsMade title="Film " comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit " />
                                        <CommentsMade title="Film " comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit " />
                                        <CommentsMade title="Film " comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit " />
                                        <CommentsMade title="Film " comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit " />

                                    </Row> */}
                                </Col >
                                <Col md={1} xl={1}>
                                </Col>


                                <Col style={{ backgroundColor: '' }} xs={12} sm={12} md={6} xl={6} >
                                    <h5 ><img src={babyYoda}/>
                                        Top 3 Filmler</h5>
                                    {/* <Row>
                                        <Col md={4} style={{ backgroundColor: '' }}>
                                            <MoviesCard title="Film adı"
                                                imdb="9.8"
                                                image={avatar} />
                                        </Col>
                                        <Col md={4} style={{ backgroundColor: '' }}>
                                            <MoviesCard title="Film adı"
                                                imdb="9.8"
                                                image={jw} />
                                        </Col>
                                        <Col md={4} style={{ backgroundColor: '' }}>
                                            <MoviesCard title="Film adı"
                                                imdb="9.8"
                                                image={titanic} />
                                        </Col>
                                    </Row> */}
                                </Col>

                            </Row>
                        </Content>
                    </Layout>
                </Container>
            </body>
    );
}

export default Contact;