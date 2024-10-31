import teamImgOne from './team/img-1.png';
import teamImgTwo from './team/img-2.jpg';
import teamImgThree from './team/img-3.jpg';
import teamImgFour from './team/img-4.jpg';
import curveArrow from './png/curve-arrow.png';

interface ITeam {
    [key: string]: string; 
}

const imges: ITeam = {
    teamImgOne,
    teamImgTwo,
    teamImgThree,
    teamImgFour,
    curveArrow
};

export default imges;