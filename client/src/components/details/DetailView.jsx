import { useState, useEffect, useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import styles from "../../css/Movie_Detail.module.css"
import { Box, Typography, styled, Rating } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Tooltip, Tag } from 'antd';
import { MdPlaylistAdd, MdStar, MdOutlineNotStarted } from "react-icons/md";
import { API } from '../../service/api';
// import { Col, Row } from 'antd';
import { DataContext } from '../../context/DataProvider';
import { Rate } from 'antd';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Modal } from 'antd';

// components
import Comments from './comments/Comments';
import Watchlist from '../watchlist/watchlists/Watchlist';
import Rates from './rates/Rates';

// const Container = styled(Box)(() => ({
//     margin: '50px 100px',
// }));

const Image = styled('img')({
    width: '20%',
    height: '50vh',
    objectFit: 'cover'
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
    font-size: 40px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
    font-size: 40px;

`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;
const values = {
    userId: "",
    movieId: ""
}
const DetailView = () => {
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    const [movie, setMovie] = useState({});
    const { account } = useContext(DataContext);
    const [value, setValue] = useState(0)
    const [antvalue, antsetValue] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [watchlist, setWatchlist] = useState(values);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setMovie(response.data);
            }
        }
        fetchData();
        setWatchlist({ ...watchlist, userId: account.name, movieId: id })
    }, []);

    const deleteBlog = async () => {
        await API.deletePost(movie._id);
        navigate('/')
    }

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const addWatchlist = async () => {
        // await setWatchlist({...watchlist,userId:account.name,movieId:movie._id})
        await API.addWatchlist(watchlist);
        alert("izleme listesine eklendi");
        console.log(watchlist);

    }

    return (
        <Container style={{ minHeight: "100vh" }}>
            <div style={{ backgroundImage: `url(${movie.picture})` }} className={styles.backgroundImage}>

                <Row className={styles.row}>
                    <Col md={4}>
                        <img style={{ width: 350, height: 500, borderRadius: 40, margin: 30, marginBottom: 0 }} src={movie.picture || url} />
                        <Rate style={{ marginLeft: "33%", marginTop: "2%", fontSize: "25px" }} disabled value={value} />
                    </Col>
                    <Col className={styles.col} md={7}>
                        <Row style={{ color: 'white', backgroundColor: "" }}>
                            <Row >
                                <Col>
                                    <p className={styles.title}>{movie.title}</p>
                                </Col>
                                <Col >
                                    <Tag className={styles.tag} color="geekblue">8.6</Tag>
                                </Col>
                                <Col>
                                    <Box style={{ float: "right", marginTop: "30px" }} >
                                        {
                                            account.username === "admin" &&
                                            <>
                                                <Link to={`/movies/update/${movie._id}`}><EditIcon color="primary" /></Link>
                                                <DeleteIcon onClick={() => deleteBlog()} color="error" />
                                            </>
                                        }
                                    </Box>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}><p className={styles.time}>{movie.year}<span style={{ marginLeft: 10, marginRight: 10, opacity: 0.5 }}>|</span>{movie.time}</p></Col>
                                <Col md={1}><Tooltip title="WatchList"><MdPlaylistAdd onClick={addWatchlist} size={30} /></Tooltip></Col>
                                <Col md={1}><Tooltip title="Rate">
                                    <Rates movie={movie} />
                                </Tooltip></Col>
                                <Col md={1}>
                                    <Tooltip title="Trailer">
                                        <Link target='_blank' to="https://www.youtube.com/watch?v=qEVUtrk8_B4">
                                            <MdOutlineNotStarted size={25} color='white' />
                                        </Link>
                                    </Tooltip>
                                </Col>
                            </Row>
                            <p>{movie.description}</p>

                            <Row>
                                <Col style={{}} md={1}><Badge bg="light" text="dark">{movie.categories}</Badge></Col>
                                <Col style={{ marginLeft: 20, }} md={1}><Badge bg="light" text="dark">{movie.categories}</Badge></Col>
                                <Col style={{ marginLeft: 20, }} md={1}><Badge bg="light" text="dark">{movie.categories}</Badge></Col>
                            </Row>
                            <div>
                                <hr />
                                <p>Oyuncular: {movie.actors}</p>
                                <p>Senarist: {movie.directors}</p>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>

            {/*             
            <Image src={movie.picture || url} alt="post" />
            <Box >
                {   
                    account.username === "admin" && 
                    <>  
                        <Link to={`/movies/update/${movie._id}`}><EditIcon color="primary" /></Link>
                        <DeleteIcon onClick={() => deleteBlog()} color="error" />
                    </>
                }
            </Box>
            <Heading>{movie.title}</Heading>
            <Typography>{movie.description}</Typography>
            <Typography>{movie.year}</Typography>
            <Typography>{movie.time}</Typography>
            <Typography>{movie.actors}</Typography>
            <Typography>{movie.directors}</Typography>
            <Typography>{movie.categories}</Typography> */}
            <Comments movie={movie} />
        </Container>
    )
}

export default DetailView;