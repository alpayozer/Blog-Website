import { useState, useEffect, useContext } from 'react';

import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';

import { categories } from '../../constants/data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;


const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const { account } = useContext(DataContext);

    return (
        <>
            {
                account.username === "admin" &&
                <>
                    <Link to={`/create`} style={{ textDecoration: 'none' }}>
                        <StyledButton variant="contained">Create Blog</StyledButton>
                    </Link>
                </>
            }
            <Container>
                <Row style={{ justifyContent: "space-around" }}>
                    <Col style={{ backgroundColor: "white", maxWidth: "90px", height: "30px", textAlign: "center", borderRadius: "10px", }}>
                        <Link style={{ color: "red", textDecoration: "none" }} to={"/movies"}>
                            All</Link>
                    </Col>
                    {categories.map(category => (
                        <Col style={{ backgroundColor: "white", maxWidth: "90px", height: "30px", textAlign: "center", borderRadius: "10px" }}>
                            <Link style={{ color: "red", textDecoration: "none" }} to={`/movies/?category=${category.type}`}>
                                {category.type}</Link>
                        </Col>
                    ))}
                </Row>
            </Container>


        </>
    )
}

export default Categories;