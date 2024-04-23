


  async function button(){
    let fileHandle = await window.showOpenFilePicker();
    let file = await fileHandle[0].getFile();
    let text = await file.text();
    
    // create a new window
    let newWindow = window.open("", "_blank");
    let docTxt = newWindow.document;
    
    // create a new pre element and set its text content
    let content = docTxt.createElement("pre");
    content.textContent = text;
    
    // add the new pre element to the new document body
    docTxt.body.appendChild(content);
  }
 /*async function save(){
     let stream = await fileHandle.createWritable();
     await stream.write(textarea.innerText);
     await stream.close();
 
 }*/
 