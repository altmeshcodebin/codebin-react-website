import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import {
  faMobileAlt,
  faLaptopCode,
  faLaptop,
  faDrawPolygon,
  faShoppingCart,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import MobileFeat from "../assets/img/services/MobileFeat.jpg";
import SoftwareFeat from "../assets/img/services/SoftwareFeat.jpg";
import WebFeat from "../assets/img/services/WebFeat.jpg";
import UIFeat from "../assets/img/services/UIFeat.jpg";
import AndroidFeat from "../assets/img/services/AndroidFeat.jpg";
import EcommFeat from "../assets/img/services/EcommFeat.jpg";
import FactoryFeat from "../assets/img/services/FactoryFeat.jpg";

export const ServiceData = [
  {
    id: 1,
    serviceIcon: faMobileAlt,
    serviceImage: MobileFeat,
    serviceName: "Mobile & Web Development",
    serviceDesc:
      "Complete application development solutions for Android, iOS and web with scalable backends",
  },
  {
    id: 2,
    serviceIcon: faLaptopCode,
    serviceImage: SoftwareFeat,
    serviceName: "Software development",
    serviceDesc:
      "We build customised software for small and medium businesses to serve tailored needs and make work easier",
  },
  {
    id: 3,
    serviceIcon: faLaptop,
    serviceImage: WebFeat,
    serviceName: "Progressive Web Apps",
    serviceDesc:
      "Web based applications which behave like native applications without needing to install",
  },
  {
    id: 4,
    serviceIcon: faDrawPolygon,
    serviceImage: UIFeat,
    serviceName: "UI & Prototyping",
    serviceDesc:
      "Creating user interfaces and user experience with Google Material design principles and functional prototypes",
  },
  {
    id: 5,
    serviceIcon: faAndroid,
    serviceImage: AndroidFeat,
    serviceName: "Android and iOS Native applications",
    serviceDesc:
      "We build highly scalable and performant RN-Redux apps with almost 90% common code for iOS and Android",
  },
  {
    id: 6,
    serviceIcon: faShoppingCart,
    serviceImage: EcommFeat,
    serviceName: "E-Commerce",
    serviceDesc: "Fully integrated mobile and web-based e-commerce solutions",
  },
  {
    id: 7,
    serviceIcon: faIndustry,
    serviceImage: FactoryFeat,
    serviceName: "Manufacturing Automation",
    serviceDesc: "Custom IoT solutions with BLE communication",
  },
];
