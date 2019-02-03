import request from "superagent";
 
export function getRequest(url) {
  return new Promise((resolve, reject) => {
    request
      .get(url)
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) reject(err);
        else if (!res.ok) reject(res.body);
        else resolve(res.body);
      });
  });
}
 
export function getRequestWithQuery(url, content) {
  return new Promise((resolve, reject) => {
    request
      .get(url)
      .query(content)
      .set("Accept", "application/json")
      .end((err, res) => {
        if (!res) reject(err);
        else resolve(res);
      });
  });
}
 
export function getRequestWithResponseObjectAndQuery(url, content) {
  return new Promise((resolve, reject) => {
    request
      .get(url)
      .query(content)
      .set("Accept", "application/json")
      .end((err, res) => {
        if (!res) reject(err);
        else resolve(res);
      });
  });
}
 
export function getRequestWithResponseObject(url) {
  return new Promise((resolve, reject) => {
    request
      .get(url)
      .set("Accept", "application/json")
      .end((err, res) => {
        if (!res) reject(err);
        else resolve(res);
      });
  });
}
 
export function postRequestWithContent(url, content) {
  return new Promise((resolve, reject) => {
    request
      .post(url)
      .send(content)
      .end((err, res) => {
        if (!res) reject(err);
        else resolve(res);
      });
  });
}
 
export function postRequestWithFormData(url, formData) {
  return new Promise((resolve, reject) => {
    request
      .post(url)
      .send(formData)
      .set("Accept", "application/json")
      .end((err, res) => {
        if (!res) reject(err);
        else resolve(res);
      });
  });
}
 
export function patchRequestWithFormData(url, formData) {
  return new Promise((resolve, reject) => {
    request
      .post(url)
      .send(formData)
      .end((err, res) => {
        if (!res) reject(err);
        else resolve(res);
      });
  });
}
 
export function postRequest(url) {
  return new Promise((resolve, reject) => {
    request
      .post(url)
      .set("Accept", "application/json")
      .end((err, res) => {
        if (!res) reject(err);
        else resolve(res);
      });
  });
}
 
export function deleteRequest(url) {
  return new Promise((resolve, reject) => {
    request.delete(url).end((err, res) => {
      if (!res) reject(err);
      else resolve(res);
    });
  });
}
 