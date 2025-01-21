import personLap from './svg/person-lap.svg'
import plan from './png/plan.png'
import choosePlan from './png/choose-plan.png'

export interface IImage {
    [key: string]: string
}

const images: IImage = {
    personLap,
    plan,
    choosePlan
}

export default images
