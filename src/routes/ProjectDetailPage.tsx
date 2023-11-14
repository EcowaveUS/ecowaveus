import React from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


interface ProjectDetailProps {
  handleShowDetail: () => void
  category?: string
  image?: string[]
  name?: string
  description?: string
  date?: string
  score: number
}

export const ProjectDetailPage: React.FC <ProjectDetailProps> = ({
  handleShowDetail,
  category,
  image,
  name,
  description,
  date,
  score
}) => {

  return (
    <Wrapper>
      <WapperContent>
        <StarsWrapper>
            {
              Array(5).fill('').map((_, index) => {
                if (index < score) {
                  return <FaStar key={index} color='#FFD80A' size={24}  />
                }
                return <FaStar key={index} color='#8A8632' size={24} />
              })
            }
        </StarsWrapper>
        <ClosedButton onClick={handleShowDetail} >
          <AiIcons.AiOutlineClose color='#B5B5B5' size={24} />
        </ClosedButton>
        <ProjectDetails>
          <h3>{name}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut fugit aperiam eos, non deleniti hic cum cupiditate soluta vitae ipsum aspernatur maiores veniam nisi, velit sint. Dolorem, accusantium dolores.</p>
          <p>{category}</p>
          <p>{date}</p>
        </ProjectDetails>
        <ImageGalerie>
          {
            image?.map((img, index) => {
              return <img key={index} src={img} alt={name} />
            })
          }
        </ImageGalerie>
      </WapperContent>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: #000000aa;
  display: flex;
  justify-content: center;
  align-items: center;
  `;
  const WapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #191a2a 0%, #12100e 100%);
  position: relative;
  top: 3rem;
  width: 50rem;
  height: 30rem;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1em #000000aa;
  overflow-y: auto;
  `;
  const StarsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  gap: 0.25rem;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  align-self: left;
`;
const ClosedButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: gray;
  background-color: transparent;
`;
const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 2rem;
  gap: 1rem;
`;
const ImageGalerie = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  gap: 1rem;
  img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;