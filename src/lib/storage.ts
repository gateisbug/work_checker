const STORAGE_NAME = 'SCHEDULATOR_ITEM';

export function objectToJsonString(object: Object) {
  return JSON.stringify(object);
}

export function jsonToObject(json: string) {
  return JSON.parse(json);
}

export function setStorage(object: Object) {
  const json = objectToJsonString(object);
  localStorage.setItem(STORAGE_NAME, json);
}

export function getStorage() {
  const storage = localStorage.getItem(STORAGE_NAME);

  if(storage !== null) {
    return jsonToObject(storage);
  }
  else {
    return undefined;
  }
}