import { NextResponse, NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(response: Response) {
  const data = await response.json();

  return NextResponse.json({ id: uuidv4(), ...data });
}

// export async function DELETE(request: NextRequest) {
//   const req = await request.json();
//   const id = req.productId;
//   console.log("api", id);
//   try {
//     if (id) {
//       return NextResponse.json({ id }, { status: 200 });
//     } else {
//       throw new Error("Error Deleting product!");
//     }
//   } catch (error) {
//     return NextResponse.json(
//       { message: (error as { message: string }).message },
//       { status: 404 }
//     );
//   }
// }
