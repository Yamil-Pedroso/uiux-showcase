import {  GetInTouchContainer, GetInTouchWrapper } from './styles'
import Button from '../common/buttons/Button'

const GetInTouch = () => {
  return (
    <GetInTouchContainer>
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