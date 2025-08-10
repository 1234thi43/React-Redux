import { useSelector } from 'react-redux';
import { selectName, selectAge } from '.././selectors';

export const User = () => {
	const name = useSelector(selectName);
	const age = useSelector(selectAge);

	return (
		<div>
			Пользователь:
			{name} - возраст {age}
		</div>
	);
};
