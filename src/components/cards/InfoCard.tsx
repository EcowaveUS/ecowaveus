import styled from 'styled-components';

interface Props {
  title: string;
  content?: string;
  icon: JSX.Element;
}
interface StyledProps {
  content?: string;
}
export const InfoCard: React.FC<Props> = ({
  title,
  content,
  icon
}) => {
  return (
    <CardWrapper>
      {icon}
      <div>
        <Title>{title}</Title>
        <Text content={content}>{content}</Text>
      </div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 14px;
`
const Title = styled.p`
  color: #1C1F35;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 135.023%; /* 18.903px */
`

const Text = styled.p<StyledProps>`
  color: #1C1F35;
  font-family: Inter;
  font-size: ${({ content }) => content === '(978) 500 - 4081' ? '18px' : '14px'};
  font-style: normal;
  font-weight: ${({ content }) => content === '(978) 500 - 4081' ? '700' : '500'};
  line-height: 135.023%; /* 18.903px */
  text-decoration: ${({ content }) => content === 'info@ecowaveus.com' ? 'underline' : 'none'};
`
