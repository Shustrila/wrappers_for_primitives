export const generIcon = (code) => String.fromCodePoint(code);

export const wrapperForString = (obj) => {
	let { level, name, type, attack, defence, health } = obj;
	let dynamicIcons = {
		Bowman: "0x1F620",
		Swordsman: "0x1F621",
		Magician: "0x1F9D0",
		Daemon: "0x1F620",
		Undead: "0x1F480",
		Zombie: "0x1F9DF",
	};

	return `${generIcon(dynamicIcons[type])} ${name[0]}(${level}) ${generIcon("0x2694")}${attack} ${generIcon("0x1F6E1")}${defence} ${generIcon("0x2764")}${health}`;
};
