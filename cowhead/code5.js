gdjs.You_32did_32it_33Code = {};
gdjs.You_32did_32it_33Code.GDPlayerObjects1= [];
gdjs.You_32did_32it_33Code.GDPlayerObjects2= [];
gdjs.You_32did_32it_33Code.GDPlayerObjects3= [];
gdjs.You_32did_32it_33Code.GDGrassObjects1= [];
gdjs.You_32did_32it_33Code.GDGrassObjects2= [];
gdjs.You_32did_32it_33Code.GDGrassObjects3= [];
gdjs.You_32did_32it_33Code.GDDirt2Objects1= [];
gdjs.You_32did_32it_33Code.GDDirt2Objects2= [];
gdjs.You_32did_32it_33Code.GDDirt2Objects3= [];
gdjs.You_32did_32it_33Code.GDDirt3Objects1= [];
gdjs.You_32did_32it_33Code.GDDirt3Objects2= [];
gdjs.You_32did_32it_33Code.GDDirt3Objects3= [];
gdjs.You_32did_32it_33Code.GDDirtObjects1= [];
gdjs.You_32did_32it_33Code.GDDirtObjects2= [];
gdjs.You_32did_32it_33Code.GDDirtObjects3= [];
gdjs.You_32did_32it_33Code.GDBackGroundObjects1= [];
gdjs.You_32did_32it_33Code.GDBackGroundObjects2= [];
gdjs.You_32did_32it_33Code.GDBackGroundObjects3= [];
gdjs.You_32did_32it_33Code.GDSign2Objects1= [];
gdjs.You_32did_32it_33Code.GDSign2Objects2= [];
gdjs.You_32did_32it_33Code.GDSign2Objects3= [];
gdjs.You_32did_32it_33Code.GDSignObjects1= [];
gdjs.You_32did_32it_33Code.GDSignObjects2= [];
gdjs.You_32did_32it_33Code.GDSignObjects3= [];
gdjs.You_32did_32it_33Code.GDLadderObjects1= [];
gdjs.You_32did_32it_33Code.GDLadderObjects2= [];
gdjs.You_32did_32it_33Code.GDLadderObjects3= [];
gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects1= [];
gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects2= [];
gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects3= [];
gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects1= [];
gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects2= [];
gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects3= [];

gdjs.You_32did_32it_33Code.conditionTrue_0 = {val:false};
gdjs.You_32did_32it_33Code.condition0IsTrue_0 = {val:false};
gdjs.You_32did_32it_33Code.condition1IsTrue_0 = {val:false};
gdjs.You_32did_32it_33Code.condition2IsTrue_0 = {val:false};
gdjs.You_32did_32it_33Code.condition3IsTrue_0 = {val:false};
gdjs.You_32did_32it_33Code.conditionTrue_1 = {val:false};
gdjs.You_32did_32it_33Code.condition0IsTrue_1 = {val:false};
gdjs.You_32did_32it_33Code.condition1IsTrue_1 = {val:false};
gdjs.You_32did_32it_33Code.condition2IsTrue_1 = {val:false};
gdjs.You_32did_32it_33Code.condition3IsTrue_1 = {val:false};


gdjs.You_32did_32it_33Code.eventsList0 = function(runtimeScene) {

{

gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getY() < 540 ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects2 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.You_32did_32it_33Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.You_32did_32it_33Code.GDPlayerObjects2[0].getPointY("")), 0.05), "", 0);
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getX() < 960 ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 960, "", 0);
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects1[i].getX() >= 960 ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects1[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects1.length = k;}if ( gdjs.You_32did_32it_33Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects1[i].getX() <= 2368 - 960 ) {
        gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects1[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects1.length = k;}}
if (gdjs.You_32did_32it_33Code.condition1IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects1 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.You_32did_32it_33Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.You_32did_32it_33Code.GDPlayerObjects1[0].getPointX("")), 0.5), "", 0);
}}

}


};gdjs.You_32did_32it_33Code.eventsList1 = function(runtimeScene) {

{

gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}if ( gdjs.You_32did_32it_33Code.condition0IsTrue_0.val ) {
{
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.You_32did_32it_33Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.You_32did_32it_33Code.condition2IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.You_32did_32it_33Code.condition2IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].setAnimation(6);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}if ( gdjs.You_32did_32it_33Code.condition0IsTrue_0.val ) {
{
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.You_32did_32it_33Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.You_32did_32it_33Code.condition2IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.You_32did_32it_33Code.condition2IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].setAnimation(6);
}
}}

}


{


gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].setAnimation(4);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}if ( gdjs.You_32did_32it_33Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}}
if (gdjs.You_32did_32it_33Code.condition1IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}if ( gdjs.You_32did_32it_33Code.condition0IsTrue_0.val ) {
{
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.You_32did_32it_33Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.You_32did_32it_33Code.condition2IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.You_32did_32it_33Code.condition2IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}if ( gdjs.You_32did_32it_33Code.condition0IsTrue_0.val ) {
{
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.You_32did_32it_33Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.You_32did_32it_33Code.condition2IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.You_32did_32it_33Code.condition2IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}if ( gdjs.You_32did_32it_33Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}}
if (gdjs.You_32did_32it_33Code.condition1IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].setAnimation(3);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isGrabbingPlatform() ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].setAnimation(5);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}if ( gdjs.You_32did_32it_33Code.condition0IsTrue_0.val ) {
{
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.You_32did_32it_33Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.You_32did_32it_33Code.condition2IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.You_32did_32it_33Code.condition2IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = false;
{
gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.You_32did_32it_33Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isGrabbingPlatform()) ) {
        gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects2[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = k;}}
if (gdjs.You_32did_32it_33Code.condition1IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.You_32did_32it_33Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isGrabbingPlatform()) ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects1[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects1.length = k;}if ( gdjs.You_32did_32it_33Code.condition0IsTrue_0.val ) {
{
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.You_32did_32it_33Code.condition1IsTrue_0.val) {
/* Reuse gdjs.You_32did_32it_33Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


};gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.You_32did_32it_33Code.GDPlayerObjects1});gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.You_32did_32it_33Code.GDSignObjects1});gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.You_32did_32it_33Code.GDPlayerObjects1});gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.You_32did_32it_33Code.GDSignObjects1});gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.You_32did_32it_33Code.GDPlayerObjects1});gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDSign2Objects1Objects = Hashtable.newFrom({"Sign2": gdjs.You_32did_32it_33Code.GDSign2Objects1});gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.You_32did_32it_33Code.GDPlayerObjects1});gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDSign2Objects1Objects = Hashtable.newFrom({"Sign2": gdjs.You_32did_32it_33Code.GDSign2Objects1});gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.You_32did_32it_33Code.GDPlayerObjects1});gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDSign2Objects1Objects = Hashtable.newFrom({"Sign2": gdjs.You_32did_32it_33Code.GDSign2Objects1});gdjs.You_32did_32it_33Code.eventsList2 = function(runtimeScene) {

{


gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wait");
}}

}


{


gdjs.You_32did_32it_33Code.eventsList0(runtimeScene);
}


{


gdjs.You_32did_32it_33Code.eventsList1(runtimeScene);
}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.You_32did_32it_33Code.GDSignObjects1.createFrom(runtimeScene.getObjects("Sign"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDPlayerObjects1Objects, gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDSignObjects1Objects, false, runtimeScene, false);
}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects1.createFrom(runtimeScene.getObjects("you_did_it"));
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects1.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects1[i].hide(false);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.You_32did_32it_33Code.GDSignObjects1.createFrom(runtimeScene.getObjects("Sign"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDPlayerObjects1Objects, gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDSignObjects1Objects, true, runtimeScene, false);
}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects1.createFrom(runtimeScene.getObjects("you_did_it"));
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects1.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects1[i].hide();
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.You_32did_32it_33Code.GDSign2Objects1.createFrom(runtimeScene.getObjects("Sign2"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDPlayerObjects1Objects, gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDSign2Objects1Objects, false, runtimeScene, false);
}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects1.createFrom(runtimeScene.getObjects("there_is_no"));
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects1.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects1[i].hide(false);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.You_32did_32it_33Code.GDSign2Objects1.createFrom(runtimeScene.getObjects("Sign2"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
gdjs.You_32did_32it_33Code.condition1IsTrue_0.val = false;
{
gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDPlayerObjects1Objects, gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDSign2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.You_32did_32it_33Code.condition0IsTrue_0.val ) {
{
{gdjs.You_32did_32it_33Code.conditionTrue_1 = gdjs.You_32did_32it_33Code.condition1IsTrue_0;
gdjs.You_32did_32it_33Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8618548);
}
}}
if (gdjs.You_32did_32it_33Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "wait");
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.You_32did_32it_33Code.GDSign2Objects1.createFrom(runtimeScene.getObjects("Sign2"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDPlayerObjects1Objects, gdjs.You_32did_32it_33Code.mapOfGDgdjs_46You_9532did_9532it_9533Code_46GDSign2Objects1Objects, true, runtimeScene, false);
}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects1.createFrom(runtimeScene.getObjects("there_is_no"));
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects1.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects1[i].hide();
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects1[i].getX() >= 1120 ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects1[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects1.length = k;}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
gdjs.You_32did_32it_33Code.GDDirt2Objects1.createFrom(runtimeScene.getObjects("Dirt2"));
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDDirt2Objects1.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDDirt2Objects1[i].setY(512);
}
}}

}


{

gdjs.You_32did_32it_33Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.You_32did_32it_33Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.You_32did_32it_33Code.GDPlayerObjects1[i].getX() >= 1760 ) {
        gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = true;
        gdjs.You_32did_32it_33Code.GDPlayerObjects1[k] = gdjs.You_32did_32it_33Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.You_32did_32it_33Code.GDPlayerObjects1.length = k;}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
gdjs.You_32did_32it_33Code.GDDirt3Objects1.createFrom(runtimeScene.getObjects("Dirt3"));
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDDirt3Objects1.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDDirt3Objects1[i].setY(512);
}
}}

}


{


gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = false;
{
gdjs.You_32did_32it_33Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "wait");
}if (gdjs.You_32did_32it_33Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scream", false);
}}

}


{


{
gdjs.You_32did_32it_33Code.GDDirt2Objects1.createFrom(runtimeScene.getObjects("Dirt2"));
gdjs.You_32did_32it_33Code.GDDirt3Objects1.createFrom(runtimeScene.getObjects("Dirt3"));
{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDDirt3Objects1.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDDirt3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.You_32did_32it_33Code.GDDirt2Objects1.length ;i < len;++i) {
    gdjs.You_32did_32it_33Code.GDDirt2Objects1[i].hide();
}
}}

}


};

gdjs.You_32did_32it_33Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.You_32did_32it_33Code.GDPlayerObjects1.length = 0;
gdjs.You_32did_32it_33Code.GDPlayerObjects2.length = 0;
gdjs.You_32did_32it_33Code.GDPlayerObjects3.length = 0;
gdjs.You_32did_32it_33Code.GDGrassObjects1.length = 0;
gdjs.You_32did_32it_33Code.GDGrassObjects2.length = 0;
gdjs.You_32did_32it_33Code.GDGrassObjects3.length = 0;
gdjs.You_32did_32it_33Code.GDDirt2Objects1.length = 0;
gdjs.You_32did_32it_33Code.GDDirt2Objects2.length = 0;
gdjs.You_32did_32it_33Code.GDDirt2Objects3.length = 0;
gdjs.You_32did_32it_33Code.GDDirt3Objects1.length = 0;
gdjs.You_32did_32it_33Code.GDDirt3Objects2.length = 0;
gdjs.You_32did_32it_33Code.GDDirt3Objects3.length = 0;
gdjs.You_32did_32it_33Code.GDDirtObjects1.length = 0;
gdjs.You_32did_32it_33Code.GDDirtObjects2.length = 0;
gdjs.You_32did_32it_33Code.GDDirtObjects3.length = 0;
gdjs.You_32did_32it_33Code.GDBackGroundObjects1.length = 0;
gdjs.You_32did_32it_33Code.GDBackGroundObjects2.length = 0;
gdjs.You_32did_32it_33Code.GDBackGroundObjects3.length = 0;
gdjs.You_32did_32it_33Code.GDSign2Objects1.length = 0;
gdjs.You_32did_32it_33Code.GDSign2Objects2.length = 0;
gdjs.You_32did_32it_33Code.GDSign2Objects3.length = 0;
gdjs.You_32did_32it_33Code.GDSignObjects1.length = 0;
gdjs.You_32did_32it_33Code.GDSignObjects2.length = 0;
gdjs.You_32did_32it_33Code.GDSignObjects3.length = 0;
gdjs.You_32did_32it_33Code.GDLadderObjects1.length = 0;
gdjs.You_32did_32it_33Code.GDLadderObjects2.length = 0;
gdjs.You_32did_32it_33Code.GDLadderObjects3.length = 0;
gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects1.length = 0;
gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects2.length = 0;
gdjs.You_32did_32it_33Code.GDyou_95did_95itObjects3.length = 0;
gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects1.length = 0;
gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects2.length = 0;
gdjs.You_32did_32it_33Code.GDthere_95is_95noObjects3.length = 0;

gdjs.You_32did_32it_33Code.eventsList2(runtimeScene);
return;

}

gdjs['You_32did_32it_33Code'] = gdjs.You_32did_32it_33Code;
