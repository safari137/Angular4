import {Like} from './like';

var like = new Like(153);

like.onClick();

report(like);

like.onClick();

report(like);


function report(likeObj:Like) {
    console.log('Selected : ' + likeObj.isSelected);
    console.log('Likes : ' + likeObj.totalLikes);
}