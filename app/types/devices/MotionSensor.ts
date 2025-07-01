import type {BaseDevice} from "~/types/BaseDevice";
import type {PowerSupply} from "~/types/PowerSupply";
import type {Connectivity} from "~/types/Connectivity";

export class MotionSensor implements BaseDevice{
    constructor(
        public brand: string,
        public name: string,
        public website: string,
        public image: string, // URL
        public connectivity: Connectivity[],
        public powerSupply: PowerSupply[],
        public notes: string
    ) {
    }
}