/* 이 코드를 전부 복사후 새로 코드를 만든 후에 붙여넣으먼 됩니다.
안드로이드 버전 11? 이상에서 작동합니다? */
var data = require("info");
var cmd = data.cmd;
var place = data.place;
var shop1 = data.shop.first;
var shop2 = data.shop.second;
var setting = require("setting");
var fisher = setting.fisher;
var fishered = setting.fishered;
var ability = setting.ability;
function fish(r, m, s, isGC, chan, Id) {
  if(cmd.join.includes(m)) {
  
  }
}
function send(replier, msg, sender, isGroupChat, rp, iDB, pN, threadId, userId, chanId, usId) {
fish(replier, msg, sender, isGroupChat, chanId, usId);
}

/* onNotificationPosted 함수로 내가 만든거 아닙니다? */

function onNotificationPosted(sbn, sm) {
  var packageName = sbn.getPackageName();
  if (!packageName.startsWith("com.kakao.tal")) 
    return;
  var actions = sbn.getNotification().actions;
  if (actions == null) 
    return;
  var userId = sbn.getUser().hashCode();
  for (var n = 0; n < actions.length; n++) {
    var action = actions[n];
    if (action.getRemoteInputs() == null) 
      continue;
    var bundle = sbn.getNotification().extras;
    var msg = bundle.get("android.text").toString();
    var sender = bundle.getString("android.title");
    var room = bundle.getString("android.subText");
    if (room == null) 
      room = bundle.getString("android.summaryText");
    var isGroupChat = room != null;
    if (room == null) 
      room = sender;
    var userId2 = bundle.getParcelableArray("android.messages")[0].get("sender_person").getKey();
    var roomId = sbn.getNotification().shortcutId;
    var userId3 = Math.abs(java.lang.String(userId2 + roomId).hashCode());
    var replier = new com.xfl.msgbot.script.api.legacy.SessionCacheReplier(packageName, action, room, false, "");
    var icon = bundle.getParcelableArray("android.messages")[0].get("sender_person").getIcon().getBitmap();
    var image = bundle.getBundle("android.wearable.EXTENSIONS");
    if (image != null) 
      image = image.getParcelable("background");
    var imageDB = new com.xfl.msgbot.script.api.legacy.ImageDB(icon, image);
    com.xfl.msgbot.application.service.NotificationListener.Companion.setSession(packageName, room, action);
    if (this.hasOwnProperty("responseFix")) {
      send(room, msg, sender, isGroupChat, replier, imageDB, packageName, userId != 0, userId2, roomId, userId3);
    }
  }
}
