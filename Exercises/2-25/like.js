"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = (function () {
    function Like(_totalLikes, _isSelected) {
        this._totalLikes = _totalLikes;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(Like.prototype, "totalLikes", {
        get: function () {
            return this._totalLikes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Like.prototype.onClick = function () {
        this._isSelected = !this._isSelected;
        (this._isSelected) ? this._totalLikes++ : this._totalLikes--;
    };
    return Like;
}());
exports.Like = Like;
