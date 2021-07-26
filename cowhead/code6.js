gdjs.ScreamCode = {};

gdjs.ScreamCode.conditionTrue_0 = {val:false};
gdjs.ScreamCode.condition0IsTrue_0 = {val:false};
gdjs.ScreamCode.condition1IsTrue_0 = {val:false};


gdjs.ScreamCode.eventsList0 = function(runtimeScene) {

{


gdjs.ScreamCode.condition0IsTrue_0.val = false;
{
gdjs.ScreamCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ScreamCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "nmh_scream1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wait");
}}

}


{


gdjs.ScreamCode.condition0IsTrue_0.val = false;
{
gdjs.ScreamCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "wait");
}if (gdjs.ScreamCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.ScreamCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.ScreamCode.eventsList0(runtimeScene);
return;

}

gdjs['ScreamCode'] = gdjs.ScreamCode;
