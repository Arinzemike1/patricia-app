import React, {Fragment} from 'react';

const Button = (
	{
		className,
		children,
		text,
		type,
		...restProps
	}
) =>{
	return(
		<Fragment>
			<button
				className={`button${className &&(` ${className}`)}`}
				type={type}
				{...restProps}
			>
				<span className="button-text">{children || text}</span>
			</button>
		</Fragment>
	)
};

export default Button;
