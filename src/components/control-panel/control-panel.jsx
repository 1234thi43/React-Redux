import { useDispatch } from 'react-redux';
import { increaseAge, RESER_AGE, changeUserAction } from '../../actions';

export const ControlPanel = () => {
	const dispatch = useDispatch();

	const onAgeIncrease = () => {
		dispatch(increaseAge(5));
	};
	const onAgeReset = () => {
		dispatch(RESER_AGE);
	};
	const onUserChange = () => {
		dispatch(changeUserAction);
	};

	return (
		<div>
			<button onClick={onAgeIncrease}> Увеличить возраст </button>
			<button onClick={onAgeReset}> Сбросить возраст </button>
			<button onClick={onUserChange}> Сменить пользователя </button>
		</div>
	);
};
