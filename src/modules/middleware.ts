const loggerMiddleware = store => next => action => {
    
    console.log(store.getState());
    console.log('액션', action);
    
    const result = next(action);

    return result;
}

export default loggerMiddleware;