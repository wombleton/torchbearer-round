var json = require('ot-json0').type,
    _ = require('lodash');

/**
 * Apply operations
 * @param {Object} round
 * @param {Object} ops...
 */
function applyOps(round) {
  var ops = _.rest(_.toArray(arguments));

  round.operations = round.operations || [];
  round.operations.push.apply(round.operations, ops);

  return json.apply(round, ops);
}

module.exports = {
  /**
   * Create a new round
   * @return {Object} round
   */
  create: function() {
    return {};
  },
  /**
   * Add a player to the round
   * @param {Object} round
   * @param {Object} player...
   * @return {Object} round
   */
  addPlayer: function(round, player) {
    var type = require('ot-json0'),
      op;

    // if no players, assign it
    round.players = round.players || [];

    op = {
      p: ['players', round.players.length ],
      li: player
    };

    return applyOps(round, op);
  },
  /**
   * Add a monster to the round
   * @param {Object} round
   * @param {Object} monster
   * @return {Object} round
   */
  addMonster: function(round, monster) {
    var type = require('ot-json0'),
      op;

    // if no monster, assign it
    round.monsters = round.monsters || [];

    op = {
      p: ['monsters', round.monsters.length ],
      li: monster
    };

    return applyOps(round, op);
  }
};
