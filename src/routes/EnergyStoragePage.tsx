import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ServiceTitle } from '../components/services/ServiceTitle'


export const EnergyStoragePage = () => {
  return (
      <StyledPage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ServiceTitle
          title='Energy Storage'
        />
      </StyledPage>
  )
}

const StyledPage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;