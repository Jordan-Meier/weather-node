

exports.tempConvertToF = function(temp) {
  return ((temp-273.15)*9/5)+32;
}

exports.tempConvertToC = function(temp) {
  return (temp-273.15);
}
