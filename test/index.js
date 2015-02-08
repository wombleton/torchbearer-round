var assert = require('assert'),
  tbRound = require('../index.js');

describe('torchbearer-round', function() {
  describe('#create', function() {
    it('should return an empty object', function() {
      assert.deepEqual(tbRound.create(), {});
    });
  });

  describe('#addPlayer', function() {
    it('should return an object when called', function() {
      var round = tbRound.addPlayer({}, {});

      assert.equal(round, '[object Object]');
    });
    it('should add op to operations array', function() {
      var round = tbRound.addPlayer({}, {});

      assert.ok(Array.isArray(round.operations));
      assert.deepEqual(round.operations[0], {
        p: ['players', 0],
        li: {}
      });
    });
    it('should add a players list', function() {
      var round = tbRound.addPlayer({}, {});

      assert.ok(Array.isArray(round.players));
    });
    it('should have two players if added twice', function() {
      var round = tbRound.addPlayer({}, {});
      round = tbRound.addPlayer(round, {});

      assert.equal(round.players.length, 2);
    });
  });

  describe('#addMonster', function() {
    it('should add a monsters list', function() {
      var round = tbRound.addMonster({}, {});

      assert.ok(Array.isArray(round.monsters));
    });
    it('should have two monsters if added twice', function() {
      var round = tbRound.addMonster({}, {});
      round = tbRound.addMonster(round, {});

      assert.equal(round.monsters.length, 2);
    });
  });
});
