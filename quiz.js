const quiz = [
  {
    question: '世界一高い山は？',
    answers: [
      '富士山',
      'エベレスト',
      'K2',
      'カンチェンジュンガ'
    ],
    correct: 'エベレスト'
  },
  {
    question: '日本の首都はどこですか？',
    answers: [
      '東京',
      '京都',
      '大阪',
      '北京'
    ],
    correct: '東京'
  },
  {
    question: 'アポロ11号が月に初めて着陸したのは何年ですか？',
    answers: [
      '1965年',
      '1969年',
      '1973年',
      '1981年'
    ],
    correct: '1969年'
  },
  {
    question: '次のうち、最も広い国はどれですか？',
    answers: [
      'アメリカ',
      'ロシア',
      'カナダ',
      'オーストラリア'
    ],
    correct: 'ロシア'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//ボタンに選択肢をセット,問題文をalertにセット
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

//正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else{
    window.alert('不正解！');
  }
  quizIndex++;
  if(quizIndex < quizLength){
    //問題がまだあれば実行
    setupQuiz();
  } else{
    //問題がなければ実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) =>{
    clickHandler(e);
  });
  handlerIndex++;
}
