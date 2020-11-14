import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history, children }) => {
	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scrollTo(0, 0);
		});
		return () => {
			unlisten();
		}
	}, [history]);

	return <React.Fragment> { children } </React.Fragment>;
}

export default withRouter(ScrollToTop);