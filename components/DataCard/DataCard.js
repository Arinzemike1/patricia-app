import React from 'react';

const DataCard = (
	{
		greyBg,
		children, className,
		...restProps
	}) =>{

	return(
		<section className={`data-card ${greyBg && 'grey-bg'} ${className && ` ${className}`}`} {...restProps}>
			<div>{children}</div>
		</section>
	)
};

export default DataCard;
