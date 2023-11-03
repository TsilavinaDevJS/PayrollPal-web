import {
	CREATE_NEW_COMPANY,
	FECTH_DATA_USER_ALL_COMPANY,
	DELETE_USER_COMPANY,
} from "../../../service/admin/adminAction";

const companyReducer = (state, action) => {
	switch (action.type) {
		case DELETE_USER_COMPANY:
			const dataAfterDelete = state.companyList.filter(
				(item) => item._id !== action.payload.userId
			);
			return {
				...state,
				companyList: dataAfterDelete,
				nbrCompany: state.nbrCompany - 1,
			};
		case CREATE_NEW_COMPANY:
			return {
				...state,
				companyList: [...state.companyList, action.payload.result],
				nbrCompany: state.nbrCompany + 1,
			};
		case FECTH_DATA_USER_ALL_COMPANY:
			return {
				...state,
				companyList: action.payload.result,
				nbrCompany: action.payload.result.length,
			};
		default:
			return state;
	}
};

export { companyReducer };
