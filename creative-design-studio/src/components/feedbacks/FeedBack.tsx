import { FeedbacksSection, Title } from './styles'
import Cards from '../common/card/Card'
import { feedbacks, IServices } from '../../types/Types'


const FeedBack: React.FC<IServices> = () => {

  return (
  <FeedbacksSection id="feedBack">
    <Title>
      <h2>Clients are always satisfied with us <span>*</span></h2>
    </Title >

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
    {feedbacks.map((item) => (
      <Cards
        key={item.id}
        iconOne={ item.iconOne }
        rating={item.rating}
        title={item.title}
        name={item.name}
        description={item.description}
        avatar={item.avatar}
        position={item.position}
      />
    ))}

    </div>
  </FeedbacksSection>
  )
}

export default FeedBack
