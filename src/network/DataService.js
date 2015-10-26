'use strict';
const SERVER = 'http://www.yudianer.com/api';

function getProjectList(){
    return fetch(`${SERVER}/project`)
		.then((response) => response.json())
		.then((responseData) => {
			console.info("加载项目完成：",responseData.data);
			return responseData.data;
		});
}

function getProjectIssuesList(projectId){
    return fetch(`${SERVER}/project/${projectId}/issues`)
		.then((response) => response.json())
		.then((responseData) => {
			console.info(`加载\"项目${projectId}\"议题完成：`,responseData.data);
			return responseData.data;
		});
}

function getIssuesList(){
    return fetch(`${SERVER}/issues`)
		.then((response) => response.json())
		.then((responseData) => {
			console.info("加载议题完成：",responseData.data);
			return responseData.data;
		});
}

var DataService = {
	'getProjectList':getProjectList,
	'getIssuesList':getIssuesList,
	'getProjectIssuesList': getProjectIssuesList,
};

module.exports = DataService