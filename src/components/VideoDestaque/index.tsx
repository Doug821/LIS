import React from 'react';
import Styled from 'styled-components';
import { VIDEOS } from '../../Data/Videos';

const VideoContainer = Styled.div`
    @media(min-width: 768px) {
        display: flex;
        margin-bottom: 40px;
    }
`;

const Video = Styled.iframe`
    width: 100%;
    height: 315px;
    border-radius: 2%;

    @media(min-width: 768px) {
        width: 60%;
        height: 400px;
    }
`;

const Title = Styled.h2`
    color: var(--background-gray);
    font-size: 1.6rem;
    font-weight: normal;
    margin-bottom: 20px;
`;

const Description = Styled.div`
    height: 300px;
    margin-top: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;

    @media(min-width: 768px) {
        width: 30%;
        margin-left: 20px;
        margin-top: 0;
    }
`;

const Info = Styled.p`
    height: 150px;
    overflow: hidden;
    color: var(--background-gray);
`;

export default function VideoDestaque() {
    var videoItem = VIDEOS.filter(v => v.featured === true)[0];
    return (
        <VideoContainer>
            <Video
                src={`https://www.youtube.com/embed/${videoItem.video}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </Video>
            <Description>
                <Title>
                    {videoItem.name}
                </Title>
                <Info>
                    {videoItem.description}
                </Info>
            </Description>
        </VideoContainer>
    );
}