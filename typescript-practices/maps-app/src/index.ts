import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();
const marker = new CustomMap("map");
marker.getMarker(user);
marker.getMarker(company);
