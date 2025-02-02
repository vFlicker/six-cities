export type MockServerData = {
  titles: string[];
  descriptions: string[];
  comments: string[];
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
    avatar: string;
  }[];
};
