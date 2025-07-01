import type {Connectivity} from "~/types/Connectivity";
import type {PowerSupply} from "~/types/PowerSupply";

export interface BaseDevice {
    brand: string;
    name: string;
    website: string;
    //type: string;
    image: string; // URL
    //discontinued: boolean;
    connectivity: Connectivity[];
    powerSupply: PowerSupply[];
    notes: string;
}