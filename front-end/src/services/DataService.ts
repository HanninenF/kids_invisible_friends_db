import type { MockDataType, Barn, Van } from "../type/DataType";
import mockData from "../data/MockData";

// använder just nu den mockData.
let currentData: MockDataType = { ...mockData };

// 1. Hämta mockDat (simulerar ett API-anrop)
export const getData = async (): Promise<MockDataType> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(currentData), 300);
  });
};

//  2. Lägg till barn
export const addBarn = async (barn: Barn): Promise<Barn> => {
  currentData = {
    ...currentData,
    barn: [...currentData.barn, barn],
  };
  return barn;
};

//  3. Lägg till vän
export const addVan = async (vän: Van): Promise<Van> => {
  currentData = {
    ...currentData,
    vänner: [...currentData.vänner, vän],
  };
  return vän;
};
