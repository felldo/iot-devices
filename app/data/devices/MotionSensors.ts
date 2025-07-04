import {MotionSensor} from "~/types/devices/MotionSensor";
import {Connectivity} from "~/types/Connectivity";
import {PowerSupply} from "~/types/PowerSupply";
import {Brand} from "~/types/Brand";

export const motionSensors: MotionSensor[] = [
    new MotionSensor(Brand.THIRD_REALITY, "Motion Sensor", "https://3reality.com/product/motion-sensor-2/", "https://3reality.com/wp-content/uploads/2024/04/%E4%B8%BB%E5%9B%BE-1000x1000.jpg", [Connectivity.Zigbee], [PowerSupply.AAA], ""),
    new MotionSensor(Brand.THIRD_REALITY, "Motion Sensor R1", "https://3reality.com/product/motion-sensor-r1/", "https://3reality.com/wp-content/uploads/2025/01/Motion-Sensor-R1-1000x1000.png", [Connectivity.Zigbee, Connectivity.WLAN], [PowerSupply.AA], ""),

    new MotionSensor(Brand.AQARA, "Motion Sensor", "https://www.aqara.com/en/product/human-motion-sensor/", "https://www.aqara.com/wp-content/uploads/2023/05/Motion-Sensor.jpg", [Connectivity.Zigbee], [PowerSupply.CR2450], ""),
    new MotionSensor(Brand.AQARA, "Motion Sensor P1", "https://www.aqara.com/en/product/motion-sensor-p1/", "", [Connectivity.Zigbee], [PowerSupply.CR2450], ""),
    new MotionSensor(Brand.AQARA, "Motion and Light Sensor P2", "https://www.aqara.com/en/product/motion-and-light-sensor-p2/", "", [Connectivity.Matter, Connectivity.Thread, Connectivity.Bluetooth], [PowerSupply.CR2450], "")
]