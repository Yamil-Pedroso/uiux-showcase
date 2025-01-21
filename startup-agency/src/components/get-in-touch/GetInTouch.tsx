import {  GetInTouchContainer, GetInTouchWrapper } from './styles'
import Button from '../common/buttons/Button'

interface GetInTouchProps {
   id?: string;
 }

const GetInTouch: React.FC<GetInTouchProps> = ({ id }) => {
  return (
    <GetInTouchContainer id={id}>
       <GetInTouchWrapper>
          <h2>Join us on your path to future success</h2>

          <Button className='btn-getintouch'>
             Contact Us
          </Button>
       </GetInTouchWrapper>
    </GetInTouchContainer>
  )
}

export default GetInTouch
