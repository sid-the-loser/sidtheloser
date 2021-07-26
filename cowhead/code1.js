gdjs.TutorialCode = {};
gdjs.TutorialCode.GDPlayerObjects1= [];
gdjs.TutorialCode.GDPlayerObjects2= [];
gdjs.TutorialCode.GDPlayerObjects3= [];
gdjs.TutorialCode.GDGrassObjects1= [];
gdjs.TutorialCode.GDGrassObjects2= [];
gdjs.TutorialCode.GDGrassObjects3= [];
gdjs.TutorialCode.GDDirtObjects1= [];
gdjs.TutorialCode.GDDirtObjects2= [];
gdjs.TutorialCode.GDDirtObjects3= [];
gdjs.TutorialCode.GDCamping_95BusObjects1= [];
gdjs.TutorialCode.GDCamping_95BusObjects2= [];
gdjs.TutorialCode.GDCamping_95BusObjects3= [];
gdjs.TutorialCode.GDBackGroundObjects1= [];
gdjs.TutorialCode.GDBackGroundObjects2= [];
gdjs.TutorialCode.GDBackGroundObjects3= [];
gdjs.TutorialCode.GDFloating_95Dirt_95RightObjects1= [];
gdjs.TutorialCode.GDFloating_95Dirt_95RightObjects2= [];
gdjs.TutorialCode.GDFloating_95Dirt_95RightObjects3= [];
gdjs.TutorialCode.GDFloating_95Dirt_95LeftObjects1= [];
gdjs.TutorialCode.GDFloating_95Dirt_95LeftObjects2= [];
gdjs.TutorialCode.GDFloating_95Dirt_95LeftObjects3= [];
gdjs.TutorialCode.GDLadderObjects1= [];
gdjs.TutorialCode.GDLadderObjects2= [];
gdjs.TutorialCode.GDLadderObjects3= [];
gdjs.TutorialCode.GDMiselium_95GrassObjects1= [];
gdjs.TutorialCode.GDMiselium_95GrassObjects2= [];
gdjs.TutorialCode.GDMiselium_95GrassObjects3= [];
gdjs.TutorialCode.GDSignObjects1= [];
gdjs.TutorialCode.GDSignObjects2= [];
gdjs.TutorialCode.GDSignObjects3= [];
gdjs.TutorialCode.GDdontObjects1= [];
gdjs.TutorialCode.GDdontObjects2= [];
gdjs.TutorialCode.GDdontObjects3= [];
gdjs.TutorialCode.GDmoveObjects1= [];
gdjs.TutorialCode.GDmoveObjects2= [];
gdjs.TutorialCode.GDmoveObjects3= [];
gdjs.TutorialCode.GDupanddownObjects1= [];
gdjs.TutorialCode.GDupanddownObjects2= [];
gdjs.TutorialCode.GDupanddownObjects3= [];

gdjs.TutorialCode.conditionTrue_0 = {val:false};
gdjs.TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.TutorialCode.condition1IsTrue_0 = {val:false};
gdjs.TutorialCode.condition2IsTrue_0 = {val:false};
gdjs.TutorialCode.condition3IsTrue_0 = {val:false};


gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{

gdjs.TutorialCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getX() >= 960 ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getX() <= 6208 - 960 ) {
        gdjs.TutorialCode.condition1IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.TutorialCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.TutorialCode.GDPlayerObjects2[0].getPointX("")), 0.05), "", 0);
}}

}


{

gdjs.TutorialCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects1[i].getY() < 540 ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects1[k] = gdjs.TutorialCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.TutorialCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.TutorialCode.GDPlayerObjects1[0].getPointY("")), 0.05), "", 0);
}}

}


};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{

gdjs.TutorialCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
gdjs.TutorialCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.TutorialCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.TutorialCode.condition2IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}}
}
if (gdjs.TutorialCode.condition2IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setAnimation(6);
}
}}

}


{

gdjs.TutorialCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
gdjs.TutorialCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.TutorialCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.TutorialCode.condition2IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}}
}
if (gdjs.TutorialCode.condition2IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setAnimation(6);
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.TutorialCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setAnimation(4);
}
}}

}


{

gdjs.TutorialCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.TutorialCode.condition1IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.TutorialCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
gdjs.TutorialCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.TutorialCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.TutorialCode.condition2IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}}
}
if (gdjs.TutorialCode.condition2IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.TutorialCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
gdjs.TutorialCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.TutorialCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.TutorialCode.condition2IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}}
}
if (gdjs.TutorialCode.condition2IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.TutorialCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        gdjs.TutorialCode.condition1IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setAnimation(3);
}
}}

}


{

gdjs.TutorialCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setAnimation(5);
}
}}

}


{

gdjs.TutorialCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
gdjs.TutorialCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.TutorialCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.TutorialCode.condition2IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}}
}
if (gdjs.TutorialCode.condition2IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.TutorialCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isGrabbingPlatform()) ) {
        gdjs.TutorialCode.condition1IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.TutorialCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform()) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDPlayerObjects1[k] = gdjs.TutorialCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects1.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


};gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TutorialCode.GDPlayerObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.TutorialCode.GDSignObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TutorialCode.GDPlayerObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.TutorialCode.GDSignObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TutorialCode.GDPlayerObjects1});gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDMiselium_9595GrassObjects1Objects = Hashtable.newFrom({"Miselium_Grass": gdjs.TutorialCode.GDMiselium_95GrassObjects1});gdjs.TutorialCode.eventsList2 = function(runtimeScene) {

{


gdjs.TutorialCode.eventsList0(runtimeScene);
}


{


gdjs.TutorialCode.eventsList1(runtimeScene);
}


{

gdjs.TutorialCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.TutorialCode.GDSignObjects1.createFrom(runtimeScene.getObjects("Sign"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDPlayerObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDSignObjects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.TutorialCode.GDdontObjects1.createFrom(runtimeScene.getObjects("dont"));
{for(var i = 0, len = gdjs.TutorialCode.GDdontObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDdontObjects1[i].hide(false);
}
}}

}


{

gdjs.TutorialCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.TutorialCode.GDSignObjects1.createFrom(runtimeScene.getObjects("Sign"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDPlayerObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDSignObjects1Objects, true, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.TutorialCode.GDdontObjects1.createFrom(runtimeScene.getObjects("dont"));
{for(var i = 0, len = gdjs.TutorialCode.GDdontObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDdontObjects1[i].hide();
}
}}

}


{

gdjs.TutorialCode.GDMiselium_95GrassObjects1.createFrom(runtimeScene.getObjects("Miselium_Grass"));
gdjs.TutorialCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDPlayerObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDMiselium_9595GrassObjects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setAnimation(7);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDPlayerObjects1.length = 0;
gdjs.TutorialCode.GDPlayerObjects2.length = 0;
gdjs.TutorialCode.GDPlayerObjects3.length = 0;
gdjs.TutorialCode.GDGrassObjects1.length = 0;
gdjs.TutorialCode.GDGrassObjects2.length = 0;
gdjs.TutorialCode.GDGrassObjects3.length = 0;
gdjs.TutorialCode.GDDirtObjects1.length = 0;
gdjs.TutorialCode.GDDirtObjects2.length = 0;
gdjs.TutorialCode.GDDirtObjects3.length = 0;
gdjs.TutorialCode.GDCamping_95BusObjects1.length = 0;
gdjs.TutorialCode.GDCamping_95BusObjects2.length = 0;
gdjs.TutorialCode.GDCamping_95BusObjects3.length = 0;
gdjs.TutorialCode.GDBackGroundObjects1.length = 0;
gdjs.TutorialCode.GDBackGroundObjects2.length = 0;
gdjs.TutorialCode.GDBackGroundObjects3.length = 0;
gdjs.TutorialCode.GDFloating_95Dirt_95RightObjects1.length = 0;
gdjs.TutorialCode.GDFloating_95Dirt_95RightObjects2.length = 0;
gdjs.TutorialCode.GDFloating_95Dirt_95RightObjects3.length = 0;
gdjs.TutorialCode.GDFloating_95Dirt_95LeftObjects1.length = 0;
gdjs.TutorialCode.GDFloating_95Dirt_95LeftObjects2.length = 0;
gdjs.TutorialCode.GDFloating_95Dirt_95LeftObjects3.length = 0;
gdjs.TutorialCode.GDLadderObjects1.length = 0;
gdjs.TutorialCode.GDLadderObjects2.length = 0;
gdjs.TutorialCode.GDLadderObjects3.length = 0;
gdjs.TutorialCode.GDMiselium_95GrassObjects1.length = 0;
gdjs.TutorialCode.GDMiselium_95GrassObjects2.length = 0;
gdjs.TutorialCode.GDMiselium_95GrassObjects3.length = 0;
gdjs.TutorialCode.GDSignObjects1.length = 0;
gdjs.TutorialCode.GDSignObjects2.length = 0;
gdjs.TutorialCode.GDSignObjects3.length = 0;
gdjs.TutorialCode.GDdontObjects1.length = 0;
gdjs.TutorialCode.GDdontObjects2.length = 0;
gdjs.TutorialCode.GDdontObjects3.length = 0;
gdjs.TutorialCode.GDmoveObjects1.length = 0;
gdjs.TutorialCode.GDmoveObjects2.length = 0;
gdjs.TutorialCode.GDmoveObjects3.length = 0;
gdjs.TutorialCode.GDupanddownObjects1.length = 0;
gdjs.TutorialCode.GDupanddownObjects2.length = 0;
gdjs.TutorialCode.GDupanddownObjects3.length = 0;

gdjs.TutorialCode.eventsList2(runtimeScene);
return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
