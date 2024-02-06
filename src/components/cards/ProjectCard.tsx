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

  return (
    <>
      <CardWrapper image={image && image}>
        <Title>{name}</Title>
        <CategoryText>{category}</CategoryText>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 320px;
  height: 407px;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0 0 20px 25px;
  border-radius: 10px;
`;
const Title = styled.p`
  color: var(--fore-allways---white, #FFF);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const CategoryText = styled.p`
  color: #1FA500;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151.523%; /* 24.244px */
`;
