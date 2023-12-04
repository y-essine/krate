// // src/Utils/Auth.ts

// import { parse, serialize } from 'cookie';
// import { NextApiRequest } from 'next';

// export const isAuthenticated = (req: NextApiRequest): boolean => {
//   const cookies = parse(req.headers.cookie || '');
//   const accessToken = cookies.accessToken;

//   return !!accessToken;
// };
