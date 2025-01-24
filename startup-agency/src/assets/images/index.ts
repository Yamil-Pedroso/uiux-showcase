import personLap from './svg/person-lap.svg'
import plan from './png/plan.png'
import choosePlan from './png/choose-plan.png'
import deco1 from './svg/deco1.svg'
import deco2 from './svg/deco2.svg'
import deco3 from './svg/deco3.svg'
import deco4 from './svg/deco4.svg'
import deco5 from './svg/deco5.svg'
import deco6 from './svg/deco6.svg'
import toolTipChar from './svg/tooltip-char.svg'
import charFront from './svg/char-front.svg'

export interface IImage {
    [key: string]: string
}

const images: IImage = {
    personLap,
    plan,
    choosePlan,
    deco1,
    deco2,
    deco3,
    deco4,
    deco5,
    deco6,
    toolTipChar,
    charFront,
}

export default images
