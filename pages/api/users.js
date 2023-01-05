const mockUser = {
  gender: "male",
  name: {
    title: "mr",
    first: "brad",
    last: "gip",
  },
  location: {
    street: "somewhere",
    city: "NY",
  },
  picture: {
    large: "https://api.unsplash.com/search/photos?page=1&query=office",
  },
  nat: "IE",
};




export const getUsers = ()=>{
  return new Promise((resolve)=>{
    setTimeout(
      ()=>resolve(new Array(20).fill(mockUser)),
      1000
      );
  });
};

export default async function handler(req, res){
  const users = await getUsers();
  res.status(200).json(users);
};