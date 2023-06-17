import React, { useState, useEffect } from 'react';

import { Box, styled, Button, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row ,Input } from 'antd';

import { API } from '../../service/api';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '20%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
`;

const initialMovie = {
    title: '',
    year:"",
    actors:"",
    directors:"",
    time:"",
    description: '',
    picture: '',
    categories: '',
    createdAt:Date.now()
}

const Update = () => {
    const navigate = useNavigate();

    const [movie, setMovie] = useState(initialMovie);
    const [file, setFile] = useState('');
    const [imageURL, setImageURL] = useState('');

    const { id } = useParams();

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setMovie(response.data);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await API.uploadFile(data);
                if (response.isSuccess) {
                    movie.picture = response.data;
                    setImageURL(response.data);    
                }
            }
        }
        getImage();
    }, [file])

    const updateBlogPost = async () => {
        await API.updatePost(movie);
        navigate(`/movies/details/${id}`);
    }

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Image src={movie.picture || url} alt="post" />

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <Row>
                    <Input value={movie.title} name='title' onChange={(e)=> handleChange(e)} placeholder="Title" />
                </Row>
                <Row>
                <Input value={movie.year} name='year' onChange={(e)=> handleChange(e)} placeholder="Year" />
                    
                </Row>
                <Row>
                <Input value={movie.actors} name='actors' onChange={(e)=> handleChange(e)} placeholder="Actors" />
                  
                </Row>
                <Row>
                <Input value={movie.directors} name='directors' onChange={(e)=> handleChange(e)} placeholder="Directors" />
                </Row>
                <Row>
                <Input value={movie.categories} name='categories' onChange={(e)=> handleChange(e)} placeholder="Category" />
                </Row>
                <Row>
                <Input value={movie.time} name='time' onChange={(e)=> handleChange(e)} placeholder="Time" />
                </Row>
                <Row>
                <Input value={movie.description} name='description' onChange={(e)=> handleChange(e)} placeholder="Description" />
                </Row>
                <Button onClick={() => updateBlogPost()} variant="contained" color="primary">Update</Button>
            </StyledFormControl>
        </Container>
    )
}

export default Update;