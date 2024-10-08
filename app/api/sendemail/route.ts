import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { name, email, phone_number, message, amount } = await req.json();

    try {
      await sendgrid.send({
        // to: "azhr999990000@gmail.com",
        to: email,
        from: "azharkhan.work101@gmail.com",
        subject: "Booking Recived From User & Here Is The User Credentails",
        html: `
        <br/>
          <p><strong>Name:</strong> ${name}</p>
          <br/>
          <p><strong>Email:</strong> ${email}</p>
          <br/>
          <p><strong>Phone Number:</strong> ${phone_number}</p>
          <br/>
          <p><strong>Message:</strong> ${message}</p>
          <br/>
          <br/>
          <p><strong>Amount:</strong> ${amount}</p>
          <br/>
          
        `,
      });

      return NextResponse.json({ sent: true }, { status: 200 });
    } catch (error) {
      console.error(error);

      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";

      return NextResponse.json(
        { sent: false, error: errorMessage },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
}
