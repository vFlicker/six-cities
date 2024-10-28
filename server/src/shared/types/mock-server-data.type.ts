export type MockServerData = {
  titles: string[];
  descriptions: string[];
  cities: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
    };
  }[];
  amenities: string[];
  hosts: {
    name: string;
    email: string;
    avatarUrl: string;
  }[];
};
