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
} from "./styles";
import { funFacts } from "../../types/Types";

const FunFacts = () => {
  return (
    <FunFactsContainer>
      <FunFactsWrapper>
        <LeftSide>
          <CardWrapper>
            <Card>
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
                  <h2 className="title">{item1.title}</h2>
                  <p className="desc">{item1.description}</p>
                  <Result>
                    {item1.result?.map((item2, idx) => {
                      return (
                        <ResultContent key={idx}
                          style={{
                            marginLeft: idx > 0 ? "8rem" : "0",
                          }}
                        >
                          <h2>{item1.number}</h2>
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
