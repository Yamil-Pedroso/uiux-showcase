import { useState } from 'react'
import { WorkProcessSection, WorkingProcessContainer, BrainStormingWrapper, BrainStorming, Title, Toggle } from './styles'
import { brainStorming, workProcessing } from '../../types/Types'
import { IoIosArrowDown } from "react-icons/io";
import { theme } from '../../styles/theme';

const WorkProcess = () => {
  const [ togleIndex, setTogleIndex ] = useState<number | null>(null)

  const handleTogle = (index: number) => {
    setTogleIndex(index === togleIndex ? null : index)
  }

  return (
     <WorkProcessSection id="workProcess">
       <WorkingProcessContainer>
        {workProcessing.map((item, index) => (
          <Title key={index}>
            <p>{item.content}</p>
          </Title>
        ))}
       </WorkingProcessContainer>

        <BrainStorming
          style={{

          }}
        >
        {brainStorming.map((item, index) => (
          <BrainStormingWrapper key={item.id} style={{
            background: togleIndex === index ? `${theme.colors.bgGreen}` : `#fff`,
            boxShadow: togleIndex === index ? `3px 3px 0 #000` : `none`,
          }}>
            <Toggle>
              <h3>{item.title}</h3>
              <IoIosArrowDown onClick={() => handleTogle(index)} style={{ cursor: "pointer" }} />
            </Toggle>
            <div
             style={{
              maxHeight: togleIndex === index ? "100px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
            >
              <p>{item.description}</p>
            </div>
          </BrainStormingWrapper>
        ))}
        </BrainStorming>
     </WorkProcessSection>

  )
}

export default WorkProcess
