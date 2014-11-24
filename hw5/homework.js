'use strict';

function deepCopy(object) {
  if (object === undefined)
  {
    return undefined;
  }

  return JSON.parse(JSON.stringify(object));
}