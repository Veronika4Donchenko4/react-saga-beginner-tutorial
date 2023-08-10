import { useState } from 'react';
import { useRef } from 'react';
import classNames from 'classnames';
import PopupInfo from './PopupInfo';
const Regular = () => {
	const [result, setResult] = useState(0);
	const [checkImg, setCheckImg] = useState(0);
	const [isShow, setIsShow] = useState(false);
	const telephone = useRef();
	const telephoneRegex =
		// eslint-disable-next-line
		/^((\+38)[\-]?)?(\(?[039]{3,3}|[067]{3,3}|[068]{3,3}|[096]{3,3}|[097]{3,3}|[098]{3,3}|[050]{3,3}|[066]{3,3}|[095]{3,3}|[099]{3,3}|[063]{3,3}|[073]{3,3}|[093]{3,3}|[091]{3,3}|[092]{3,3}|[089]{3,3}|[094]{3,3}\)?[\- ]?)[\d\-]{7}$/;
	const checkNum = () => {
		const check = telephoneRegex.test(telephone.current.value);
		if (check) {
			setResult(2);
			setCheckImg(2);
		} else {
			setResult(1);
			setCheckImg(1);
			setIsShow(true);
			setTimeout(() => {
				setIsShow(false);
			}, 3000);
		}
	};
	const changeInput = () => {
		setResult(0);
		setCheckImg(0);
	};
	return (
		<div className='main-box'>
			{isShow ? <PopupInfo /> : ''}
			<div className='form-box'>
				<form>
					<div className='phone-regular-box'>
						<label htmlFor='tel'>Check Your Phone Number:</label>
						<input
							className={classNames({
								pass: result === 2,
								fail: result === 1
							})}
							ref={telephone}
							type='tel'
							name='tel'
							id='tel'
							placeholder='Phone:'
							maxLength={13}
							onChange={() => {
								changeInput();
							}}
						/>
						<span
							id='check'
							className={classNames({
								'pass-img': checkImg === 2,
								'fail-img': checkImg === 1
							})}
						></span>
						<button
							id='check'
							className='button-check'
							type='button'
							onClick={() => {
								checkNum();
							}}
						>
							Check
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Regular;
