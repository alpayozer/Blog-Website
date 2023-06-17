import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl, Grid  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Col, Row ,Input } from 'antd';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

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

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
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

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [movie, setMovie] = useState(initialMovie);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);

    const url = movie.picture ? movie.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await API.uploadFile(data);
                movie.picture = response.data;
            }
        }
        getImage();
    }, [file])

    const saveMovie = async () => {
        await API.createPost(movie);
        navigate('/');
    }

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Image src={url} alt="post" />

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
                    <Input name='title' onChange={(e)=> handleChange(e)} placeholder="Title" />
                </Row>
                <Row>
                <Input name='year' onChange={(e)=> handleChange(e)} placeholder="Year" />
                    
                </Row>
                <Row>
                <Input name='actors' onChange={(e)=> handleChange(e)} placeholder="Actors" />
                  
                </Row>
                <Row>
                <Input name='directors' onChange={(e)=> handleChange(e)} placeholder="Directors" />
                </Row>
                <Row>
                <Input name='categories' onChange={(e)=> handleChange(e)} placeholder="Category" />
                </Row>
                <Row>
                <Input name='time' onChange={(e)=> handleChange(e)} placeholder="Time" />
                </Row>
                <Row>
                <Input name='description' onChange={(e)=> handleChange(e)} placeholder="Description" />
                </Row>
                <Button onClick={() => saveMovie()} variant="contained" color="primary">Publish</Button>
            </StyledFormControl>
        </Container>
    )
}

export default CreatePost;