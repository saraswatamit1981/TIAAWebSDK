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
    var botOptions = {};
    botOptions.logLevel = 'debug';
    botOptions.koreAPIUrl = "https://bots.kore.ai/api/";
    botOptions.koreSpeechAPIUrl = "";//deprecated
    botOptions.koreAnonymousFn = koreAnonymousFn;
    botOptions.recorderWorkerPath = '../libs/recorderWorker.js';

    botOptions.JWTUrl = "https://demo.kore.net/users/sts";;
    botOptions.userIdentity = koreGenerateUUID();
    botOptions.botInfo = { name: "TIAA Mockbot", "_id": "st-0517c9c7-310a-5147-96ed-bfcb42b74d7f" }; // bot name is case sensitive
    botOptions.clientId = "cs-b8123a13-dc23-5e75-9a20-d93ca235016c";
    botOptions.clientSecret = "yoDnPH1ONkDWGkWa0BsY+tecGGO5a5NAeYpLEbtIWf0=";
    
    var chatConfig={
        botOptions:botOptions,
        allowIframe: false, 			// set true, opens authentication links in popup window, default value is "false"
        isSendButton: false, 			// set true, to show send button below the compose bar
        isTTSEnabled: false,			// set true, to hide speaker icon
        isSpeechEnabled: false,			// set true, to hide mic icon
        allowGoogleSpeech: true,		// set true, to use Google speech engine instead KORE.AI engine.This feature requires valid Google speech API key. (Place it in 'web-kore-sdk/libs/speech/key.js')
        allowLocation: true,			// set false, to deny sending location to server
        loadHistory: true,				// set true to load recent chat history
        messageHistoryLimit: 10,		// set limit to load recent chat history
        autoEnableSpeechAndTTS: false, 	// set true, to use talkType voice keyboard.
        graphLib: "d3" ,				// set google, to render google charts.This feature requires loader.js file which is available in google charts documentation.
        googleMapsAPIKey:"",
		minimizeMode:false              // set true, to show chatwindow in minized mode 
    };
     /* 
        allowGoogleSpeech will use Google cloud service api.
        Google speech key is required for all browsers except chrome.
        On Windows 10, Microsoft Edge will support speech recognization.
     */

    KoreSDK.chatConfig=chatConfig
})(window.KoreSDK);