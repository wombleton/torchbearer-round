# torchbearer-round
Model a round of a torchbearer conflict.

# Usage
    var round = require('torchbearer-round');
		
		round.start();

		round.addPCs(user1, user2, ...);
		round.setCaptain(user2);

		round.addMonsters(monster1, monster2, ...);

		round.chooseWeapon(user1, weapon1);
		round.chooseWeapon(monster1, weapon2);

		round.declarePreference(user1, 'A');
		round.declarePreference(monster1, 'D');

		round.scriptPCs(action1, action2, action3);
		round.scriptMonsters(action1, action2, action3);

		round.reveal();
		round.declareDice(user1);
		round.declareHelp(user2);

		round.declareInNature(false);

		round.roll();
