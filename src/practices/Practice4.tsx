export const Practice4 = () => {
  // 4- from (num: number) delete number
  // 4- tsconfig.jsonで["noImplicitAny": false],を記述すると、numの型をanyに指定しなくてもエラーが出なくなる
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題: 設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題 4を実行</button>
    </div>
  );
};
