import { wrapperForString, generIcon } from "../wrapperForString.js"

describe("TEST: wrapper for srting", () => {

	test("wrapper for acher", () => {
		let obj = {
			name: 'Лучник',
			type: 'Bowman',
			health: 50,
			level: 1,
			attack: 40,
			defence: 10
		};

		expect(wrapperForString(obj)).toEqual('😠 Л(1) ⚔40 🛡10 ❤50');
	});

	test("wrapper for zombies", () => {
		let obj = {
			name: 'Лучник',
			type: 'Zombie',
			health: 60,
			level: 1,
			attack: 50,
			defence: 40
		};

		expect(wrapperForString(obj)).toEqual('🧟 Л(1) ⚔50 🛡40 ❤60');
	});

	test("icon generation check", () => {
		expect(generIcon('0x1F6E1')).toEqual('🛡');
	})

});
