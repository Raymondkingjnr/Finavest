import { amountWithdrew } from "@/libs/api";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Authentification Required", { status: 500 });
  }

  const { amount, token } = await req.json();

  if (!amount || !token) {
    return new NextResponse("All fields Required", { status: 400 });
  }

  const userId = session.user.id;

  try {
    let data;

    data = await amountWithdrew({
      userId,
      amount,
      token,
    });

    return NextResponse.json(data, { status: 200, statusText: "successfull" });
  } catch (error: any) {
    console.log("Error Updating", error);
    return new NextResponse(`unable to send deposit`, {
      status: 400,
    });
  }
}
