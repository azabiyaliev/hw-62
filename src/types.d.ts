interface ICountry {
  name: string;
  alpha3Code: string;
}

interface ICountryMutation {
  name: string;
  alpha3Code: string;
  capital: string;
  population: number;
  flag: string;
  borders: string[];
}

interface IMessage {
  _id?: string;
  message: string;
  author: string;
  datetime?: string;
}
