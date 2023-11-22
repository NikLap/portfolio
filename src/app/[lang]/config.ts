import { z } from "zod";

const envVariables = z.object({
	BASE_URL: z.string(),
	NEXT_PUBLIC_DEV_SIGN_URL: z.string(),
	SMTP_HOST: z.string(),
	SMPT_USERNAME: z.string(),
	SMPT_PASSWORD: z.string(),
	CONTACT_RECIPIENT: z.string(),
});

export default envVariables.parse(process.env);
