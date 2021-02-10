(function(KoreSDK){
function koreGenerateUUID() {
                var d = new Date().getTime();
                if (window.performance && typeof window.performance.now === "function") {
                d += performance.now(); //use high-precision timer if available
                }
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
                }
    var KoreSDK=KoreSDK||{};

    var botOptionsWiz = {};
    botOptionsWiz.logLevel = 'debug';
    botOptionsWiz.koreAPIUrl = "https://bots.kore.ai";

    botOptionsWiz.JWTUrl = "https://demo.kore.net/users/sts";
    botOptionsWiz.userIdentity = koreGenerateUUID();
    botOptionsWiz.botInfo = { name: "TIAA Mockbot", "_id": "st-0517c9c7-310a-5147-96ed-bfcb42b74d7f" }; // bot name is case sensitive
    botOptionsWiz.clientId = "cs-b8123a13-dc23-5e75-9a20-d93ca235016c";
    botOptionsWiz.clientSecret = "yoDnPH1ONkDWGkWa0BsY+tecGGO5a5NAeYpLEbtIWf0=";

    var widgetsConfig = {
        botOptions: botOptionsWiz
    };
    
    KoreSDK.widgetsConfig=widgetsConfig
})(window.KoreSDK);