import config from "@/app/[lang]/config";
import mailTransport from "@/server/mail-transport";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const { CONTACT_RECIPIENT, BASE_URL } = config;

export const contactSchema = z.object({
	name: z.string().nonempty(),
	email: z.string().email(),
	message: z.string().nonempty(),
});
export type ContactSchema = z.infer<typeof contactSchema>;

export async function POST(req: NextRequest) {
	const reqData = await req.json();
	const { name, email, message } = reqData;
	try {
		contactSchema.parse({ name, email, message });
		await mailTransport.sendMail({
			from: email,
			to: CONTACT_RECIPIENT,
			subject: `Contact request (from ${BASE_URL})`,
			text: message,
		});
		return NextResponse.json("Success");
	} catch (e) {
		if (e instanceof z.ZodError) {
			return NextResponse.json((e as z.ZodError).format(), { status: 400 });
		}
		console.error(e);
		return NextResponse.json("An unknown error occurred sending the mail", { status: 500 });
	}
}
