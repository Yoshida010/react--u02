/** @format */

export const Practice02 = () => {
	const getTotalFee = (num: number): number => {
		const total = num * 1.1;
		console.log(total);
		return total;
	};

	const onClickPractice = () => {
		console.log(getTotalFee(1000));
	};

	return (
		<div>
			<p>練習問題:返却値の型指定</p>
			<button onClick={onClickPractice}>練習問題2を実行</button>
		</div>
	);
};
