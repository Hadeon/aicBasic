// This can be called from any reduxed component as this.props.goToAuthenticate(params) etc.

export function goToAuthenticate(params){
    return (dispatch, getState) => {
        dispatch(NavigationActions.navigate({
            routeName: 'Authenticate',
            params: params
        }));
    };
}

export function goToIncident(params){
    return (dispatch, getState) => {
        dispatch(NavigationActions.navigate({
            routeName: 'Incident',
            params: params
        }));
    };
}
