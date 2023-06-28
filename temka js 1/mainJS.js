function calculate() {
			var x = 2;
			var result = (Math.sin(2 * x) + 4 * Math.pow(x, 2)) / Math.cos(3 * x) + Math.PI / 2;
			document.getElementById("result").value = Math.round(result);
      return;
}

function process() {
    const S1 = "Гродно - самый лучший город";
    const S2 = "Сегодня лучший день";
    
    const lengthS2 = S2.length;
    const containsS1 = S1.includes("лучший");
    const containsS2 = S2.includes("лучший");
    const char18 = S2.charAt(18);
    const asciiCode = S2.charCodeAt(18);

    document.getElementById("S1").value = S1;
    document.getElementById("S2").value = S2;
    document.getElementById("length").value = lengthS2;
    document.getElementById("contains1").value = containsS1;
    document.getElementById("contains2").value = containsS2;
    document.getElementById("char18").value = char18;
    document.getElementById("ascii").value = asciiCode;
  }