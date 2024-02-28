import React from 'react'
import styled from 'styled-components'
// import { FaArrowRight } from "react-icons/fa6";
// import { FaStar } from "react-icons/fa";
// import { createPortal } from 'react-dom';
// import { ProjectDetailPage } from '../../routes/ProjectDetailPage';

//const mountElement = document.getElementById('detail-page')

interface ProjectProps {
  category?: string
  image?: string[]
  name?: string
}

export const ProjectCard: React.FC<ProjectProps> = ({
    category,
    name,
    image,
  }) => {
    // const [showDetail, setShowDetail] = React.useState(false)

    // const handleShowDetail = () => {
    //   setShowDetail(!showDetail)
    // }
    const formatedName = name?.split(',')
    const firstName = formatedName && formatedName[0]
    const secondName = formatedName && formatedName[1]

  return (
    <>
      <CardWrapper image={image && image}>
        <ImageWrapper>
          <img src={image && image[0]} alt={name} />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{firstName}<br/>{secondName}</Title>
          <CategoryText>{category}</CategoryText>
        </ContentWrapper>
      </CardWrapper>
      {/* { showDetail &&
        createPortal(
          <ProjectDetailPage
            handleShowDetail={handleShowDetail}
            category={category}
            image={image}
            name={name}
          />,
          mountElement as HTMLElement
        )
      } */}
    </>
  )
}
const CardWrapper = styled.div<ProjectProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 320px;
  height: 448px;
  border-radius: 10px;
`;
const ImageWrapper = styled.div`
position: absolute;
top: 0;
width: 320px;
height: 100%;
padding: 0;
border-radius: 10px;
overflow: hidden;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: auto;
  background-color: rgba(9, 18, 66, 0.3);
  padding: 0.5rem;
  border-radius: 0 0 10px 10px;
  z-index: 1;
`;
const Title = styled.p`
  color: var(--fore-allways---white, #FFF);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 0.5rem;
  z-index: 1;
`;
const CategoryText = styled.p`
  padding-left: 0.5rem;
  color: #1FA500;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%; /* 24.244px */
  z-index: 1;
`;
