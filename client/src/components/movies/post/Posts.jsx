import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

// import { getAllPosts } from '../../../service/api';
import { API } from '../../../service/api';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//components
import Post from './Post';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const title = searchParams.get('title');

    useEffect(() => {
        const fetchData = async () => { 
            let response = await API.getAllPosts({ title : title ,category:category || "" });
            if (response.isSuccess) {
                getPosts(response.data);
            }
        }
        fetchData();
    }, [category,title]);

    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid item lg={2} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/movies/details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        Aradığınız içerik bulunamadı.
                    </Box>
            }
        </>
    )
}

export default Posts;