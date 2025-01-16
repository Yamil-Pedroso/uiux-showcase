import React, { forwardRef } from "react";
import {
  CardContainer,
  Card,
  CardWrapper,
  IconOne,
  StarIconWrapper,
  CardAvatar,
  CardAvatarWrapper,
  TextContent,
} from "./styles";
import { IFeedbacks } from "../../../types/Types";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Cards = forwardRef<HTMLDivElement, IFeedbacks>(
  (
    { id, iconOne, rating = 0, title, name, description, avatar, position },
    ref
  ) => {
    return (
      <CardContainer ref={ref}>
        <Card key={id}>
          <CardWrapper>
            <IconOne>
              {typeof iconOne === "function"
                ? React.createElement(iconOne)
                : iconOne}
            </IconOne>
            <StarIconWrapper>
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  size={32}
                  color={index < rating ? "#000" : "#e4e4e4"}
                  className="star-icon"
                />
              ))}
            </StarIconWrapper>
            <h3>{title}</h3>
            <p>{description}</p>
            <CardAvatarWrapper>
              <CardAvatar>
                <img src={avatar} alt="avatar" />
              </CardAvatar>
              <TextContent>
                <h3>{name}</h3>
                <h4>{position}</h4>
              </TextContent>
            </CardAvatarWrapper>
          </CardWrapper>
        </Card>
      </CardContainer>
    );
  }
);

const MotionCard = motion(Cards);

export default MotionCard;
