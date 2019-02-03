import {getRequest, getRequestWithQuery} from './request';

const BASE_URL = "http://localhost:8000/sh_app"

export function getAllCompanies(page=1) {
	let url = `${BASE_URL}/company/`;
	let query = {'page': page};
	return  getRequestWithQuery(url, query);
}

export function getCompanyDetailsById(id) {
	let url = `${BASE_URL}/company/${id}/?format=json`;
	return  getRequest(url);
}

export function getCompanyDetails(url) {
	return  getRequest(url);
}

export function getTopPerformers(date) {
	let url = `${BASE_URL}/shares/sh_top/`;
	let query = {date: date, format: 'json'};
	return  getRequestWithQuery(url, query);
}

export function getHistoryByCompanyName(company) {
	let url = `${BASE_URL}/shares/sh_history/`;
	let query = {company: company, format: 'json'};
	return  getRequestWithQuery(url, query);
}

export function getAllCompaniesByOpeningShares(page=1, sh_open) {
	let url = `${BASE_URL}/company/`;
	let query = {'page': page, 'sh_open': sh_open};
	return  getRequestWithQuery(url, query);
}

export function getAllCompaniesByClosingShares(page=1, sh_close) {
	let url = `${BASE_URL}/company/`;
	let query = {'page': page, 'sh_close': sh_close};
	return  getRequestWithQuery(url, query);
}

export function getAllShares(page=1) {
	let url = `${BASE_URL}/shares/`;
	let query = {'page': page};
	return  getRequestWithQuery(url, query);
}

export function getSharesByCompanyId(id){
	let url = `${BASE_URL}/shares/${id}/`;
	return  getRequest(url);
}

export function getSharesByCompanyIdAndDate(id, date){
	let url = `${BASE_URL}/shares/${id}/`;
	let query = {'date': date}; 
	return  getRequestWithQuery(url, query);
}

export function getSharesByCompanyNameAndDate(company, date){
	let url = `${BASE_URL}/shares/sh_symbol_time/?format=json`;
	let query = {'company': company,'date':date}; 
	return  getRequestWithQuery(url, query);
}
