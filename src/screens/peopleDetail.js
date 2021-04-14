const initialState = {
    data:{}
}

const peopleDetail = (state=initialState, {type,payload}) => {
    if (type === 'SET_PEOPLE_DETAIL'){
        return {data:payload}

    }
    return state
}

const setPeopleDetail = (peopleDetail) => {
    return {
        type:'SET_PEOPLE_DETAIL';
        payload:peopleDetail 
    }
}

export default peopleDetail; 