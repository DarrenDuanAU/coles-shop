import Footer from "@/components/Footer";
import SectionNav from "@/components/SectionNav";

export default function Home() {
  return (
    <div className='pt-36 h-[2000px]'>
      <SectionNav />
      <Footer />
    </div>
  )
}


// import { NextApiRequest, NextApiResponse } from 'next';
// import { sql } from '@vercel/postgres';
 
// export default async function handler(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   try {
//     const result =
//       await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
//     return response.status(200).json({ result });
//   } catch (error) {
//     return response.status(500).json({ error });
//   }
// }