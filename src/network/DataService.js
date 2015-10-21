'use strict';
const SERVER = 'http://www.yudianer.com/api';

function getProjects(){
    return fetch(`${SERVER}/project`)
		.then((response) => response.json())
		.then((responseData) => {
			console.info("加载项目完成：",responseData.data);
			return responseData.data;
		});
}

var DataService = {
	'getProjects':getProjects,
};

module.exports = DataService