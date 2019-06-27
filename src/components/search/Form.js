import React from 'react';

import './Form.css';

const Form = (props) => (
	<form onSubmit={props.getGiphy}>
		<span className="input input--hoshi	">
			<input className="input__field input__field--hoshi" id="input-4" type="text" name="giphyName"/>
			<label className="input__label input__label--hoshi input__label--hoshi-color-1" htmlFor="input-4">
			</label>
		</span>
		<button className="form__button">Search</button>
	</form>
);

export default Form;
