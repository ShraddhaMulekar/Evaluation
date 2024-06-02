const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "text1.txt",
    "photo1.jpg",
    "program1.exe",
    "data1.csv",
    "report1.pdf"
  ];

  function countFileExtensions(files){
    let extCount = {};
    files.forEach(element => {
        let extension = element.split(".").pop();
        if(extCount[extension]){
            extCount[extension]++;
        }
        else{
            extCount[extension] = 1;
        }
    });
    return extCount;
  }
  console.log(countFileExtensions(files));
  

  //output:
//   {
//     pdf: 3,
//     png: 1,
//     txt: 1,
//     jpg: 1,
//     exe: 1,
//     csv: 1
//   }
    