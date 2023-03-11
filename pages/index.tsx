import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images_url =
	"http://d2l56h9h5tj8ue.cloudfront.net/images/nodes/{NODE}.png";

const NODES = [
	{ name: "bone", color: "#C8B581" },
	{ name: "clay", color: "#876741" },
	{ name: "copper", color: "#E56521" },
	{ name: "essence", color: "#54D5BC" },
	{ name: "flower", color: "#F6F0F9" },
	{ name: "ice", color: "#90C3F0" },
	{ name: "iron", color: "#9E9FAD" },
	{ name: "leaf", color: "#8BBA08" },
	{ name: "magma", color: "#F14A3A" },
	{ name: "oil", color: "#262626" },
	{ name: "quartz", color: "#D476D1" },
	{ name: "salt", color: "#ACAF9F" },
	{ name: "sugar", color: "#BEBEBE" },
	{ name: "uranium", color: "#2E7237" },
	{ name: "wax", color: "#C68902" },
	{ name: "wood", color: "#9E7759" },
	{ name: "wool", color: "#9FBDB9" },
	{ name: "zinc", color: "#7892AA" },
];

export default function EmbedBuilder() {
	const [Success, setSuccess] = useState<boolean>(false);
	const [EmbedColor, setEmbedColor] = useState<string>("transparent");
	const [Node, setNode] = useState<string>();
	const [Hover, setHover] = useState<string>();
	const [Shogun, setShogun] = useState<string>();
	const [HoldTime, setHoldTime] = useState<string>();
	const [ExtraNotes, setNotes] = useState<string>();
	const [MentionRole, setMentionRole] = useState<string>();
	const [WebhookURL, setWebhookURL] = useState<string>();

	useEffect(() => {
		setEmbedColor(NODES.find((n) => n.name === Node)?.color || "");
	}, [Node]);

	function DropDownMenu() {
		return (
			<>
				<button
					id="dropdownDefaultButton"
					data-dropdown-toggle="dropdown"
					className="text-gray-600 bg-orange-400 hover:bg-orange-600 focus:outline-none font-small rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center"
					type="button"
				>
					Choose a node
					<svg
						className="w-4 h-4 ml-2"
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 9l-7 7-7-7"
						></path>
					</svg>
				</button>
				<div
					id="dropdown"
					className="z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44"
				>
					<ul
						className="py-2 text-sm text-gray-200"
						aria-labelledby="dropdownDefaultButton"
					>
						{NODES.map((node) => {
							return (
								<li
									key={node.name}
									className="flex flex-wrap justify-between cursor-pointer mb-[0.66px]"
									style={{
										backgroundColor:
											Hover == node.name ||
											Node == node.name
												? node.color
												: "",
									}}
									onMouseOver={() => setHover(node.name)}
									onMouseOut={() => setHover("")}
									onClick={() => setNode(node.name)}
								>
									<a className="block px-4 py-2">
										{node.name}
									</a>
									<Image
										width={25}
										height={25}
										src={images_url.replace(
											"{NODE}",
											node.name
										)}
										alt={node.name}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</>
		);
	}
	function TextInput(
		placeHolder: string,
		valueStr: "shogun" | "time" | "role" | "webhook",
		maxlength: number,
		style?: string
	) {
		return (
			<input
				type="text"
				defaultChecked={false}
				className={`outline-none ${style} rounded-sm bg-[#2e3136] text-white`}
				id={valueStr}
				placeholder={placeHolder}
				contentEditable={true}
				maxLength={maxlength == 0 ? undefined : maxlength}
				onChange={(ev) => {
					switch (valueStr) {
						case "shogun":
							return setShogun(ev.target.value);
						case "time":
							return setHoldTime(ev.target.value);
						case "role":
							return setMentionRole(ev.target.value);
						case "webhook":
							return setWebhookURL(ev.target.value);
						default:
							return;
					}
				}}
			/>
		);
	}

	return (
		<>
			<Head>
				<title>Announcement Webhook Sender</title>
				<link
					rel="icon"
					href="https://avatars.githubusercontent.com/u/66942330?v=4"
				/>
				<meta
					name="description"
					content="Announcement sender for karuta node holds"
				/>
			</Head>
			{Success ? (
				<div className="p-[20px] bg-green-500 text-white transition-all duration-200">
					<span
						className="ml-[15px] text-white font-bold float-right text-[22px] transition-all duration-300 hover:text-black cursor-pointer"
						onClick={(ev) =>
							ev.currentTarget.parentElement
								? (ev.currentTarget.parentElement.style.display =
										"none")
								: ""
						}
					>
						&times;
					</span>
					<strong>Success!</strong> The message was sent successfully.
				</div>
			) : (
				""
			)}
			<div className="m-[1rem] min-h-full max-w-screen lg:min-h-screen">
				<h1 className="m-[auto] mb-[3rem] sm:mb-[1rem]">
					<strong>Discord Webhook Embed Builder:</strong>
					<button
						onClick={() =>
							window.location.assign(
								"https://github.com/Noro95/webhook-node-announcement"
							)
						}
						title="visit the repo on github"
						className="float-right m-auto p-5 bg-white rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							viewBox="0 0 24 24"
						>
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
					</button>
					<br />
					<em className="text-red-500">* = REQUIRED</em>
				</h1>
				<span className="text-lg">role to mention:</span>{" "}
				{TextInput("Role ID", "role", 25, "h-auto w-max")}
				<br className="my-4" />
				<span className="text-lg">webhook url:</span>{" "}
				{TextInput("Webhook URL", "webhook", 0, "h-auto w-max")}
				<Required />
				<br className="my-4" />
				<main
					id="build"
					className="mt-[1rem] border-t-[1px] border-solid border-[rgba(0, 0, 0,.3)]"
				>
					<div className="flex flex-wrap justify-center mt-[1rem]">
						<>
							<div
								className={`rounded-md pl-3 bg-[#212325] max-w-[600px] min-h-[100px] border-[6px] border-[transparent] justify-start mb-[2rem]`}
								style={{
									borderLeftColor: EmbedColor,
								}}
							>
								<Image
									width={100}
									height={100}
									src={
										Node
											? images_url.replace("{NODE}", Node)
											: ""
									}
									alt={Node || "<insert node icon here>"}
									className="float-right rounded-lg"
								/>
								<span className="font-bold text-xl">
									KAAruta Clan has Captured the{" "}
									{DropDownMenu()}
									<Required /> Node!
								</span>
								<br />
								<br />
								<span className="text-sm">
									The node was captured by{" "}
									{TextInput(
										"Shogun ID",
										"shogun",
										25,
										"w-[250px] h-[20px]"
									)}
									<Required />.
									<br />
									You can check how many bits you get by
									typing &quot;kct&quot; for the next{" "}
									{TextInput(
										"Hold Time",
										"time",
										10,
										"w-[100px] h-[20px]"
									)}
									<Required /> hours.
									<br />
									<span className="font-bold">
										Do not accept kcs
									</span>{" "}
									while we hold the node.
									<br />
									<br />
									<textarea
										maxLength={1000}
										placeholder="Extra Notes"
										defaultChecked={false}
										rows={4}
										className="outline-none rounded-sm bg-[#2e3136] text-white resize max-w-[550px] min-w-[250px] min-h-[50px] max-h-[500px]"
										onChange={(ev) =>
											setNotes(ev.target.value)
										}
									></textarea>
								</span>
							</div>
						</>
					</div>
				</main>
				<div className="flex flex-wrap justify-center">
					<button
						className="bg-[#5865F2] rounded-md p-2 shadow-md shadow-[#5865F2]"
						onClick={async () => {
							if (!Node) return alert("Please select a node");
							if (!Shogun)
								return alert("Please set the shogun ID");
							if (!HoldTime)
								return alert("Please set the hold time");
							if (!WebhookURL)
								return alert("Please set the webhook URL");
							const res = await fetch("/api/send", {
								method: "POST",
								headers: {
									webhook: WebhookURL,
								},
								body: JSON.stringify({
									message: MentionRole
										? /<@&\d{5,25}>/g.test(MentionRole)
											? MentionRole
											: `<@&${MentionRole}>`
										: null,
									embed: {
										title: `KAAruta Clan has Captured the ${Node} Node!`,
										thumbnail: {
											url: images_url.replace(
												"{NODE}",
												Node
											),
										},
										color: HEXToDecimal(EmbedColor),
										description:
											`The node was captured by <@${Shogun}>.\nYou can check how many bits you get by typing "kct" for the next ${HoldTime} hours.\n**Do not accept kcs** while we hold the node.` +
											(ExtraNotes
												? `\n\n${ExtraNotes}`
												: ""),
									},
								}),
							});
							if (res.status != 200) {
								return alert(
									"There was an error, please try again later or contact Noro#4477 if this keeps happening.\nError code: " +
										res.status
								);
							}
							setSuccess(true);
						}}
					>
						<em>send ➡️</em>
					</button>
				</div>
			</div>
		</>
	);
}

function Required() {
	return <span className="inline-flex text-red-500">*</span>;
}

function HEXToDecimal(color: string) {
	return parseInt(color.replace("#", ""), 16);
}
