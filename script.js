let InputText = (() => {
    let textvalue = document.getElementById("input-id");
    console.log(textvalue.value);
    textvalue.select();
    // textvalue.setSelectRange(0, 99999);
    let txt = navigator.clipboard.writeText(textvalue.value)
    // console.log(txt);
    textvalue.value = "";
})
