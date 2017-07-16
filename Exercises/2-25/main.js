"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var like = new like_1.Like(153);
like.onClick();
report(like);
like.onClick();
report(like);
function report(likeObj) {
    console.log('Selected : ' + likeObj.isSelected);
    console.log('Likes : ' + likeObj.totalLikes);
}
