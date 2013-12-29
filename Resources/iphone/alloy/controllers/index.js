function Controller() {
    function changeIconDialog() {
        var optionDialog = Ti.UI.createOptionDialog({
            options: [ "カメラで撮る", "ギャラリーから選択", "キャンセル" ],
            cansel: 2
        });
        optionDialog.addEventListener("click", function(e) {
            var mediaOptions = {
                mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ],
                saveToPhotoGallery: true,
                success: function(camera) {
                    var photo = camera.media;
                    $.iconImage.image = photo;
                },
                error: function() {
                    alert("このデバイスでは撮影できません");
                }
            };
            0 === e.index ? Ti.Media.showCamera(mediaOptions) : 1 === e.index && Ti.Media.openPhotoGallery(mediaOptions);
        });
        optionDialog.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertival",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId1 = [];
    $.__views.iconAndName = Ti.UI.createView({
        layout: "vertival",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroudColor: "#333333",
        id: "iconAndName"
    });
    __alloyId1.push($.__views.iconAndName);
    $.__views.iconImage = Ti.UI.createImageView({
        height: "100dp",
        top: "10dp",
        id: "iconImage",
        image: "http://placehold.jp/100x100.png"
    });
    $.__views.iconAndName.add($.__views.iconImage);
    changeIconDialog ? $.__views.iconImage.addEventListener("longpress", changeIconDialog) : __defers["$.__views.iconImage!longpress!changeIconDialog"] = true;
    $.__views.nameLabel = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: "16sp"
        },
        color: "#FFFFFF",
        top: "4dp",
        id: "nameLabel"
    });
    $.__views.iconAndName.add($.__views.nameLabel);
    $.__views.message = Ti.UI.createView({
        id: "message"
    });
    __alloyId1.push($.__views.message);
    $.__views.profileLabel = Ti.UI.createLabel({
        font: {
            fontSize: "14sp"
        },
        color: "#333333",
        id: "profileLabel"
    });
    $.__views.message.add($.__views.profileLabel);
    $.__views.__alloyId0 = Ti.UI.createScrollableView({
        width: Ti.UI.FILL,
        height: "160dp",
        top: "0dp",
        views: __alloyId1,
        showPagingControl: "true",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.nameLabel.text = Alloy.CFG.name;
    $.profileLabel.text = Alloy.CFG.profile;
    $.index.open();
    __defers["$.__views.iconImage!longpress!changeIconDialog"] && $.__views.iconImage.addEventListener("longpress", changeIconDialog);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;