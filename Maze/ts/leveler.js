var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log("Hello World");
        return 0;
    };
    Startup.other = function () {
        console.log("go away");
        return 0;
    };
    Startup.helo = function () {
        console.log("what's up brother");
        return 0;
    };
    Object.defineProperty(Startup.prototype, "Derp", {
        get: function () {
            return this._derp;
        },
        set: function (v) {
            this._derp = v;
        },
        enumerable: true,
        configurable: true
    });
    return Startup;
})();
