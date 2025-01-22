import { useState, useEffect, useRef } from "react";
import {
  FunFactsContainer,
  FunFactsWrapper,
  LeftSide,
  RightSide,
  Card,
  CardWrapper,
  RightSideContent,
  ResultContent,
  ResultContentWrapper,
  Result,
  Content,
} from "./styles";
import { funFacts } from "../../types/Types";
import { motion } from "framer-motion";

interface FunFactsProps {
  id?: string;
}

const FunFacts: React.FC<FunFactsProps> = ({ id }) => {
  const [startCount, setStartCount] = useState(false);
  const [experience, setExperience] = useState(0);
  const [activeMonthtlyUsers, setActiveMonthtlyUsers] = useState(0);
  const [projects, setProjects] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
     const currentStatRef = statRef.current;

     const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                 setStartCount(true);
              } else {
                setStartCount(false);
                setExperience(0);
                setActiveMonthtlyUsers(0);
                setProjects(0);
              }
            });
         },
          { threshold: 0.5 }
     );

     if (currentStatRef) {
       observer.observe(currentStatRef);
     }

     return () => {
      if(currentStatRef) {
        observer.unobserve(currentStatRef);
      }
     }
  }, []);
   
  useEffect(() => {
    if (startCount) {
      let experienceCount = 0;
      let activeMonthtlyUsersCount = 0;
      let projectsCount = 0;
  
      const maxExperience = 35;
      const maxActiveMonthlyUsers = 84;
      const maxProjects = 20;
  
      let experienceTimeout: ReturnType<typeof setTimeout>;
      let usersTimeout: ReturnType<typeof setTimeout>;
      let projectsTimeout: ReturnType<typeof setTimeout>;
  
      const updateExperience = () => {
        if (experienceCount < maxExperience) {
          experienceCount += 1;
          setExperience(experienceCount);
  
          const delay = experienceCount >= 30 ? 200 : 100; 
          experienceTimeout = setTimeout(updateExperience, delay);
        }
      };
  
      const updateActiveUsers = () => {
        if (activeMonthtlyUsersCount < maxActiveMonthlyUsers) {
          activeMonthtlyUsersCount += 2;
          setActiveMonthtlyUsers(activeMonthtlyUsersCount);
  
          const delay =
            activeMonthtlyUsersCount >= maxActiveMonthlyUsers - 10 ? 150 : 100; 
          usersTimeout = setTimeout(updateActiveUsers, delay);
        }
      };
  
      const updateProjects = () => {
        if (projectsCount < maxProjects) {
          projectsCount += 1;
          setProjects(projectsCount);
  
          const delay = projectsCount >= maxProjects - 5 ? 200 : 100; 
          projectsTimeout = setTimeout(updateProjects, delay);
        }
      };
  
      updateExperience();
      updateActiveUsers();
      updateProjects();
  
      return () => {
        clearTimeout(experienceTimeout);
        clearTimeout(usersTimeout);
        clearTimeout(projectsTimeout);
      };
    }
  }, [startCount]);
  
  
  return (
    <FunFactsContainer id={id} ref={statRef}>
      <FunFactsWrapper>
        <LeftSide>
          <CardWrapper>
            <Card
                as={motion.div}
                initial={{ rotate: 45 }} // Posición inicial inclinada hacia arriba
                whileInView={{ rotate: -5 }} // Estado final bien posicionado
                viewport={{ once: false, amount: 0.5 }} // Controla cuándo se activa la animación
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
                style={{
                  transformOrigin: "top left", // Establece el pivote en la esquina superior izquierda
                }}
            >
              <img
                src="https://img.freepik.com/free-photo/coworkers-team-working-brainstorming-concept_329181-12060.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid "
                alt="team member"
              />
            </Card>
          </CardWrapper>
        </LeftSide>
        <RightSide>
          <RightSideContent>
            {funFacts.map((item1, idx) => {
              return (
                <ResultContentWrapper key={idx}>
                  <Content>
                    <h2 className="title">{item1.title}</h2>
                    <p className="desc">{item1.description}</p>
                  </Content>
                  <Result>
                    {item1.result?.map((item2, idx) => {
                      return (
                        <ResultContent
                          key={idx}
                          style={{
                            marginLeft: idx > 0 ? "8rem" : "0",
                          }}
                        >
                          <h2>{
                            item2.includes("Years") ? <span>{experience}+</span> :
                            item2.includes("Active") ? <span>{activeMonthtlyUsers}k</span> :
                            item2.includes("Projects") ? <span>{projects}k</span>: 0
                            }</h2>
                          <p>{item2}</p>
                        </ResultContent>
                      );
                    })}
                  </Result>
                </ResultContentWrapper>
              );
            })}
          </RightSideContent>
        </RightSide>
      </FunFactsWrapper>
    </FunFactsContainer>
  );
};

export default FunFacts;
