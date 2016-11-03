import axios from 'axios';

function getProjects() {
  var baseUrl = window._spPageContextInfo.webAbsoluteUrl;
  var request = baseUrl +
    '/_api/lists/getbytitle(\'High%20Priority%20Projects\')/'+
    'items?$top=50&$select=ID,Title,Status&$orderBy=Title asc';
  return axios.get(request);
}

function loadProjects(data) {
  var baseUrl = window._spPageContextInfo.webAbsoluteUrl;
  var itemUrl = baseUrl + '/Lists/HighPriorityProjects/DispForm.aspx?ID=';
  var items = [];
  data.map((row, index) => (
    items.push({
      id: row.ID,
      title: row.Title,
      status: row.Status,
      url: itemUrl + row.ID
    })
  ))
  return items;
}

var api = {
  getSharePointProjectsData() {
    return axios.all([getProjects()])
      .then(function(arr) {
        return {
          projects: loadProjects(arr[0].data.value)
        };
      });
  }
}

module.exports = api;
