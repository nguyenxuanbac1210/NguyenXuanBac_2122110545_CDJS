function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var result;
  
    if (inputUnit === "m") {
      if (outputUnit === "m") {
        result = inputValue;
      } else if (outputUnit === "ft") {
        result = inputValue * 3.28084;
      } else if (outputUnit === "in") {
        result = inputValue * 39.3701;
      }
    } else if (inputUnit === "ft") {
      if (outputUnit === "m") {
        result = inputValue * 0.3048;
      } else if (outputUnit === "ft") {
        result = inputValue;
      } else if (outputUnit === "in") {
        result = inputValue * 12;
      }
    } else if (inputUnit === "in") {
      if (outputUnit === "m") {
        result = inputValue * 0.0254;
      } else if (outputUnit === "ft") {
        result = inputValue * 0.0833333;
      } else if (outputUnit === "in") {
        result = inputValue;
      }
    }
  
    document.getElementById("result").innerText = "Kết quả: " + result.toFixed(2) + " " + outputUnit;
  }