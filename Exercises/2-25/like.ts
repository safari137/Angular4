export class Like {
    constructor(private _totalLikes: number, private _isSelected:boolean) {}

    get totalLikes() {
        return this._totalLikes;
    }

    get isSelected() {
        return this._isSelected;
    }

    public onClick() {
        this._isSelected = !this._isSelected;
        this._totalLikes += (this._isSelected) ? 1 : -1;
    }        
}