import {  GetInTouchContainer, GetInTouchWrapper } from './styles'
import Button from '../common/buttons/Button'
import images from '../../assets/images'

interface GetInTouchProps {
   id?: string;
 }

const GetInTouch: React.FC<GetInTouchProps> = ({ id }) => {
  return (
    <GetInTouchContainer id={id}>
       <GetInTouchWrapper>
          <h2>Join us on your path to future success</h2>

          <Button 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
               hidden: { opacity: 0, y: 30 },
               visible: { opacity: 1, y: 0 },
             }}
          
            className='btn-getintouch'>
             Contact Us
          </Button>
       </GetInTouchWrapper>

        <img className='deco5' src={images.deco5} alt='get in touch' />
        <img className='deco6' src={images.deco6} alt='get in touch' />
    </GetInTouchContainer>
  )
}

export default GetInTouch
