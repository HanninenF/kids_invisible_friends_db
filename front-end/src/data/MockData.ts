import type { MockDataType } from "../type/DataType"



// Lägg till “låtsasdata” här
const MockData: MockDataType = {
  barn: [
    {
      namn: "Lisa",
      ålder: "7",
      hårfärg: "Brun",
      ögonfärg: "Grön",
      snutte: "Nalle",
      förmåga: "Superfantasi",
    },
    {
      namn: "Oskar",
      ålder: "6",
      hårfärg: "Blond",
      ögonfärg: "Blå",
      snutte: "Filt",
      förmåga: "Osynlig kraft",
    },
  ],
  vänner: [
    {
      namn: "Blubb",
      ålder: "3",
      hårfärg: "Grön fluff",
      ögonfärg: "Lila",
      snutte: "Trollstav",
      förmåga: "Telepati",
      tillhör: "Lisa",
    },
    {
      namn: "Musse",
      ålder: "300",
      hårfärg: "Blå fluff",
      ögonfärg: "Lila",
      snutte: "Trollstav",
      förmåga: "Telepati",
      tillhör: "Oskar",
    },
  ],
};

/* export const addBarn = (barn: Barn) => {
  mockData.barn.push(barn);
  console.log("Nuvarande mockData:", mockData);
};

export const addVan = (vän: Van) => {
  mockData.vänner.push(vän);
  console.log("Nuvarande mockData:", mockData);
}; */

export default MockData;
