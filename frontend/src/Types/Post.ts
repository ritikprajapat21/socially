export default interface Post {
  id: number;
  user: {
    username: string;
    image: string;
    name: string;
  };
  content: {
    desc?: string;
    image?: string;
  };
}
