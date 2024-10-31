import { WorkProcessSection, WorkingProcessContainer, BrainStormingWrapper, BrainStorming, Title } from './styles'
import { brainStorming, workProcessing } from '../../types/Types'

const WorkProcess = () => {
  return (
     <WorkProcessSection id="workProcess">
       <WorkingProcessContainer>
        {workProcessing.map((item, index) => (
          <Title key={index}>
            <p>{item.content}</p>
          </Title>
        ))}
       </WorkingProcessContainer>

        <BrainStorming>
            {brainStorming.map((item) => (
              <BrainStormingWrapper key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </BrainStormingWrapper>
            ))}
        </BrainStorming>
     </WorkProcessSection>

  )
}

export default WorkProcess
