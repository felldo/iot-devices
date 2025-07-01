import type {BaseDevice} from "~/types/BaseDevice";
import type {SocketType} from "~/types/SocketType";

export interface Lights extends BaseDevice {
    socket: SocketType[];
    lumens: number;
    color: string;
}