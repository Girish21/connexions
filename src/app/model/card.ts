export class Card {
  name: string;
  hasImage: boolean;
  imgUrl: string;
  isClicked: boolean;

  constructor(name: string, hasImage: boolean, imgUrl: string,
              isClicked: boolean) {
    this.name = name;
    this.hasImage = hasImage;
    this.imgUrl = imgUrl;
    this.isClicked = isClicked;
  }
}
