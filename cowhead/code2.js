gdjs.Level_321Code = {};
gdjs.Level_321Code.GDMiselium_95GrassObjects1= [];
gdjs.Level_321Code.GDMiselium_95GrassObjects2= [];
gdjs.Level_321Code.GDMiselium_95GrassObjects3= [];
gdjs.Level_321Code.GDMiselium_95DirtObjects1= [];
gdjs.Level_321Code.GDMiselium_95DirtObjects2= [];
gdjs.Level_321Code.GDMiselium_95DirtObjects3= [];
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects3= [];
gdjs.Level_321Code.GDSignObjects1= [];
gdjs.Level_321Code.GDSignObjects2= [];
gdjs.Level_321Code.GDSignObjects3= [];
gdjs.Level_321Code.GDBackgroundObjects1= [];
gdjs.Level_321Code.GDBackgroundObjects2= [];
gdjs.Level_321Code.GDBackgroundObjects3= [];
gdjs.Level_321Code.GDlook_95atObjects1= [];
gdjs.Level_321Code.GDlook_95atObjects2= [];
gdjs.Level_321Code.GDlook_95atObjects3= [];
gdjs.Level_321Code.GDSpikesObjects1= [];
gdjs.Level_321Code.GDSpikesObjects2= [];
gdjs.Level_321Code.GDSpikesObjects3= [];
gdjs.Level_321Code.GDdiamondObjects1= [];
gdjs.Level_321Code.GDdiamondObjects2= [];
gdjs.Level_321Code.GDdiamondObjects3= [];
gdjs.Level_321Code.GDTouched_95DiamondObjects1= [];
gdjs.Level_321Code.GDTouched_95DiamondObjects2= [];
gdjs.Level_321Code.GDTouched_95DiamondObjects3= [];
gdjs.Level_321Code.GDspikes_95aheadObjects1= [];
gdjs.Level_321Code.GDspikes_95aheadObjects2= [];
gdjs.Level_321Code.GDspikes_95aheadObjects3= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.Level_321Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getY() < 540 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Level_321Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects2[0].getPointY("")), 0.05), "", 0);
}}

}


{

gdjs.Level_321Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getX() < 960 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 960, "", 0);
}}

}


{

gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getX() >= 960 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getX() <= 6528 - 960 ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), 0.5), "", 0);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.Level_321Code.GDSignObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.Level_321Code.GDSignObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDspikes_9595aheadObjects1Objects = Hashtable.newFrom({"spikes_ahead": gdjs.Level_321Code.GDspikes_95aheadObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDspikes_9595aheadObjects1Objects = Hashtable.newFrom({"spikes_ahead": gdjs.Level_321Code.GDspikes_95aheadObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSpikesObjects1Objects = Hashtable.newFrom({"Spikes": gdjs.Level_321Code.GDSpikesObjects1});gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{

gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_321Code.GDSpikesObjects1.createFrom(runtimeScene.getObjects("Spikes"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSpikesObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setX(540);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 540, "", 0);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDdiamondObjects2Objects = Hashtable.newFrom({"diamond": gdjs.Level_321Code.GDdiamondObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDdiamondObjects1Objects = Hashtable.newFrom({"diamond": gdjs.Level_321Code.GDdiamondObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wait");
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "wait");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{

gdjs.Level_321Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_321Code.GDdiamondObjects2.createFrom(runtimeScene.getObjects("diamond"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDdiamondObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDTouched_95DiamondObjects2.createFrom(runtimeScene.getObjects("Touched_Diamond"));
/* Reuse gdjs.Level_321Code.GDdiamondObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDTouched_95DiamondObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDTouched_95DiamondObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDdiamondObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDdiamondObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "wait");
}}

}


{

gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_321Code.GDdiamondObjects1.createFrom(runtimeScene.getObjects("diamond"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDdiamondObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, true, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDTouched_95DiamondObjects1.createFrom(runtimeScene.getObjects("Touched_Diamond"));
{for(var i = 0, len = gdjs.Level_321Code.GDTouched_95DiamondObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTouched_95DiamondObjects1[i].hide();
}
}}

}


};gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].rotate(-(200), runtimeScene);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].rotate(200, runtimeScene);
}
}}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList0(runtimeScene);
}


{

gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_321Code.GDSignObjects1.createFrom(runtimeScene.getObjects("Sign"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSignObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDlook_95atObjects1.createFrom(runtimeScene.getObjects("look_at"));
{for(var i = 0, len = gdjs.Level_321Code.GDlook_95atObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDlook_95atObjects1[i].hide(false);
}
}}

}


{

gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_321Code.GDSignObjects1.createFrom(runtimeScene.getObjects("Sign"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSignObjects1Objects, true, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDlook_95atObjects1.createFrom(runtimeScene.getObjects("look_at"));
{for(var i = 0, len = gdjs.Level_321Code.GDlook_95atObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDlook_95atObjects1[i].hide();
}
}}

}


{

gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_321Code.GDspikes_95aheadObjects1.createFrom(runtimeScene.getObjects("spikes_ahead"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDspikes_9595aheadObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDspikes_95aheadObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDspikes_95aheadObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDspikes_95aheadObjects1[i].hide(false);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{

gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_321Code.GDspikes_95aheadObjects1.createFrom(runtimeScene.getObjects("spikes_ahead"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDspikes_9595aheadObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, true, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDspikes_95aheadObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDspikes_95aheadObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDspikes_95aheadObjects1[i].hide();
}
}}

}


{


gdjs.Level_321Code.eventsList1(runtimeScene);
}


{


gdjs.Level_321Code.eventsList2(runtimeScene);
}


{


gdjs.Level_321Code.eventsList3(runtimeScene);
}


{


{
}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDMiselium_95GrassObjects1.length = 0;
gdjs.Level_321Code.GDMiselium_95GrassObjects2.length = 0;
gdjs.Level_321Code.GDMiselium_95GrassObjects3.length = 0;
gdjs.Level_321Code.GDMiselium_95DirtObjects1.length = 0;
gdjs.Level_321Code.GDMiselium_95DirtObjects2.length = 0;
gdjs.Level_321Code.GDMiselium_95DirtObjects3.length = 0;
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects3.length = 0;
gdjs.Level_321Code.GDSignObjects1.length = 0;
gdjs.Level_321Code.GDSignObjects2.length = 0;
gdjs.Level_321Code.GDSignObjects3.length = 0;
gdjs.Level_321Code.GDBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundObjects3.length = 0;
gdjs.Level_321Code.GDlook_95atObjects1.length = 0;
gdjs.Level_321Code.GDlook_95atObjects2.length = 0;
gdjs.Level_321Code.GDlook_95atObjects3.length = 0;
gdjs.Level_321Code.GDSpikesObjects1.length = 0;
gdjs.Level_321Code.GDSpikesObjects2.length = 0;
gdjs.Level_321Code.GDSpikesObjects3.length = 0;
gdjs.Level_321Code.GDdiamondObjects1.length = 0;
gdjs.Level_321Code.GDdiamondObjects2.length = 0;
gdjs.Level_321Code.GDdiamondObjects3.length = 0;
gdjs.Level_321Code.GDTouched_95DiamondObjects1.length = 0;
gdjs.Level_321Code.GDTouched_95DiamondObjects2.length = 0;
gdjs.Level_321Code.GDTouched_95DiamondObjects3.length = 0;
gdjs.Level_321Code.GDspikes_95aheadObjects1.length = 0;
gdjs.Level_321Code.GDspikes_95aheadObjects2.length = 0;
gdjs.Level_321Code.GDspikes_95aheadObjects3.length = 0;

gdjs.Level_321Code.eventsList4(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
