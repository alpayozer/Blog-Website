import React from 'react';

import { Rate } from 'antd';
import RatePage from "./RatePage"
import { useState, useEffect, useContext } from 'react';

import { Button, Modal } from 'antd';
import { MdPlaylistAdd, MdStar, MdOutlineNotStarted } from "react-icons/md";

import { API } from '../../../service/api';
import { Tooltip, Tag } from 'antd';

const initialValue = {
    movieId: '',
    rate: '',
}
const Rates = ({ movie }) => {
    const [rate, setRate] = useState(initialValue);
    const [rates, setRates] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    let rateSum=0;

    useEffect(() => {
        const getRate = async () => {
            const response = await API.getRates(movie._id);
            if (response.isSuccess) {
                setRates(response.data);
            }
        }
        getRate();
        console.log(rates+"getRATE");
    }, [movie]);

    const handleChange = (e) => {
        setRate({
            ...rate,
            movieId: movie._id,
            rate: e
        });
        console.log(e + "handle change");
    }

    const addRate = async () => {
        await API.newRate(rate);
        console.log(rate + "ekleme alanı Rate");
        setRate(initialValue)
        // setToggle(prev => !prev);
    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async () => {
        await addRate();
        setIsModalOpen(false);
        console.log(rate + "ekleme alanı OK");

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        // <Rate onChange={(e) => handleChange(e)} style={{ alignItems: "center", marginLeft: "150px" }} />
        <>
        
            <MdStar onClick={showModal} size={25} />
            <Modal title="Filmi Puanla" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Rate onChange={(e) => handleChange(e)} style={{ alignItems: "center", marginLeft: "150px" }} />
            </Modal>
            {
                rates && rates.length > 0 && rates.map(rate => {
                    // console.log(rate.rate+"map");
                    rateSum+=rate.rate;
                }
                )          
            }
            {/* <RatePage rate={rateSum} length={rates.length}/> */}
            {/* <div>ORTALAMA{rateSum = rateSum / rates.length}</div> */}
            <Tag color="geekblue">{rateSum = rateSum / rates.length}</Tag>
            {/* yorum */}

        </>
    )
}

export default Rates;