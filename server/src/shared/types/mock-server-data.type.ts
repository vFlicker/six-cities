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
    username: string;
    email: string;
    avatarUrl: string;
  }[];
};
