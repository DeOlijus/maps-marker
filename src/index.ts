/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
console.log(`hi there`);
console.log(user);
console.log(company);

const customMap = new CustomMap('map');

/* bad implementation 
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
*/

customMap.addMarker(user);
customMap.addMarker(company); // need to change company.companyLocation to location
