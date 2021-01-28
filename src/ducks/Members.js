import { createActionTypes } from '@/utils/actions';
import { getAllMemberAccountsandRankings, getAllMemberPoints } from '@/services/members';

// Handle all things related to Events
const ACTIONS = createActionTypes([
	'STORE_ALL_MEMBER_ACCOUNTS_AND_RANKINGS',
	'STORE_ALL_MEMBER_POINTS'
]);

const INITIAL_STATE = {
	allMemberAccounts: {},
	allMemberPoints: {},
	rankedIDs: []
};

export default (state = INITIAL_STATE, { payload, type }) => {
	switch (type) {
		case ACTIONS.STORE_ALL_MEMBER_ACCOUNTS_AND_RANKINGS:
			return { ...state, allMemberAccounts: payload.allMemberAccounts, rankedIDs: payload.rankedIDs };
		case ACTIONS.STORE_ALL_MEMBER_POINTS:
			return { ...state, allMemberPoints: payload };
		default:
			return state;
	}
};

export const storeMemberAccountsandRankings = () => dispatch =>
	getAllMemberAccountsandRankings(true).then(({ allMemberAccounts, rankedIDs }) => dispatch({
		type: ACTIONS.STORE_ALL_MEMBER_ACCOUNTS_AND_RANKINGS,
		payload: { allMemberAccounts, rankedIDs }
	}));

export const storeAllMemberPoints = () => dispatch =>
	getAllMemberPoints(true).then(allMemberPoints => dispatch({
		type: ACTIONS.STORE_ALL_MEMBER_POINTS,
		payload: allMemberPoints
	}));