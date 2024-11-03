import  React, { forwardRef } from "react";
import { CardContainer, Card } from "./styles"
import { IFeedbacks } from "../../../types/Types"
import { FaStar } from "react-icons/fa"
import { motion } from "framer-motion";

const Cards = forwardRef<HTMLDivElement, IFeedbacks>(({
  id,
  iconOne,
  rating = 0,
  title,
  name,
  description,
  avatar,
  position,
}, ref) => {
  return (
    <CardContainer
     ref={ref}
    >
      <Card key={id}>
        <div
          style={{
            padding: "2rem",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "1rem", color: "black" }}>
            {typeof iconOne === "function" ? React.createElement(iconOne) : iconOne}
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} size={32} color={index < rating ? "#000" : "#e4e4e4"} />
            ))}
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div
            style={{
              display: "flex",

            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover"

                 }}
              src={avatar} alt="" />
            </div>
            <h3>{name}</h3>
            <h4>{position}</h4>
          </div>

        </div>
      </Card>
    </CardContainer>
  )
} )

const MotionCard = motion(Cards)

export default MotionCard
