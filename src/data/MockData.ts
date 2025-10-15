export interface Barn {
  namn: string;
  ålder: string;
  hårfärg: string;
  ögonfärg: string;
  snutte: string;
  förmåga: string;
}

export interface Van extends Barn {
  tillhör?: string;
}

export interface MockDataType {
  barn: Barn[];
  vänner: Van[];
}

const mockData: MockDataType = {
  barn: [],
  vänner: [],
};

export const addBarn = (barn: Barn) => {
  mockData.barn.push(barn);
  /*  console.log("Barn tillagd:", barn); */
  console.log("Nuvarande mockData:", mockData);
};

export const addVan = (vän: Van) => {
  mockData.vänner.push(vän);
  /*  console.log("Osynlig vän tillagd:", vän); */
  console.log("Nuvarande mockData:", mockData);
};

export default mockData;
