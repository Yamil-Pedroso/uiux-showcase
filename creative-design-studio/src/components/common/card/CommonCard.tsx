import React from "react";

interface ITeamCard {
  id?: number;
  avatar?: string;
  name?: string;
  position?: string;
  className?: string; 
}

const CommonCard: React.FC<ITeamCard> = ({ id, avatar, name, position, className }) => {
  return (
    <div className={`container ${className}`} key={id}>
      <div className="card-content">
        <div className="avatar">
          <img src={avatar} alt={name} />
        </div>
      </div>
        <h3>{name}</h3>
        <h4>{position}</h4>
    </div>
  );
};

export default CommonCard;
