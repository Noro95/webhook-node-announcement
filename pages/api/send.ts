import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return res.status(405).json({ statusText: "Method Not Allowed" });
	}
	if (!req.headers["webhook"] || typeof req.headers["webhook"] !== "string")
		return res.status(400).json({ statusText: "Bad Request" });
	const body = JSON.parse(req.body);

	const resData = await fetch(req.headers["webhook"] + "?wait=true", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			username: "KAAruta",
			avatar_url:
				"https://cdn.discordapp.com/app-icons/646937666251915264/0e54d87446f106d1fd58385295ae9deb.png",
			allowed_mentions: { parse: ["roles"] },
			content: body["message"],
			embeds: [body["embed"]],
		}),
	});

	if (resData.status !== 200) {
		return res
			.status(resData.status)
			.json({ statusText: resData.statusText });
	}
	return res.status(200).json({
		statusText: "Success",
	});
}
