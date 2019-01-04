module.exports.readtext = (number) => {
    var numberText = ["", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];
    var digits = ["หน่วย", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];

    var inputText = number;

    var res = "";

    var i;
    for (i = 0; i < inputText.length; i++) {
        if (inputText[i] !== "0") {
            res = res + numberText[parseInt(inputText[i])];
            res = res + digits[inputText.length - (i + 1)];
        }
    }

    res = res.replace("หนึ่งสิบ", "สิบ");
    res = res.replace("สองสิบ", "ยี่สิบ");
    res = res.replace("หนึ่งหน่วย", "เอ็ด");
    res = res.replace("หน่วย", "");
    if (inputText === "1") {
        res = res.replace("เอ็ด", "หนึ่ง");
    }

    console.log(res);
}
