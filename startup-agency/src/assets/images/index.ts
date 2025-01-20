import personLap from './svg/person-lap.svg'
import plan from './png/plan.png'

export interface IImage {
    [key: string]: string
}

const images: IImage = {
    personLap,
    plan
}

export default images