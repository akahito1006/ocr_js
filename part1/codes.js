let totalCDs = 67;
let totalVinyls = 37;

totalCDs ++;

let totalMusic = totalCDs + totalVinyls;

console.log(totalMusic);

let costPerProduct = 20;
let numberOfProducts = 5;
 
let totalCost = costPerProduct * numberOfProducts;
 
let averageCostPerProduct = totalCost / numberOfProducts;

console.log(totalCost);

let numberOfCats = 2;

numberOfCats *= 6;
console.log(numberOfCats);

numberOfCats /= 3;
console.log(numberOfCats);

let episodeTime = 45;
let commercialTime = 5;

let totalShowTime = (episodeTime + commercialTime) * numberOfSeasons * numberOfEpisodes;

const hoursPerDay = 24;

console.log(hoursPerDay);

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

let positiveInteger = 42;
let negativeInteger = -42;
let largeDecimas = 42.42424242;

console.log(typeof positiveInteger);
console.log(typeof negativeInteger);
console.log(typeof largeDecimas);

console.log(0.2+0.2);
// 0.4

console.log(0.1+0.2);
// 0.30000000000000004

// 小数点の問題を避けるには、以下のようにする
let price = 25.99;
// ↓
let price = 2599;

let userIsSignedIn = true;
let userIsAdmin = false;

console.log(typeof userIsSignedIn);
console.log(typeof userIsAdmin);

let firstName = 'Will';
let lastName = 'Alexander';

console.log(firstName + ' ' + lastName);

let episodeTitle = 'the Beginning';
let episodeDuration = 60;
let hasBeenWatched = false;

let a = true;
let b = 1;
let c = "1";

console.log(a + c + b);



let myBook = {
  title: 'The Story of Tau',
  author: 'Will Alexander',
  numberOfPages: 250,
  isAvailable: true
};

let episode = {
  title: "the Beginning",
  duration: 60,
  hasBeenWatched: true
};

// Class: Objectに関する属性(attributes)のリスト
// JSON; javascript object notation
// class <= named type
// key: value

console.log(myBook.title);

// console.log(オブジェクト名.(ドット)キー)

let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;

// class is like a blueprint for Object
// how to use below
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

let myBook = new Book('The Story of Tau', 'Will Alexander', 250);
let mySecondBook = new Book('The Second Story', 'Will Alexander', 320);
let myThirdBook = new Book('The Third Book', 'Will Alexander', 240);

console.log(myBook);
console.log(mySecondBook);
console.log(myThirdBook);


class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode('the first episode', 45, true);
let secondEpisode = new Episode('the second episode', 45, true);
let thirdEpisode = new Episode('the third episode', 45, false);

// Objects JSON形式のkey/valueのペア。1つの変数に複数の関連データを格納できる
// Dot notation Object内のvalueにアクセスしたり変更したりする際に使う
// Classes Objectをより簡単に作成できるようになる。可読性もある。

let firstGuest = {name: 'Sarah Kate', vip: true};
let secondGuest = {name: 'Will Alexander', vip: false};

let guests = [firstGuest, secondGuest];

console.log(guests);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];


let numberOfGuests = 5;
let ticketsRemaining = false;
let artistName = 'Tau Perkington';

let artistProfile = {
  numberOfGuests: numberOfGuests,
  ticketsRemaining: ticketsRemaining,
  artistName: artistName
};

let allProfile = [artistProfile];

// 反映されない（variable）
// コピー元のデータが変わった。先にコピーされたデータは変わらない
// （値渡し、値型、プリミティブ型）
ticketsRemaining = true;

// 反映される（Object, Array)
// データのコピーではなく、メモリ上の場所を参照している
// （参照渡し、参照型、リファレンス型）
artistProfile.ticketsRemaining = true;

console.log(allProfile);