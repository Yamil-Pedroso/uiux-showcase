import { FeedbacksSection, Title } from './styles'
import Cards from '../common/card/Card'
import { feedbacks, IServices } from '../../types/Types'
import { FaStarOfLife } from "react-icons/fa";
import { animationConfig, containerVariants, itemVariants } from '../../animations/variants';
import { motion } from 'framer-motion';

const FeedBack: React.FC<IServices> = () => {

  return (
  <FeedbacksSection id="feedBack">
    <Title
      style={{
        position: "relative",
      }}
    >
      <h2>Clients are always satisfied with us <span>
        <FaStarOfLife style={{
          position: "absolute",
          bottom: "4rem",
          right : "2.5rem",
        }} />
        </span></h2>
    </Title >

    <motion.div
     variants={containerVariants}
     {...animationConfig}
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
          variants={itemVariants}
          iconOne={ item.iconOne }
          rating={item.rating}
          title={item.title}
          name={item.name}
          description={item.description}
          avatar={item.avatar}
          position={item.position}
        />
    ))}

    </motion.div>
  </FeedbacksSection>
  )
}

export default FeedBack
