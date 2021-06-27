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

let guests = ['will Alexander', 'Sarah Kate', 'Andray Simon'];


guests.pop(); // 配列の最後の要素を消す
guests.push('Tau Perkington'); // 配列の最後に追加する
guests.unshift('Tau Perkington'); // 配列の最初に追加する

console.log(guests);
console.log(guests.length); // 配列の要素の数を数える


let episodes = [];

episodes.push(firstEpisode);
episodes.push(secondEpisode);
episodes.push(thirdEpisode);
episodes.push(thirdEpisode);

episodes.push(firstEpisode, secondEpisode,thirdEpisode,thirdEpisode)

episodes.pop();

let numberOfEpisodes = episodes.length;

if (duration == minutesWatched) {
  this.hasBeenWatched = true;
} else if (duration > minutesWatched) {
  this.hasBeenWatched = false;
}

if (duration == minutesWatched) {
  this.watchedText = 'Watched';
} else if (!minutesWatched) {
  this.watchedText = 'Not yet watched';
} else {
  this.watchedText = 'Watching';
  this.continueWatching = true;
}
// after refactoring; solution
this.continueWatching = false;

if (minutesWatched === 0) {
  this.watchedText = 'Not yet watched';
} else if (minutesWatched > 0 && duration > minutesWatched) {
  this.watchedText = 'Watching';
  this.continueWatching = true;
} else {
  this.watchedText = 'Watched';
}

const firstUser = {
  name: 'Will Alexander',
  age: 24,
  accountLevel: 'normal'
};

const secondUser = {
  name: 'Samuel Colt',
  age: 56,
  accountLevel: 'Premium'
};

const thirdUser = {
  name: 'John Blowning',
  age: 45,
  accountLevel: 'Mega-Premium'
};

switch (firstUser.accountLevel) {
  case 'normal':
    console.log('normal User');
    break;
  case 'Premium':
    console.log('Premium User');
    break;
  case 'Mega-Premium':
    console.log('Mega-Premium User');
    break;
  default:
    console.log('Unknown User');
};

// for loop
const numberOfPassengers = 10;
for (let i = 0; i < numberOfPassengers; i++) {
  console.log('Passenger boarded!');
}

// for loop with array
// for (let i in xxxarayxxx)
const fruits = [
  'Orange',
  'Apple',
  'Banana',
  'PineApple'
]
for (let i in fruits) {
  console.log('Im having ' + fruits[i]);
}

// for (let passenger of passengers)
// better readablity
for (let fruit of fruits) {
  console.log('Im having ' + fruit);
}

for (let i = 0; i < episodes.length; i++) {
  episodes[i].hasBeenWatched = false;
};

// when it was an array
for (let i in episodes) {
  episodes[i].hasBeenWatched = false;
};

for (let episode of episodes) {
  episode.hasBeenWatched = false;
};

// while
let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillBoard > 0) {
  passengersBoarded++;
  passengersStillToBoard--;
  seatsLeft--;
};

console.log(passengersBoarded);
// prints 8. as there are 9 passengers for 10seats

// 1.syntax errors
if (seatsRemaining) {
  passengersBoarded++;
};

// 2.logic errors
while (seatsRemaining > 0) {
  passengersBoarded--;
  seatsRemaining--;
};

if (seatsRemaining > 0) {
  passengersBoarded++;
} else {
  passengersStillToBoard = 0;
};
// worst case is crashing. like by infinite looping

// 3.runtime errors
// to check for valid data
if (dataExists && dataIsValid) {
  // use data here
} else {
  // handle error here
}

// also try / catch would work fine
try {
  // suspicious, questionable error-prone code here
} catch (error) {
  console.log(error);
}

// functions
const calculateAverageRating = (ratings) => {
  if (ratings.length === 0) {
    return 0;
  };
  // 上のようなifチェックを使う時、elseは必要ない。
  // 関数ブロック内でreturnが実行されると、ブロック内の処理がそこで終了する。
  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  };
  const result = (sum / ratings.length);
  return result;
};

class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }
  addRating(newRating) {
    this.ratings.push(newRating);

    let sum = 0;
    for (let rating of this.ratings) {
      sum += rating;
    }
    
    this.averageRating = sum / this.ratings.length;
  }
};

// static method as "helper"
// you dont need to create new object with the class
class BePolite {
  static sayHello() {
    console.log('Hello');
  }
  static sayHelloTo(name) {
    console.log('Hello ' + name + '!');
  }
  static add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
  }
}

// as helper
BePolite.sayHello();
BePolite.sayHelloTo('Will');
const sum = BePolite.add(1,2);

const randomNumber = Math.random();
const roundMeDown = Math.floor(495.966); // 495

// Instance methods, which act upon individual instances of a class.
// Static methods, which do not rely on an instance of a class.

// ======================

const createShowComponent = (episode) => {
  const titleText = episode.title;
  const seasonsText = episode.numberOfSeasons + ' seasons';
  const episodesText = episode.episodesPerSeason + ' episodes per season';
  const component = {
  titleText: titleText,
  seasonsText: seasonsText,
  episodesText: episodesText
  };
  // return を忘れない
  return component;
};

// ここで、戻り値componentに定数（名前）を付けている
const tauComponent = createShowComponent(tau);
const meldrumComponent = createShowComponent(meldrum);
const claraComponent = createShowComponent(clara);

const showComponents = [tauComponent, meldrumComponent, claraComponent];

// functionは一つのことを行うように書く

// 例：文字列の特徴をまとめて表示させたい場合のfunctionの使い方
// function1. 単語を数える、戻り値：単語の数
// function2. 文字を数える、戻り値：文字の数
// function3. 単語の文字数の平均を計算する、戻り値：その平均値
// function4. コンソールに文字列の特徴を表示する。function1,2,3の戻り値をまとめて表示する

// コメントの書き方
// 全部の行にコメントをつけないこと。該当箇所の前の行に書くこと
// 一列だけのコメントでは、複雑そうなコードである...理由を説明する
// 複数列に及ぶコメントでは、後に続く処理について一見して把握しにくい場合、その説明をする

// JavaScriptのテスト
// unit test(単体テスト)
const getWordCount = (stringToTest) => {
  const wordArray = stringToTest.split(' ');
  return wordArray.length;
}
// getWordCount() をテストする簡易なテストの書き方
const testSimpleWordCount = () => {
  const testString = 'i have four words';
  if (getWordCount(testString) !== 4) {
    console.error('Simple getWordCount failed');
  }
}
// しっかりした丁寧なテストを行う段階では、テストフレームワークを使う方が良い
describe('getWordCount()', function() {
  it('should find four words', function() {
    expect(getWordCount('I have four words').to.equal(4));
  });
  it('should find no words', function() {
    expect(getWordCount('   ').to.equal(0));
  });
});

// integration test(結合テスト)
// 単体、結合テストの考え方はrspecの時と同様

// functional test
// end to end test(E2E)とも。
// サインイン→通知を開く→既読にする、一連の流れをテストする
// サービスで利用する外部リソースもテストの範囲である。（サードパーティの支払いシステムなど）

// recursive function(再帰呼び出し)
// Redditのようなサイトのコメントをイメージしてみる。
const commentToTest = {
  content: '1',
  subComments: [
    { content: '1-A', subComments: [] },
    { content: '1-B', subComments: [
      { content: '1-B-a', subComments: [] }
    ] },
    { content: '1-C', subComments: [
      { content: '1-C-a', subComments: [
        { content: '1-C-a-i', subComments: [] },
        { content: '1-C-a-ii', subComments: [] }
      ] },
      { content: '1-C-b', subComments: [] }
    ] },
    { content: '1-D', subComments: [] }
  ]
};

// commentToTestの内容を１行ずつ下げながらconsoleに表示する
const getAllComments = (comment) => {
  let allComments = comment.content;
  for (let subComment of comment.subComments) {
    allComments += '\n' + getAllComments(subComment); // 関数自身を呼び出している。同じ構造
  }
  // ......
    // ......
      // ......
  return allComments;
}

// Summary test
export class Book {
  constructor(title, author, description, pages, currentPage,read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  };
  readBook(page) {
    if (page < 1 || this.pages < page) {
      return 0;
    } else if (1 <= page && page < this.pages) {
      this.currentPage = page;
      return 1;
    } else if (page == this.pages) {
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }
 }
 
 const book1 = new Book("title1", "author1", "random description 1", 150, 0, false);
 const book2 = new Book("title2", "author2", "random description 2", 250, 0, false);
 const book3 = new Book("title3", "author3", "random description 3", 350, 0, false);
 
 export const books = [book1, book2, book3];
 