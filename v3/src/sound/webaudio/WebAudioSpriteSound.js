var Class = require('../../utils/Class');
var WebAudioSound = require('./WebAudioSound');
var WebAudioSpriteSound = new Class({
    Extends: WebAudioSound,
    initialize: function WebAudioSpriteSound(manager, key, config) {
        if (config === void 0) { config = {}; }
        WebAudioSound.call(this, manager, key, config);
        /**
         * Local reference to 'spritemap' object form json file generated by audiosprite tool.
         *
         * @property {object} spritemap
         */
        this.spritemap = manager.game.cache.json.get(key).spritemap;
        for (var markerName in this.spritemap) {
            this.addMarker({
                name: markerName,
                start: this.spritemap[markerName].start,
                duration: this.spritemap[markerName].end - this.spritemap[markerName].start,
                config: config
            });
        }
    }
});
module.exports = WebAudioSpriteSound;