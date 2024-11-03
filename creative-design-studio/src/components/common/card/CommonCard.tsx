import  { forwardRef } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ITeamCard {
  id?: number;
  avatar?: string;
  name?: string;
  position?: string;
  className?: string;
   socialNetworks?: string[] | IconType[] | React.ReactNode[];
}

// Usamos forwardRef para hacer que CommonCard sea compatible con framer-motion
const CommonCard = forwardRef<HTMLDivElement, ITeamCard>(({ id, avatar, name, position, className, socialNetworks }, ref) => {
  return (
    <div
    ref={ref} className={`container ${className}`} key={id}>
      <div className="card-content">
        <div className="avatar">
          <img src={avatar} alt={name} />
        </div>
        <div
        className="hover-name">
          {socialNetworks &&
              socialNetworks.map((Icon, index) => {
                if (typeof Icon === "function") {
                  const IconComponent = Icon as IconType;
                  return <IconComponent className="social" key={index} size={24} />;
                }
                return <span key={index}>{Icon}</span>;
              })}
        </div>
      </div>
      <h3>{name}</h3>
      <h4>{position}</h4>
    </div>
  );
});

const MotionCommonCard = motion(CommonCard);

export default MotionCommonCard;
