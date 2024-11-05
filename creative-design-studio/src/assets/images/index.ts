import teamImgOne from './team/img-1.png';
import teamImgTwo from './team/img-2.jpg';
import teamImgThree from './team/img-3.jpg';
import teamImgFour from './team/img-4.jpg';
import curveArrow from './png/curve-arrow.png';
import rule from './png/rule.png';

interface ITeam {
    [key: string]: string; 
}

const images: ITeam = {
    teamImgOne,
    teamImgTwo,
    teamImgThree,
    teamImgFour,
    curveArrow,
    rule,
};

export default images;